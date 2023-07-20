import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItemList= projects.map(project=><ProjectItem key={project.id} technologies={project.technologies} about={project.about} name={project.name}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItemList}</div>
    </div>
  );
}

export default ProjectList;
