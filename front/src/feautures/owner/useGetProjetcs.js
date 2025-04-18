import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectServise";

export default function useGetProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: () => getOwnerProjectsApi(),
  });
  return { data, isPending };
}
