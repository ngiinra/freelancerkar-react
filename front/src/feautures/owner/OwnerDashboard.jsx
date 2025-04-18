import Loader from "../../ui/Loader";
import OwnerStats from "./dashboard/OwnerStats";
import useGetProjects from "./useGetProjetcs";

function OwnerDashboard() {
  const { isPending, data } = useGetProjects();
  if (isPending) return <Loader size="15px" color="pink" />;
  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">آمار کلی</h1>
      </div>
      <OwnerStats projects={data?.projects} />
    </div>
  );
}

export default OwnerDashboard;
