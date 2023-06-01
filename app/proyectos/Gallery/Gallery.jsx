import galleryStyles from "../../../styles/proyectos/gallery.module.scss";
import Swal from "sweetalert2";

const Gallery = ({ projects }) => {
  const handleModal = (urlImage, category) => {
    Swal.fire({
      html: `<img src="${urlImage}" alt="${category}" style="max-width: 100%; max-height: 100%;" />`,
      showConfirmButton: true,
      width: "80%",
      height: "80%",
      customClass: {
        confirmButton: `${galleryStyles.confirm__button}`,
      },
    });
  };

  return (
    <section className={galleryStyles.gallery__container}>
      <article className={galleryStyles.gallery__grid}>
        {projects.map((project) => (
          <div key={project.id} className={galleryStyles.image__container}>
            <img
              src={project.image}
              alt={project.category}
              className={galleryStyles.image}
              onClick={() => handleModal(project.image, project.category)}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default Gallery;
