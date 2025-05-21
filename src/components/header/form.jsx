import "../../css/components/form.css";
import { Rocket } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import jsonp from "jsonp";
import { useState } from "react";

const MAILCHIMP_URL =
  "https://gmail.us7.list-manage.com/subscribe/post-json?u=587aee2ac522b5fc43e76d5db&id=92bb11e4bd";

const formSchema = z.object({
  fname: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "WhatsApp é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  company: z.string().min(1, "Informação sobre o negócio é obrigatória"),
});

const Form = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    setMessage(null);

    const params = new URLSearchParams({
      EMAIL: data.email,
      FNAME: data.fname,
      PHONE: data.phone,
      COMPANY: data.company,
      c: "callback",
    });

    const url = `${MAILCHIMP_URL}&${params.toString()}`;

    jsonp(url, { param: "c" }, (err, result) => {
      setLoading(false);
      if (err) {
        setMessage("Erro ao enviar formulário.");
        return;
      }
      if (result.result === "success") {
        setMessage("Inscrição realizada com sucesso!");
        reset();
      } else {
        setMessage(result.msg || "Erro ao enviar formulário.");
      }
    });
  };

  return (
    <section className="form-section">
      <div className="form-glass">
        <h4 className="form-title">
          <Rocket className="text-white hidden md:flex" size={50} />
          Seja um dos primeiros a acessar o sistema mais completo da Serra da
          Ibiapaba
        </h4>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fname" className="form-label">
              Nome:
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Ex: José Maria"
              className="input-field"
              {...register("fname")}
            />
            {errors.fname && (
              <p className="form-error">{errors.fname.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              WhatsApp:
            </label>
            <input
              id="phone"
              type="text"
              placeholder="(XX) X XXXX-XXXX"
              className="input-field"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
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
              {...register("email")}
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Sobre seu negócio:
            </label>
            <input
              id="company"
              type="text"
              placeholder="Ex: tenho um restaurante"
              className="input-field"
              {...register("company")}
            />
            {errors.company && (
              <p className="form-error">{errors.company.message}</p>
            )}
          </div>

          <button type="submit" disabled={loading} className="btn-submit">
            {loading ? "Enviando..." : "Subscribe"}
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Form;
