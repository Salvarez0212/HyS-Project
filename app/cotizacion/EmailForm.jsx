import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailFormStyles from "../../styles/cotizacion/emailForm.module.scss";

export const EmailForm = () => {
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = clientData;
  const handleInput = (event) => {
    const { name, value } = event.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/moqzoajg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        setClientData({ name: "", email: "", phone: "" });
        Swal.fire({
          icon: "check",
          title: "Gracias!",
          text: "En el menor tiempo posible te estaremos contactando",
        });
      } else {
        alert("Ha ocurrido un error. Por favor, inténtalo nuevamente.");
      }
    } catch (error) {
      alert("Ha ocurrido un error. Por favor, inténtalo nuevamente.");
    }
  };

  return (
    <article className={emailFormStyles.form__container}>
      <h4>
        Déjanos tus datos y te contactaremos para hacer una cotización más
        personalizada sin ningún costo ni compromiso.
      </h4>
      <form className={emailFormStyles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">1. Ingresa tu nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            className={emailFormStyles.input}
            onChange={handleInput}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">2. Ingresa tu Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className={emailFormStyles.input}
            onChange={handleInput}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">3. Ingresa tu telefono</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className={emailFormStyles.input}
            onChange={handleInput}
            value={phone}
          />
        </div>
        <div className={emailFormStyles.button__container}>
          <button className={emailFormStyles.button} type="submit">
            Enviar
          </button>
        </div>
      </form>
    </article>
  );
};
