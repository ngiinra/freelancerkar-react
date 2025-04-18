import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/authService";

export default function useUserData() {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserData,
  });
}
