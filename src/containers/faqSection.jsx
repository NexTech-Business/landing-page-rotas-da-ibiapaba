import ButtonRegister from "../components/buttonRegister";
import FAQ from "../components/faq";
import LabelComponent from "../components/label";
import "../css/containers/faqSection.css";
import Container from "./containerDefault";
const FaqSection = () => {
  return (
    <section className="faq" id="faq">
      <Container>
        <div className="faq__content">
          <LabelComponent text="FAQ" />
          <div className="faq__text">
            <h1>Dúvidas frequentes</h1>
            <p>
              Aqui, respondemos às dúvidas mais comuns para que você entenda
              como podemos transformar seus processos e ajudar a alcançar
              resultados mais rápidos e eficazes.
            </p>
          </div>
          <FAQ />
          <div>
            <ButtonRegister text="Quero me cadastrar agora!" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
