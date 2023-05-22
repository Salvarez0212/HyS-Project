import Image from "next/image";
import backGroundImage from "../public/assets/homeImage.jpg";
import whoWeAreStyles from "../styles/home/whoWeAre.module.css";

export const WhoWeAre = () => {
  return (
    <article>
      <div className={whoWeAreStyles.background__container}>
        <Image
          fill
          src={backGroundImage}
          alt="Background kitchen"
          className={whoWeAreStyles.background__image}
        />
        <div className={whoWeAreStyles.whoWeAre__container}>
          <h2>Haz realidad tus sueños para tu hogar.</h2>
          <div>
            <p>
              Cocinas y decoraciones H&S, somos una empresa dedicada a la
              fabricación de muebles para tu hogar de acuerdo a tus espacios,
              con diseños personalizados haciendo realidad tus sueños para tu
              hogar.{" "}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
