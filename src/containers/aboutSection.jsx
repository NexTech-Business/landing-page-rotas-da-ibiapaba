import "../css/components/partnersCard.css";
import PartnersCard from "../components/partnersCard";
import funcionarios from "../assets/img/cards/investidores.jpg";

const AboutSection = () => {
	return (
		<section className="about__section py-10" id="about">
			<PartnersCard
				img={funcionarios}
				label="Sobre nós"
			/>
		</section>
	);
};

export default AboutSection;
