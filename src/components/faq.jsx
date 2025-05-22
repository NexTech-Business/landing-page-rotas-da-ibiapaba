import { useState } from "react";
import "../css/components/faq.css";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
	const contentFaq = [
		{
			pergunta: "Como funciona o acesso ao sistema Rotas da Ibiapaba?",
			resposta:
				"Você pode acessar usando seu celular ou computador para gerenciar as suas vendas e pedidos. 
				Seus clientes poderão comprar a partir de qualquer dispositivo ou por meio de um dos nossos totens espalhados pelos estabelecimentos parceiros ou em pontos turísticos estratégicos.",
		},
		{
			pergunta: "O cliente precisa estar no estabelecimento para comprar?",
			resposta:
				"Não. O cliente pode comprar produtos de qualquer parceiro através um link ou em Totens, o que facilita o acesso aos seus produtos e aumenta o alcance do seu negócio.",
		},
		{
			pergunta: "Quais tipos de produtos podem ser vendidos?",
			resposta:
				"A plataforma permite a venda de produtos, serviços, ingressos e outros através de tickets de acesso, podendo valer produtos típicos da região, como ingressos para atrações, artesanato, souvenirs, passeios e outros itens turisticos locais.",
		},
		{
			pergunta: "Como os clientes sabem quais locais possuem Totens?",
			resposta:
				"Todos os estabelecimentos parceiros com Totens estão listados no nosso site. Isso ajuda o cliente a encontrar facilmente onde comprar seus produtos.",
		},
		{
			pergunta: "Quais formas de pagamento são aceitas?",
			resposta:
				"Por enquanto, apenas pagamentos em Pix, oferecendo praticidade para os clientes e mais possibilidades de venda para o seu negócio.",
		},
		{
			pergunta: "Sou dono de um estabelecimento. Como posso participar?",
			resposta:
				"Basta se cadastrar pelo nosso site. O processo é simples e rápido. Após o cadastro, em até 48h estaremos entrando em contato.",
		},
		{
			pergunta: "Como funciona a integração dos meus produtos na plataforma e nos Totens?",
			resposta:
				"Você cadastra seus produtos na plataforma e eles ficam automaticamente disponíveis nos Totens dos parceiros mais próximos, conforme o plano que você contratar.",
		},
		{
			pergunta: "Quem define os preços dos produtos?",
			resposta:
				"O controle é todo seu! O próprio estabelecimento define os preços dos produtos cadastrados.",
		},
		{
			pergunta: "Como recebo o pagamento das vendas feitas pela palataforma?",
			resposta:
				"Os pagamentos são transferidos diretamente para a sua conta cadastrada, dentro do prazo estipulado em contrato e termos de uso. Basta solicitar pelo próprio sistema o pedido de saque.",
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
