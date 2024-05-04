import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../../style/animations.css";
import "../../style/global.js";
import Footer from "../../components/footer/index.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts";

function Login() {
  const {
    yup,
    yupResolver,
    useForm,
    HandleForm,
    HidePassword,
    navigate,
    showPassword,
  } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("formato invalido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(
        8,
        "Mínimo 8 Caracteres, Deve conter Letras, Símbolos e Números, Maísuculas e minúsculas"
      ),
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
      <form className="slideInRight" onSubmit={handleSubmit(HandleForm)}>
        <h2 className="Title1">Login</h2>
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
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message}
        {showPassword ? (
          <AiFillEye onClick={HidePassword} className="iconEye" />
        ) : (
          <AiFillEyeInvisible onClick={HidePassword} className="iconEye" />
        )}
        <button type="submit">Entrar</button>
        <p className="Headline">Ainda não possui uma conta?</p>
        <button
          className="Disable"
          onClick={() => {
            navigate("/register");
          }}
          type="submit"
        >
          Cadastrar-se
        </button>
      </form>
      <Footer />
    </main>
  );
}

export default Login;
