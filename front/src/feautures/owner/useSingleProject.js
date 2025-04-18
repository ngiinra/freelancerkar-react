import { useQuery } from "@tanstack/react-query";
import { getSingleProjectApi } from "../../services/projectServise";

export default function useSingleProject(id) {
  const { data, isPending } = useQuery({
    queryKey: ["get-single-project", id],
    queryFn: () => getSingleProjectApi(id),
  });
  return { data, isPending };
}
