import React from "react";
import {
  RHFDescriptionField,
  RHFSelectInput,
  RHFTextbox,
} from "../../../ui/Fields";
import { useForm } from "react-hook-form";
import useAddCategory from "../../category/useAddCategory";
import { useNavigate } from "react-router-dom";

function AddCategoryForm() {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddCategory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function handleAddCategory(formData) {
    mutate(formData);
    navigate("/admin/categories");
  }
  return (
    <form onSubmit={handleSubmit(handleAddCategory)}>
      <RHFTextbox
        register={register}
        name="title"
        error={errors["title"]}
        label="عنوان"
        readOnly={false}
        validationSchema={{ required: "عنوان الزامی می باشد." }}
      />
      <RHFTextbox
        register={register}
        name="englishTitle"
        error={errors["englishTitle"]}
        readOnly={false}
        label="عنوان انگلیسی"
        validationSchema={{ required: "عنوان انگلیسی الزامی می باشد." }}
      />
      <RHFDescriptionField
        register={register}
        name="description"
        error={errors["description"]}
        readOnly={false}
        label="توضیحات"
        validationSchema={{ required: "توضیحات الزامی می باشد." }}
      />
      <RHFSelectInput
        register={register}
        name="type"
        error={errors["type"]}
        readOnly={false}
        label="نوع"
        optionsArray={[
          { value: "project" },
          { value: "post" },
          { value: "comment" },
        ]}
      />
      <div className="md:flex justify-end w-full my-6">
        <button type="submit" className="btn w-full md:w-60 shadow-blue-500">
          {isPending ? "لطفا منتظر بمانید" : "ثبت"}
        </button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
