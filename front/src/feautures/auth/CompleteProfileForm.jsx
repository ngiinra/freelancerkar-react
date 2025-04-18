import { useMutation } from "@tanstack/react-query";
import React from "react";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import navigateUserWithItsActiveStatus from "../../utils/checkUserActiveAndStatus";
import { useNavigate } from "react-router-dom";
import { RHFRadioGroup, RHFTextbox } from "../../ui/Fields";
import { useForm } from "react-hook-form";
import useCompleteUserData from "./usecompleteUserData";

function CompleteProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const FIELD_NAMES = { NAME: "name", EMAIL: "email", ROLE: "role" };

  const navigate = useNavigate();
  const { isPending, mutate } = useCompleteUserData();
  async function handlePostForm(formData) {
    try {
      const { data } = mutate({
        name: formData[FIELD_NAMES.NAME],
        email: formData[FIELD_NAMES.EMAIL],
        role: formData[FIELD_NAMES.ROLE],
      });
      navigateUserWithItsActiveStatus(data.user, navigate);
    } catch {}
  }

  return (
    <form
      className="h-90 w-100 my-5 mx-auto p-2 text-right"
      onSubmit={handleSubmit(handlePostForm)}
    >
      <label className="mb-1 block" htmlFor="name">
        نام و نام خانوادگی
      </label>
      <RHFTextbox
        label={false}
        register={register}
        error={errors[FIELD_NAMES.NAME]}
        name={FIELD_NAMES.NAME}
        validationSchema={{
          required: "فیلد الزامی می باشد",
          minLength: { value: 10, message: "حداقل 10 کاراکتر وارد نمایید" },
          maxLength: {
            value: 150,
            message: "نام و نام خانوادگی بسیار طولانی است",
          },
        }}
        readOnly={false}
      />
      <label className="mb-1 block" htmlFor="email">
        ایمیل
      </label>
      <RHFTextbox
        label={false}
        register={register}
        error={errors[FIELD_NAMES.EMAIL]}
        name={FIELD_NAMES.EMAIL}
        validationSchema={{
          required: "فیلد الزامی می باشد",
          minLength: { value: 10, message: "حداقل 10 کاراکتر وارد نمایید" },
          maxLength: {
            value: 100,
            message: "نام و نام خانوادگی بسیار طولانی است",
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "لطفا ایمیل وارد نمایید.",
          },
        }}
        readOnly={false}
      />
      <RHFRadioGroup
        register={register}
        error={errors}
        name={FIELD_NAMES.ROLE}
        radioClasses="h-4 w-4 accent-pink-500 cursor-pointer"
        radioIndexesConfigObj={[
          { label: "فریلنسر", value: "FREELANCER", defaultChecked: true },
          { label: "کارفرما", value: "OWNER", defaultChecked: false },
        ]}
      />
      <button className="btn" disabled={isPending}>
        {isPending ? <Loader /> : "تکمیل پروفایل"}
      </button>
    </form>
  );
}

export default CompleteProfileForm;
