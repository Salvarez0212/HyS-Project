"use client";
import axios from "axios";
import projectsStyles from "../../styles/proyectos/proyectos.module.scss";
import { useEffect, useState } from "react";

const proyectos = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("./products.json")
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  console.log(projects);
  return (
    <main>
      <article className={projectsStyles.text__container}>
        <h2>Algunos de nuestros proyectos</h2>
        <p>
          Desde el 2015, y en diferentes lugares del Colombia, hemos cumplido a
          nuestros clientes con su sueño de tener lo mejor para su hogar.
        </p>
      </article>
    </main>
  );
};

export default proyectos;
