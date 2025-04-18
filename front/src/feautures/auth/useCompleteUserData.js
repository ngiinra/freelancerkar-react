import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeProfile } from "../../services/authService";

export default function useCompleteUserData() {
  const { isPending, mutate } = useMutation({
    mutationFn: completeProfile,
    onSuccess: (data) => toast.success(data?.message),
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isPending, mutate };
}
