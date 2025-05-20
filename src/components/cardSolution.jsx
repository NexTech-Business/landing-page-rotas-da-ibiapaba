import "../css/components/cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import totem from "../assets/img/cards/mulher-totem-v2.png";
import casal from "../assets/img/cards/casal.jpg";
import dashboard from "../assets/img/cards/dashboard.png";
import cliente from "../assets/img/cards/cliente.png";
import tela_dashboard from "../assets/img/cards/tela_dashboard.png";
import seguranca from "../assets/img/cards/seguranca.png";
import acesso from "../assets/img/cards/acesso.png";

const CardSolution = () => {
  const contentCard = [
    {
      id: 1,
      image: casal,
      title:
        "Receba seus rendimentos diretamente na sua conta de forma prática",
      description:
        "Você pode resgatar seus ganhos a qualquer momento e transferi-los diretamente para a conta de sua escolha, com total conveniência e agilidade.",
    },
    {
      id: 2,
      image: totem,
      title: "Venda com facilidade, ganhe com a nossa rede",
      description:
        "Com nosso totem, seu negócio atrai mais clientes, vende mais e ainda fatura com comissões atrativas. Destaque-se entre os estabelecimentos mais bem avaliados e ganhe visibilidade e credibilidade no mercado!",
    },
    {
      id: 3,
      image: cliente,
      title: "Feche parcerias flexíveis com qualquer estabelecimento",
      description:
        "Adicione facilmente novos parceiros à sua rede e amplie suas oportunidades de negócios.",
    },
    {
      id: 4,
      image: tela_dashboard,
      title: "Visão completa do seu negócio",
      description:
        "Acompanhe de forma fácil e intuitiva, por meio de um dashboard interativo, sua receita, parceiros ativos, vendas e o histórico de tickets do seu estabelecimento.",
    },
   
    {
      id: 5,
      image: dashboard,
      title: "Ganhe comissões",
      description:
        "A cada produto de parceiros vendido em seu estabelecimento você ganha comissões, ampliando suas fontes de receita enquanto oferece uma experiência única e diversificada aos seus clientes.",
    },
    {
      id: 6,
      image: seguranca,
      title: "Segurança garantida",
      description:
        "Suas transações e dados são protegidos com tecnologia de ponta para total confiança.",
    },
    {
      id: 7,
      image: acesso,
      title: "Acesso em tempo real",
      description:
        "Visualize todos os status dos tickets e performance de vendas do seu negócio.",
    },
  ];

  return (
    <div className="card-solution">
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        freeMode={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {contentCard.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              {item.id % 2 === 0 ? (
                <div
                  className="p-3 rounded-2xl gap-2"
                  style={{ backgroundColor: "var(--brand-green-dark)" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="content-solution">
                    <h4 className="text-white">{item.title}</h4>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="p-3 rounded-2xl gap-2"
                  style={{ backgroundColor: "var(--brand-green-lemon-light)" }}
                >
                  <div className="content-solution">
                    <h4 style={{ color: "var(--brand-green-dark)" }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "var(--brand-green-dark)" }}>
                      {item.description}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSolution;


