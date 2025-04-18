import React, { useEffect, useState } from "react";
import ProjectItem from "../feautures/home/ProjectItem";
import { useLocation } from "react-router-dom";
import AddProposal from "../feautures/freelancer/AddProposal";

function FreelancerAddProposal() {
  const location = useLocation();
  const [project, setProject] = useState();
  useEffect(() => {
    setProject(location.state);
  }, [location.state]);

  return (
    <div>
      {project ? <ProjectItem project={project} page="addProposal" /> : null}
      <div className="my-5 base-color"></div>
      <AddProposal />
    </div>
  );
}

export default FreelancerAddProposal;
