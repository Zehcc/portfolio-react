import React from "react";
import { Link } from "react-router-dom";
import Logos from "./Logos";

const Project = ({ project }) => {
  return (
    <li className='project-container'>
      <div className='img-container'>
        <img src={project.image} alt={project.name} />
      </div>
      <div className='txt-container'>
        <h1>{project.name}</h1>
        <Logos languajes={project.languajes} />
        <Link to={`/project/${project.name}`}>
          <button>
            <i>Ver detalles del proyecto</i>
          </button>
        </Link>
      </div>
    </li>
  );
};

export default Project;
