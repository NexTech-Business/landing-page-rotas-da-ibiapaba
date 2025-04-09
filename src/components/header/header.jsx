import NavBar from "./navBar";
import LogoRotas from "./logo";
import ButtonRegister from "../buttonRegister";
import "../../css/components/header.css";

const Header = () => {
  return (
    <header className="header">
      <LogoRotas />
      <NavBar />
      <div className=" gap-4 w-auto items-center hidden md:flex flex-row">
        <ButtonRegister text="Saiba mais!" />
      </div>


    </header>
  );
};

export default Header;
