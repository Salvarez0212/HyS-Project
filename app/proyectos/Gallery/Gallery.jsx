"use client";
import Image from "next/image";
import { projects } from "../projects";

import galleryStyles from "../../../styles/proyectos/gallery.module.scss";

export const Gallery = () => {
  //TO-DO: connect with strapi and delete projects.js

  //const [projects, setProjects] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("./products.json")
  //       .then((response) => {
  //         setProjects(response.data.projects);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching projects:", error);
  //       });
  //   }, []);

  return (
    <section className={galleryStyles.gallery__container}>
      <div>
        <select name="" id="">
          <option value="">Todos</option>
          <option value="cocinas">Cocinas</option>
          <option value="closets">Closets y vestieres</option>
          <option value="otros">Otros</option>
        </select>
      </div>
      <article className={galleryStyles.gallery__grid}>
        {projects.map((project) => (
          <div key={project.id} className={galleryStyles.image__container}>
            <img
              src={project.image}
              alt={project.category}
              className={galleryStyles.image}
            />
          </div>
        ))}
      </article>
    </section>
  );
};
