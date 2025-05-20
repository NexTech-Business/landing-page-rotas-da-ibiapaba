import CardSecurity from "../components/cardSecurity";
import LabelComponent from "../components/label";
import "../css/containers/securitySection.css";
import Container from "./containerDefault";

const SecuritySection = () => {
	return (
		<section className="security" id="security">
			<Container>
				<div className="security__content">
					<div className="security__text">
						<LabelComponent text={"Segurança"} />
						<h1>
							Segurança é a sua prioridade.
							<br /> E a nossa também!
						</h1>
						<p>
							A confiança é construída pela proteção dos seus dados e
							tranquilidade. Por isso, cada solução é desenvolvida com foco
							total em segurança.
						</p>
					</div>

					<CardSecurity />
				</div>
			</Container>
		</section>
	);
};

export default SecuritySection;
