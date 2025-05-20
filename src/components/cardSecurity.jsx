import "../css/components/cardSecurity.css";
import {
	Bell,
	ShieldCheck,
	Wrench,
	Lock,
	ShieldHalf,
	Undo2,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const size = 30;
const color = "#045939";

const contentCard = [
  {
    id: 1,
    icon: <Bell color={color} size={size}/>,
    title: "Notificações em tempo real",
    description:
      "Receba alertas sobre atividades, pedidos e valores direto no celular, de forma rápida e segura.",
  },
  {
    id: 2,
    icon: <Lock color={color} size={size}/>,
    title: "Acesso protegido",
    description:
      "Autenticação em duas etapas e criptografia reforçada garantem sua segurança no acesso total.",
  },
  {
    id: 3,
    icon: <Wrench color={color} size={size}/>,
    title: "Manutenção garantida",
    description:
      "Suporte técnico ágil e eficaz para ajustes no totem, sempre disponível quando for necessário.",
  },
  {
    id: 4,
    icon: <ShieldHalf color={color} size={size} />,
    title: "Segurança por níveis",
    description:
      "Controle de permissões e acessos específicos para cada tipo de usuário dentro da plataforma.",
  },
  {
    id: 5,
    icon: <ShieldCheck color={color} size={size} />,
    title: "Monitoramento ativo",
    description:
      "Todas as atividades são registradas e acompanhadas em tempo real, com proteção de dados.",
  },
  {
    id: 6,
    icon: <Undo2 color={color} size={size} />,
    title: "Política de reembolso",
    description:
      "Erros ou cancelamentos? Faça reembolsos facilmente com segurança, praticidade e agilidade.",
  },
];

const CardSecurity = () => {
	return (
		<div className="card-security-container">
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				loop={true}
				slidesPerView={2}
				spaceBetween={16}
				className="w-full h-full"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
			>
				{contentCard.map((object) => (
					<SwiperSlide key={object.id}>
						<div className="card-security">
							<div className="content-security">
								<div className="mb-4">{object.icon}</div>
								<h4 className="card-title">{object.title}</h4>
								<p className="card-description">{object.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CardSecurity;


