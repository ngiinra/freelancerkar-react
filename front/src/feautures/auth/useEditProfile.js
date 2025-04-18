import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { editProjectApi } from "../../services/projectServise";
import { editUserApi } from "../../services/authService";
import toast from "react-hot-toast";

function useEditProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editUserApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["users-list"]);
    },
    onError: (err) => toast.error(err.response.error.message),
  });
}

export default useEditProfile;
