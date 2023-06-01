import { Quote } from "./Quote";

import quoteStyles from "../../styles/cotizacion/cotizacion.module.scss";

const cotizacion = () => {
  return (
    <section>
      <article className={quoteStyles.text__container}>
        <h2>Haz tu cotizacion</h2>
        <p>
          Cocinas y decoraciones H&S te invita a que hagas una cotización
          aproximada de tus muebles, recuerda que este precio puede variar por
          diversos factores, por eso también te invitamos a te comuniques con
          nosotros una vez hayas hecho esta cotización para darte una atención
          más precisa y personalizada según tus espacios.{" "}
        </p>
      </article>
      <Quote />
    </section>
  );
};

export default cotizacion;
