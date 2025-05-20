import NavBar from "./navBar";
import LogoRotas from "./logo";
import ButtonRegister from "../buttonRegister";
import "../../css/components/header.css";
import Container from "../../containers/containerDefault";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header">
          <LogoRotas />
          <NavBar />
          <div className=" gap-4  items-center hidden md:flex flex-row">
            <ButtonRegister text="Cadastre-se" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;


