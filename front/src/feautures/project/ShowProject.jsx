import React from "react";
import ProjectDataFormPage from "../owner/ProjectDataFormPage";
import { useParams } from "react-router-dom";
import useSingleProject from "../owner/useSingleProject";
import Loader from "../../ui/Loader";

function ShowProject() {
  const { id } = useParams();
  const { data, isPending } = useSingleProject(id);
  return (
    <div>
      {isPending ? (
        <Loader size="15px" color="blue" />
      ) : (
        <ProjectDataFormPage
          mode="EDIT"
          readOnly={true}
          project={data?.project}
        />
      )}
    </div>
  );
}

export default ShowProject;
