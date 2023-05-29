"use client";
import { useState } from "react";
import { CocinaOpciones } from "./CocinaOpciones";
import { ClosetOpciones } from "./ClosetOpciones";
import { BanoOpciones } from "./BanoOpciones";
import { CentroOpciones } from "./CentroOpciones";
import quoteStyles from "../../styles/cotizacion/quote.module.scss";

export const Quote = () => {
  const [type, setType] = useState("cocinas");

  const handleType = (event) => {
    const type = event.target.value;
    setType(type);
  };

  return (
    <section className={quoteStyles.quote__container}>
      <article className={quoteStyles.select__container}>
        <label htmlFor="Type of quote">Selecciona el tipo de mueble: </label>
        <select name="Type of quote" onChange={handleType}>
          <option value="cocinas">Cocina</option>
          <option value="muebles de baño">Muebles de baño</option>
          <option value="closets">Closets y vestieres</option>
          <option value="centro entretenimiento">
            Centros de entretenimiento
          </option>
        </select>
      </article>
      {type === "muebles de baño" ? (
        <BanoOpciones />
      ) : type === "closets" ? (
        <ClosetOpciones />
      ) : type === "centro entretenimiento" ? (
        <CentroOpciones />
      ) : (
        <CocinaOpciones />
      )}
    </section>
  );
};
