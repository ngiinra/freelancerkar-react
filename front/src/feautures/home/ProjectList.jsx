import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, page = "" }) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-col">
      {projects.map((project) => (
        <ProjectItem project={project} key={project._id} page={page} />
      ))}
    </div>
  );
}

export default ProjectList;
