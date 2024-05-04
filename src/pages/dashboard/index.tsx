import { useContext } from "react";
import { UserContext } from "../../contexts/index";
import "../../style/global.js";
import { Header, Main } from "./style.js";
import { BsTrash } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TechContext } from "../../contexts/techContext";
import ShwoModal from "./modal";
function Dashboard() {
  const { user, Logout, tech } = useContext(UserContext);

  const { setShowModal, removeTech } = useContext(TechContext);
  return (
    <Main>
      <Header>
        <button onClick={Logout}>Sair</button>
      </Header>
      <h1>bem vindo</h1>

      <div className="containerUser">
        <div className="containerUser">
          <h2>Olá {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </div>
      <div className="containerTech">
        <h2>Tecnologias</h2>
        <IoIosAddCircleOutline
          onClick={() => setShowModal("visible")}
          className="iconAdd"
        />
      </div>
      <ul>
        {tech?.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <BsTrash onClick={() => removeTech(item.id)} />
          </li>
        ))}
      </ul>
      <ShwoModal />
    </Main>
  );
}

export default Dashboard;
