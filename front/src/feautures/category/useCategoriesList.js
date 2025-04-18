import { getCategoriesApi } from "../../services/categoryServise";
import { useQuery } from "@tanstack/react-query";
export default function useCategoriesList() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["category-list"],
    queryFn: getCategoriesApi,
  });

  let rawCategories = [];
  if (!isPending && !isError) rawCategories = data?.data?.categories;
  const categoriesList = rawCategories.map((c) => ({
    _id: c._id,
    value: c.englishTitle,
    title: c.title,
  }));
  return { data, isPending, categoriesList };
}
