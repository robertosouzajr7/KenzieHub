import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../services/api";

interface iUserProvider {
  children: React.ReactNode;
}

export interface iData {
  email: string;
  password: string;
  passwordConfirmation?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iUserContextProps {
  HandleForm: (data: iData) => Promise<void>;
  HandleFormLogin: (data: iData) => Promise<void>;
  newUser: iData[];
  setNewUser: React.Dispatch<React.SetStateAction<iData[]>>;
  tech: iTechs[];
  setTech: React.Dispatch<React.SetStateAction<iTechs[]>>;
  Logout: () => void;
  yup: typeof yup;
  yupResolver: any;
  useForm: any;
  toast: any;
  navigate: any;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  logout: boolean;
  setLogout: React.Dispatch<React.SetStateAction<boolean>>;
  HidePassword: () => void;
  AiFillEyeInvisible: any;
  AiFillEye: any;
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const UserContext = createContext({} as iUserContextProps);

function Userprovider({ children }: iUserProvider) {
  const [user, setUser] = useState<iData[]>([]);
  const [tech, setTech] = useState<iTechs[]>([]);
  const [newUser, setNewUser] = useState<iData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const HidePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const HandleForm = async (data: iData) => {
    try {
      const response = await Api.post("/sessions", data);
      setUser(response.data.user);
      setTech(response.data.user.techs);

      localStorage.setItem("@idUser", `${response.data.user.id}`);
      localStorage.setItem("@token", `${response.data.token}`);
      //toast.success('Login realizado com sucesso"');
      navigate(`/dashboard`);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const HandleFormLogin = async (data: iData) => {
    Api.post("/users", data)
      .then((response) => {
        setNewUser([response.data]);
        toast.success("Usuario criado com sucesso");
        navigate(`/`);
        setLogout(false);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  useEffect(() => {
    async function getUser() {
      const tokenUser = localStorage.getItem("@token");
      if (tokenUser) {
        try {
          Api.defaults.headers.authorization = `Bearer ${tokenUser}`;
          const { data } = await Api.get("/profile");
          setUser(data);
          setTech(data.techs);
        } catch (error) {}
      } else {
        // toast.error("Você precisa está logado para acessar essa pagina!");
        localStorage.setItem("@idUser", "");
        localStorage.setItem("@token", "");
        localStorage.setItem("@user", "");
        navigate("/");
      }
    }

    getUser();
  }, []);

  const Logout = () => {
    localStorage.setItem("@idUser", "");
    localStorage.setItem("@token", "");
    toast.success("Desconectado com sucesso!");
    // <button className="btnLogado" />;
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        tech,
        setTech,
        Logout,
        HandleFormLogin,
        yup,
        yupResolver,
        useForm,
        HandleForm,
        toast,
        navigate,
        user,
        setUser,
        newUser,
        setNewUser,
        showPassword,
        setShowPassword,
        logout,
        setLogout,
        HidePassword,
        AiFillEyeInvisible,
        AiFillEye,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default Userprovider;
