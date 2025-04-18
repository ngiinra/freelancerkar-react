import React from "react";
import {
  RHFDescriptionField,
  RHFNumberField,
  RHFTextbox,
} from "../../ui/Fields";
import ReturnButton from "../../ui/ReturnButton";
import { RiMoneyDollarCircleLine, RiTimerLine } from "react-icons/ri";
import useAddProposalForm from "./useAddProposalForm";
import Loader from "../../ui/Loader";

const FIELDS = { DURATION: "duration", PRICE: "price", DESC: "description" };
function AddProposal() {
  const { register, handleSubmit, errors, onSubmit, isPending } =
    useAddProposalForm(FIELDS);

  return (
    <div className="base-color p-5">
      <ReturnButton />
      <form
        className="md:grid grid-col-2 gap-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFTextbox
          register={register}
          name={FIELDS.DURATION}
          error={errors[FIELDS.DURATION]}
          label="مدت انجام"
          icon={<RiTimerLine className="size-6 base-color" />}
          validationSchema={{ required: "فیلد الزامی است" }}
          readOnly={false}
          placeHolder="تعداد روز"
        />
        <RHFNumberField
          register={register}
          name={FIELDS.PRICE}
          error={errors[FIELDS.PRICE]}
          label="قیمت"
          icon={<RiMoneyDollarCircleLine className="size-6 base-color" />}
          validationSchema={{ required: "فیلد الزامی است" }}
          readOnly={false}
        />
        <RHFDescriptionField
          oneRow={true}
          register={register}
          name={FIELDS.DESC}
          error={errors[FIELDS.DESC]}
          label="توضیحات"
          validationSchema={{ required: "فیلد الزامی است" }}
          readOnly={false}
        />
        <div className="justify-end col-span-2 flex my-3">
          <button className="btn md:w-1/4 py-3" type="submit">
            {isPending ? <Loader /> : "ثبت"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProposal;
