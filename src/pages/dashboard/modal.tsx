import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";
import "../../style/global.js";
import { Modal } from "./style.js";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { UserContext } from "../../contexts/index";

function ShwoModal() {
  const { HandleFormTech, showModal, setShowModal } = useContext(TechContext);
  const { yup, yupResolver, useForm } = useContext(UserContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <main>
      <Modal visibility={showModal}>
        <form onSubmit={handleSubmit(HandleFormTech)}>
          <h4>Cadastrar Tecnologia</h4>
          <AiOutlineCloseCircle
            className="iconClosed"
            onClick={() => setShowModal("hidden")}
          />
          <label>Nome</label>
          <input
            type="text"
            name="title"
            placeholder="Ex:  React..."
            {...register("title")}
          />
          {erros}
          <label htmlFor="course_module">Selecionar Status</label>
          <select name="status" id="modulos" {...register("status")}>
            Selecionar
            <option value="tech">Iniciante</option>
            <option value="tech">Intermediário</option>
            <option value="tech">Avançado</option>
          </select>
          {erros}
          <button>Cadastrar Tecnologia</button>
        </form>
      </Modal>
    </main>
  );
}

export default ShwoModal;
