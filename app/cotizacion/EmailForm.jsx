import emailFormStyles from "../../styles/cotizacion/emailForm.module.scss";

export const EmailForm = () => {
  return (
    <article className={emailFormStyles.form__container}>
      <h4>
        Déjanos tus datos y te contactaremos para hacer una cotización más
        personalizada sin ningún costo ni compromiso.
      </h4>
      <div className={emailFormStyles.form}>
        <div>
          <label htmlFor="name">1. Ingresa tu nombre</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">2. Ingresa tu Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">2. Ingresa tu telefono</label>
          <input type="number" name="phone" id="phone" />
        </div>
      </div>
    </article>
  );
};
