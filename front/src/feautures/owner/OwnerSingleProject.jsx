import useSingleProject from "./useSingleProject";
import { useParams } from "react-router-dom";
import ProjectDataFormPage from "./ProjectDataFormPage";
import Loader from "../../ui/Loader";

export default function OwnerSingleProject({}) {
  const params = useParams();
  const { isPending, data } = useSingleProject(params.id);
  if (isPending)
    return (
      <div className="flex justify-center">
        <Loader size="20px" color="pink" />
      </div>
    );
  return (
    <ProjectDataFormPage project={data?.project} readOnly={false} mode="EDIT" />
  );
}
