import { useQuery } from "@tanstack/react-query";
import { getSingleCategoryApi } from "../../services/categoryServise";

export default function useSingleCategory(id) {
  return useQuery({
    queryKey: ["single-category", id],
    queryFn: () => getSingleCategoryApi(id),
  });
}
