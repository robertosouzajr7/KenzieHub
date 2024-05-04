import { useContext } from "react";
import { UserContext } from "../../contexts";
import "../../style/global.js";
import Footer from "../../components/footer/index.jsx";

function Register() {
  const {
    HandleFormLogin,
    HidePassword,
    navigate,
    AiFillEyeInvisible,
    AiFillEye,
    yup,
    yupResolver,
    useForm,
    showPassword,
  } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("formato invalido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(
        8,
        "Mínimo 8 Caracteres, Deve conter Letras, Símbolos e Números, Maísuculas e minúsculas"
      ),
    passwordConfirmation: yup
      .string()
      .required("Campo Obrigatório")
      .min(
        8,
        "Mínimo 8 Caracteres, Deve conter Letras, Símbolos e Números, Maísuculas e minúsculas"
      )

      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <main>
      <div className="divLogo">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btnVoltar Disable"
        >
          Voltar
        </button>
      </div>
      <form className="slideInRight" onSubmit={handleSubmit(HandleFormLogin)}>
        <h2>Crie sua Conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message}
        <label htmlFor="password">Senha</label>
        <input
          className="InputSenha"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {showPassword ? (
          <AiFillEye onClick={HidePassword} className="iconEye" />
        ) : (
          <AiFillEyeInvisible onClick={HidePassword} className="iconEye" />
        )}
        {errors.password?.message}
        <label htmlFor="passwordConfirmation">Confirmar senha</label>
        <input
          className="InputSenha"
          name="passwordConfirmation"
          type={showPassword ? "text" : "password"}
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirmation")}
        />
        {showPassword ? (
          <AiFillEye onClick={HidePassword} className="iconEye" />
        ) : (
          <AiFillEyeInvisible onClick={HidePassword} className="iconEye" />
        )}
        {errors.passwordConfirmation?.message}
        <label htmlFor="bio">Bio</label>
        <input
          name="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio?.message}
        <label htmlFor="contact">Contato</label>
        <input
          name="contact"
          type="text"
          placeholder="Opção de Contato"
          {...register("contact")}
        />
        {errors.contact?.message}
        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          name="course_module"
          id="modulos"
          {...register("course_module")}
        >
          <option value="modulo1">Módulo I</option>
          <option value="modulo2">Módulo II</option>
          <option value="modulo3">Módulo III</option>
          <option value="modulo4">Módulo IV</option>
          <option value="modulo5">Módulo V</option>
          <option value="modulo6">Módulo VI</option>
          <option value="modulo7">Módulo VII</option>
        </select>
        {errors.course_module?.message}
        <button type="submit">Cadastrar</button>
      </form>
      <Footer />
    </main>
  );
}

export default Register;
