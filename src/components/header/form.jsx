import "../../css/components/form.css";
import { Rocket } from "lucide-react";
import ButtonRegister from "../buttonRegister";

const Form = () => {
  return (
    <section className="form-section">
      <div className="form-glass">
        <h4 className="form-title">
          <Rocket className="text-white hidden md:flex" size={50} />
          Seja um dos primeiros a acessar o sistema mais completo da Serra da
          Ibiapaba
        </h4>
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Ex: José Maria"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp" className="form-label">
              WhatsApp:
            </label>
            <input
              id="whatsapp"
              type="text"
              placeholder="(XX) X XXXX-XXXX"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ex: josemaria24@gmail.com"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="negocio" className="form-label">
              Sobre seu negócio:
            </label>
            <input
              id="negocio"
              type="text"
              placeholder="Ex: tenho um restaurante"
              className="input-field"
            />
          </div>
          <ButtonRegister text="Quero ser um dos primeiros!" />
        </form>
      </div>
    </section>
  );
};

export default Form;


