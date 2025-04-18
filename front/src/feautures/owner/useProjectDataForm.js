import { useForm } from "react-hook-form";
import useCategoriesList from "../category/useCategoriesList";
import useAddProject from "./useAddProject";
import useEditProject from "./useEditProject";
import { useEffect, useState } from "react";
import getPersianDateOf from "../../utils/convertToDate";
const MODES = { EDIT: "EDIT", ADD: "ADD" };

export default function useProjectDataForm(FIELDS_NAME, project) {
  // react form hook
  const defaultValues = {
    tags: project?.tags,
    title: project?.title,
    category: project?.category?._id,
    description: project?.description,
    deadline: project?.deadline ? new Date(project.deadline) : null,
    status: project?.status,
    budget: project?.budget,
    createdAt: getPersianDateOf(project?.createdAt),
    updatedAt: getPersianDateOf(project?.updatedAt),
    freelancer: project?.freelancer?.name,
    owner: project?.owner,
  };
  // categories
  const { isPending: isCategoryPending, data: categoriesData } =
    useCategoriesList();
  const categoryListArray = categoriesData?.data?.categories?.map(
    (category) => {
      return { value: category.title, _id: category._id };
    }
  );
  // project statuses
  const projectStatuses = [
    { value: "OPEN", text: "باز" },
    { value: "CLOSE", text: "بسته" },
  ];

  // states
  const [tags, setTags] = useState(project?.tags?.concat([""]) || [""]);
  useEffect(() => {
    if (tags.length === 0) setTags([""]);
  }, [tags]);

  // post data
  const { isPending: addedProjectPending, mutate: addingMutate } =
    useAddProject();
  const { isPending: editedProjectPending, mutate: editingMutate } =
    useEditProject();

  const onSubmit = (formData, mode) => {
    if (mode === MODES.ADD) {
      addingMutate({
        title: formData[FIELDS_NAME.TITLE],
        category: formData[FIELDS_NAME.CATEGORY],
        tags: [...tags].filter((tag) => tag.trim() !== ""),
        description: formData[FIELDS_NAME.DESC],
        deadline: formData[FIELDS_NAME.DEADLINE],
        budget: formData[FIELDS_NAME.BUDGET],
      });
    } else if (mode === MODES.EDIT) {
      editingMutate({
        _id: project?._id,
        editedData: {
          title: formData[FIELDS_NAME.TITLE],
          category: formData[FIELDS_NAME.CATEGORY],
          tags: [...tags].filter((tag) => tag.trim() !== ""),
          description: formData[FIELDS_NAME.DESC],
          deadline: formData[FIELDS_NAME.DEADLINE],
          budget: formData[FIELDS_NAME.BUDGET],
        },
      });
    }
  };
  return {
    isCategoryPending,
    categoryListArray,
    projectStatuses,
    tags,
    setTags,
    addedProjectPending,
    editedProjectPending,
    onSubmit,
    defaultValues,
  };
}
