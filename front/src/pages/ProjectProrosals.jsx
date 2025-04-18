import React from "react";
import useSingleProject from "../feautures/owner/useSingleProject";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import ProjectProposalsBody from "../feautures/project/projectProposalsBody";

function ProjectProrosals() {
  const param = useParams();
  const { data, isPending } = useSingleProject(param.id);
  const project = data?.project;
  if (isPending)
    return (
      <div className="h-100 flex items-center justify-center">
        <Loader size="20px" color="blue" />
      </div>
    );
  return <ProjectProposalsBody project={project} />;
}

export default ProjectProrosals;
