import React, { useEffect } from "react";
import {
  RHFDescriptionField,
  RHFSelectInput,
  RHFTextbox,
} from "../../../ui/Fields";
import TooltipButton from "../../../ui/TooltipButton";
import AreYouSure from "../../../ui/AreYouSure";
import useCategoryFunctionsInInfoForm from "./useCategoryFunctionsInInfoForm";

function CategoryInfoForm({ category }) {
  const {
    isEditing,
    isDeleting,
    register,
    errors,
    handleSubmit,
    handleDelete,
    submitForm,
  } = useCategoryFunctionsInInfoForm(category);
  return (
    <div>
      <form
        className="base-color p-3 rounded-xl"
        onSubmit={handleSubmit(submitForm)}
      >
        <h3 className="m-6">مشخصات دسته بندی</h3>

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
        <div className="md:flex justify-between w-full my-6">
          <TooltipButton
            buttonText={isDeleting ? "لطفا منتظر بمانید" : "حذف"}
            buttonClasses="btn w-full md:w-50 bg-red-500 shadow-red-500"
          >
            <AreYouSure handleClickYes={handleDelete} />
          </TooltipButton>
          <button type="submit" className="btn w-full md:w-60 shadow-blue-500">
            {isEditing ? "لطفا منتظر بمانید" : "ثبت"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryInfoForm;
