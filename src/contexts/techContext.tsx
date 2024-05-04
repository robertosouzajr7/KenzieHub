import { createContext, useContext, useState } from "react";
import { iTechs, UserContext } from ".";
import Api from "../services/api";

export interface iTechProvider {
  children: React.ReactNode;
}

interface iData {
  id: string;
  title: string;
  status: string;
}

interface iTechContextProps {
  showModal: any;
  setShowModal: React.Dispatch<React.SetStateAction<any>>;
  removeTech: (data: string) => void;
  HandleFormTech: (data: iData) => void;
}

export const TechContext = createContext<iTechContextProps>(
  {} as iTechContextProps
);

function TechProvider({ children }: iTechProvider) {
  const [showModal, setShowModal] = useState<iTechContextProps | any>();
  const { tech, setTech } = useContext(UserContext);

  const HandleFormTech = (data: iData) => {
    console.log(data);
    Api.post("/users/techs", data).then((res) => setTech([...tech, res.data]));
    setShowModal("hidden");
  };

  const removeTech = (data: string) => {
    const newList = tech.filter((item: any) => item.id !== data);
    setTech([...newList]);
    Api.delete(`/users/techs/${data}`);
  };
  return (
    <TechContext.Provider
      value={{
        removeTech,
        HandleFormTech,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
