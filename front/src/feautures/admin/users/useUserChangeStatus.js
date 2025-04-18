import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

function useUserChangeStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["users-list"]);
    },
    onError: (err) => toast.error(err.response.error.message),
  });
}

export default useUserChangeStatus;
