import "../css/containers/heroSections.css";
import bannerHero from "../assets/img/cards/imgHero.svg";
import LabelComponent from "../components/label";
import Header from "../components/header/header";
import Form from "../components/header/form";
import Container from "./containerDefault";
import ButtonRegister from "../components/buttonRegister";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={bannerHero} alt="Banner Hero" className="hero__image" />

      <div className="hero__overlay"> </div>
      <div className="relative z-20">
        <Header />
      </div>

      <Container>
        <div className="pb-5 md:pb-20"> </div>
        <div className="hero__content">
          <div className="hero__text">
            <LabelComponent text="Lançamento em breve!" />
            <h1>
              Cadastre-se para ter acesso antecipado ao sistema que vai
              impulsionar suas vendas e trazer mais visibilidade para o seu
              negócio.
            </h1>
            <ButtonRegister text="Cadastre-se e saia na frente!" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
