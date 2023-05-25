import { Gallery } from "./Gallery/Gallery";

import projectsStyles from "../../styles/proyectos/proyectos.module.scss";

const proyectos = () => {
  return (
    <main>
      <article className={projectsStyles.text__container}>
        <h2>Algunos de nuestros proyectos</h2>
        <p>
          Desde el 2008, y en diferentes lugares de Colombia, hemos cumplido a
          nuestros clientes con su sueño de tener lo mejor para su hogar.
        </p>
      </article>

      <Gallery />
    </main>
  );
};

export default proyectos;
