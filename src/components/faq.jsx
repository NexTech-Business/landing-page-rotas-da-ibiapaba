import { useState } from "react";
import "../css/components/faq.css";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
	const contentFaq = [
		{
			pergunta: "Como funciona o Totem de Acesso?",
			resposta:
				"O Totem permite que os clientes comprem produtos serranos — como ingressos, souvenirs e artesanato — diretamente no seu estabelecimento, de forma rápida e prática. É uma solução que melhora a experiência do cliente e aumenta as suas vendas.",
		},
		{
			pergunta: "O cliente precisa estar no estabelecimento para comprar?",
			resposta:
				"Não. O cliente pode comprar produtos de qualquer parceiro que possua um Totem, o que facilita o acesso aos seus produtos e aumenta o alcance do seu negócio.",
		},
		{
			pergunta: "Quais tipos de produtos podem ser vendidos?",
			resposta:
				"A plataforma permite a venda de diversos produtos típicos da região, como ingressos para atrações, artesanato, souvenirs e outros itens locais.",
		},
		{
			pergunta: "Como os clientes sabem quais locais possuem Totem?",
			resposta:
				"Todos os estabelecimentos parceiros com Totem estão listados no nosso site. Isso ajuda o cliente a encontrar facilmente onde comprar seus produtos.",
		},
		{
			pergunta: "Quais formas de pagamento são aceitas?",
			resposta:
				"Os Totens aceitam cartão de crédito, débito e PIX, oferecendo praticidade para os clientes e mais possibilidades de venda para o seu negócio.",
		},
		{
			pergunta: "Sou dono de um estabelecimento. Como posso participar?",
			resposta:
				"Basta se cadastrar pelo nosso site. O processo é simples e rápido. Após a validação, seus produtos poderão ser exibidos nos Totens parceiros.",
		},
		{
			pergunta: "Como funciona a integração dos meus produtos no Totem?",
			resposta:
				"Você cadastra seus produtos na plataforma e eles ficam automaticamente disponíveis nos Totens dos parceiros que você escolher.",
		},
		{
			pergunta: "Quem define os preços dos produtos?",
			resposta:
				"O controle é todo seu! O próprio estabelecimento define os preços dos produtos cadastrados.",
		},
		{
			pergunta: "Como recebo o pagamento das vendas feitas pelo Totem?",
			resposta:
				"Os pagamentos são transferidos diretamente para a sua conta cadastrada, dentro do prazo estipulado em contrato.",
		},
		{
			pergunta: "E se eu tiver problemas técnicos com o Totem?",
			resposta:
				"Nossa equipe de suporte está sempre pronta para ajudar. Você pode entrar em contato pelo site ou pelos nossos canais de atendimento.",
		},
	];

	const [openQuestion, setOpenQuestion] = useState(null);

	const toggleAnswer = (index) => {
		setOpenQuestion(openQuestion === index ? null : index);
	};

	return (
		<div className="faq">
			{contentFaq.map((object, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div className="faq__item" key={index}>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div className="question" onClick={() => toggleAnswer(index)}>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<h5>{object.pergunta}</h5>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<ChevronDown className="text-(--brand-green-default)" />
					</div>
					<div className="answer">
						{openQuestion === index && <p>{object.resposta}</p>}
					</div>
				</div>
			))}
		</div>
	);
};

export default FAQ;
