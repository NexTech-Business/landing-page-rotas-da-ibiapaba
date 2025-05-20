import { Check, X } from "lucide-react";
import "../css/components/tableDiferenciais.css";
import logoWhite from "../assets/logoWhite.svg";

export default function TabelaUsuarios() {
	const content = [
		"Anuncie em outros estabelecimentos",
		"Comissões por vendas de produtos parceiros",
		"Experiência simples e segura",
		"Comunidade de empreendedores",
		"Visibilidade em locais movimentados",
	];

	return (
		<div className="table">
			<table className="table-user">
				<thead className="tabela-cabecalho">
					<tr>
						<th className=" inicio tabela-cabecalho-coluna text-(--brand-green-default) rounded-tl-2xl">Recursos</th>
						<th className=" meio tabela-cabecalho-coluna "><img src={logoWhite} alt="" className="h-6 w-auto" /></th>
						<th className=" fim tabela-cabecalho-coluna text-(--brand-green-default) rounded-tr-2xl">Outras plataformas</th>
					</tr>
				</thead>

				<tbody className="tabela-corpo ">
					{content.map((description, item) => (
						<tr key={item}>
							<td className="inicio tabela-coluna-texto ">{description}</td>
							<td className="meio tabela-coluna-icone ">
								<Check className="icone icone-check " />
							</td>
							<td className="fim tabela-coluna-icone">
								<X className="icone icone-fechar " />
							</td>
						</tr>
					))}
					<tr>
					<td className="inicio tabela-coluna-texto rounded-bl-2xl"> Taxas e comissões justas</td>
							<td className="meio tabela-coluna-icone ">
								<Check className="icone icone-check " />
							</td>
							<td className="fim tabela-coluna-icone rounded-br-2xl">
								<X className="icone icone-fechar " />
							</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
