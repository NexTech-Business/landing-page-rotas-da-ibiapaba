import LabelComponent from "../components/label";
import TabelaUsuarios from "../components/tableDiferenciais";
import Container from "./containerDefault";

const DifferenceSection = () => {
	return (
		<section className="difference hidden md:flex flex-col" id="difference">
			<Container>
				<div className="flex flex-col items-center justify-center rounded-2xl bg-(--brand-gray-default) p-16">
					
                    
                    <LabelComponent text={"Nossos diferenciais"}/>
                    <div className="difference__content flex flex-col items-center justify-center mb-8 text-center">
						<h1>Tudo em um único lugar</h1>
						<p className="w-1/2">
							Esqueça as plataformas caras e taxas abusivas. Ofereça uma nova
							forma simples e acessível para seus clientes comprarem seus
							produtos, serviços e acessos.
						</p>
					</div>

					<TabelaUsuarios />
				</div>
			</Container>
		</section>
	);
};

export default DifferenceSection;
