import { useForm } from "react-hook-form";
import useChangeCategory from "../../category/useChangeCategory";
import useDeleteCategory from "../../category/useDeleteCategory";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCategoryFunctionsInInfoForm(category) {
  const navigate = useNavigate();
  const { mutate, isPending: isEditing } = useChangeCategory();
  const { mutate: deleteMutate, isPending: isDeleting } = useDeleteCategory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    setValue("title", category.title);
    setValue("englishTitle", category.englishTitle);
    setValue("description", category.description);
  }, [category]);

  function submitForm(formData) {
    if (formData.parentId === 1) formData.parentId = null;
    mutate({
      id: category._id,
      data: {
        title: formData.title,
        englishTitle: formData.englishTitle,
        description: formData.description,
        type: "post",
      },
    });
  }

  function handleDelete() {
    deleteMutate(category._id);
    navigate("/admin/categories", { replace: true });
  }

  return {
    isEditing,
    isDeleting,
    register,
    errors,
    handleSubmit,
    handleDelete,
    submitForm,
  };
}
