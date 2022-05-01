import { Link, useParams } from "react-router-dom";
import { data } from "../Data/Data";

const DetailedProject = () => {
  const { projects } = data;
  const { name } = useParams();
  const detailedProject = projects.find((project) => project.name === name);
  console.log(detailedProject);

  console.log(name);
  return (
    <div className='detailed-project-container'>
      <Link to='/projects'>
        <button>
          <i>Volver a todos los proyectos</i>
        </button>
      </Link>
      <div className='detailed-project-top'>
        <h1>{detailedProject.name}</h1>
        <img src={detailedProject.image} alt={detailedProject.name} />
      </div>
      <div className='detailed-project-bot'>
        <p>{detailedProject.description}</p>
        <a
          className='link-text'
          href={detailedProject.links[0]}
          target='_blank'
          rel='noreferrer'
        >
          <i>Desplegar proyecto</i>
        </a>
        <a
          className='link-text'
          href={detailedProject.links[1]}
          target='_blank'
          rel='noreferrer'
        >
          <i>Ver repositorio de github</i>
        </a>
      </div>
    </div>
  );
};

export default DetailedProject;
