import { useQuery } from "@tanstack/react-query";
import { getUsersListApi } from "../../services/authService";

export default function useGetUsersList() {
  return useQuery({
    queryKey: ["users-list"],
    queryFn: getUsersListApi,
  });
}
