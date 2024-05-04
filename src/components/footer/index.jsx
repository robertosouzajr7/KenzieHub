import "../../style/global";
import { Navebar } from "./style";
import logo from "../../assets/Logo.png";
function Footer() {
  return (
    <footer>
      <Navebar>
        <img className="logo" src={logo} alt={logo} />
        <a href="#/">Sobre nós</a>
        <a href="#">Carrers</a>
        <a href="#">Localização</a>
        <a href="#">Home</a>
      </Navebar>
    </footer>
  );
}

export default Footer;
