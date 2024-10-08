import React from "react";
import ProjectCard from "./project-card";
import { getProjects } from "@/services/project";

const ProjectList = async () => {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
