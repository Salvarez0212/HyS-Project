"use client";
import { useEffect, useState } from "react";
import { projects } from "../projects";
import filterStyles from "../../../styles/proyectos/filter.module.scss";
import Gallery from "./Gallery";

const Filter = () => {
  const [category, setCategoty] = useState("Todos");
  const [projectsToShow, setProjectsToShow] = useState(projects);
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

  const handleCategories = (event) => {
    const category = event.target.value;
    setCategoty(category);
  };
  useEffect(() => {
    if (category !== "Todos") {
      setProjectsToShow(
        projects.filter((project) => project.category === category)
      );
    }
    if (category === "Todos") {
      setProjectsToShow(projects);
    }
  }, [category]);

  return (
    <section>
      <div className={filterStyles.filter__container}>
        <select name="categoy" onChange={handleCategories}>
          <option value="Todos">Todos</option>
          <option value="Cocina">Cocinas</option>
          <option value="Closet">Closets y vestieres</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <Gallery projects={projectsToShow} />
    </section>
  );
};

export default Filter;
