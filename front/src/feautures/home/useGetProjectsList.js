import { useQuery } from "@tanstack/react-query";
import { getProjectsListApi } from "../../services/projectServise";

export default function useGetProjectsList(searchParams = "") {
  const { data, isPending } = useQuery({
    queryKey: ["projects-list", searchParams],
    queryFn: () => getProjectsListApi(searchParams),
  });
  return { data, isPending };
}
