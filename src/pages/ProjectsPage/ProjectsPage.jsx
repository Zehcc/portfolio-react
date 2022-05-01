import React from "react";
import { data } from "../../Data/Data";
import Project from "../../components/Project";
const ProjectsPage = () => {
  const { projects } = data;
  return (
    <ul className='projects-list'>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </ul>
  );
};

export default ProjectsPage;
