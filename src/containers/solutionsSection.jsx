import CardSolution from "../components/cardSolution";
import LabelComponent from "../components/label";
import "../css/containers/solutionSection.css";
import Container from "./containerDefault";

const SolutionSection = () => {
  return (
    <section className="solution" id="solution">
      <Container>
        <div className="solution__content ">
          <div className="solution__text">
            <LabelComponent text={"Soluções"} />

            <h1>
              Muito mais funcionalidades e conveniência para o seu negócio!
            </h1>
            <p>
              Nossa plataforma oferece tudo o que você precisa para otimizar
              processos e alcançar resultados com mais eficiência.
            </p>
          </div>
          <CardSolution />
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
