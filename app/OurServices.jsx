import ourServices from "./OurServices/ourServices.js";
import servicesStyles from "../styles/home/ourServices.module.scss";

export const OurServices = () => {
  return (
    <section className={servicesStyles.services__container}>
      <h3>Nuestros servicios</h3>
      <article className={servicesStyles.card__container}>
        {ourServices.map((service) => (
          <div key={service.id} className={servicesStyles.card}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};
