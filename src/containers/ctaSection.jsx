import "../css/containers/ctaSection.css";
import ButtonRegister from "../components/buttonRegister";
import Image from "../assets/img/cards/funcionario2.jpg";
import LabelComponent from "../components/label";
import Form from "../components/header/form";
import Container from "./containerDefault";

const CtaSection = () => {
  return (
    <section
      className="cta-section" id="contact"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="cta-overlay"> </div>
      <Container>
        <div className="cta-wrapper">
          <div className="cta-text">
            <LabelComponent text="Entre em contato" />
            <h1 className="cta-title">
              Garanta acesso antecipado a plataforma mais completa da região!
            </h1>

            <p className="cta-description">
              Cadastre-se agora e seja pioneiro(a) no turismo e no comercio na
              Serra da Ibiapaba. Teste antes de todo mundo, compartilhe feedback
              e ajude a moldar o nosso futuro!
            </p>
          </div>

          <div className="cta-form">
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
