import footerStyles from "../../styles/footer.module.css";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsFillTelephoneFill,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <section className={footerStyles.footer__section}>
        <h4>Nuestras redes</h4>
        <div
          className={`${footerStyles.info__container} ${footerStyles.socials}`}
        >
          <BsInstagram />
          <a href="https://instagram.com/cocinas_y_decoraciones_hys?igshid=MzRlODBiNWFlZA==">
            <p>Instagram</p>
          </a>
        </div>
        <div
          className={`${footerStyles.info__container} ${footerStyles.socials}`}
        >
          <BsFacebook />
          <a href="https://www.facebook.com/profile.php?id=100086237362369&mibextid=ZbWKwL">
            <p>Facebook</p>
          </a>
        </div>
      </section>
      <section className={footerStyles.footer__section}>
        <h4>Nuestra ubicación</h4>
        <div>
          <p>Cll. 30A #74-44</p>
        </div>
      </section>
      <section className={footerStyles.footer__section}>
        <h4>Contactanos</h4>

        <div className={footerStyles.info__container}>
          <BsWhatsapp />
          <p>3008993542</p>
        </div>
        <div className={footerStyles.info__container}>
          <BsFillTelephoneFill />
          <p>4796971</p>
        </div>
      </section>
      <section className={footerStyles.footer__section}>
        <h4>Horarios</h4>
        <div className={footerStyles.schedule}>
          <p>Lun-Vie: 8:00Am - 5:00pm</p>
          <p>Sab: 8:00Am - 1:00pm</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
