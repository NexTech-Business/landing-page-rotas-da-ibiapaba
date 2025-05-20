import Container from "../containers/containerDefault";
import "../css/components/partnersCard.css";
import LabelComponent from "../components/label";
import { Check } from "lucide-react"; // ✅ Novo import

const PartnersCard = ({ img, label }) => {
	return (
		<section className="partners__card" id="partners">
			<div className="partners__wrapper">
				<div className="partners__image">
					<img src={img} alt="Imagem do card" className="image__content" />
				</div>

				<div className="partners__content">
					<Container>
						<div className="pr-5 pl-5 md:pr-10 md:pl-10 flex flex-col items-center md:items-start">
							<LabelComponent text={label} />
							<h1 className="partners__title">
							Conectamos você aos seus clientes de maneira simples e eficaz.
							</h1>
							<p className="partners__description">
								<strong className="font-bold">Nossa missão</strong><br/>Impulsionar o
								crescimento de negócios locais com soluções tecnológicas
								acessíveis e seguras.
							</p>
							<p className="partners__description">
								<strong className="font-bold">Nossa visão</strong><br/>
								
								Conectar
								estabelecimentos e consumidores, promovendo inovação e
								resultados.
							</p>

							<span className="text-lg font-semibold mt-2 text-white">Nossos Valores</span>
							<ul className=" text-white">
								{[
									"Foco no cliente",
									"Acessibilidade para todos",
									"Segurança e confiança",
									"Transparência nas relações",
								].map((valor, index) => (
									<li key={index} className="flex items-center gap-2 font-normal">
										<Check className="text-(--brand-green-lemon-light) w-5 h-5" />
										{valor}
									</li>
								))}
							</ul>
						</div>
					</Container>
				</div>
			</div>
		</section>
	);
};

export default PartnersCard;
