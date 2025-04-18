import { RHFTextbox } from "../../ui/Fields";
import Loader from "../../ui/Loader";

function SendOTPForm({ register, formState, isPending, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="my-10 border-1 base-border base-color rounded-lg shadow-sm h-90 items-center flex justify-center"
    >
      <div className="space-y-4  p-5">
        <RHFTextbox
          name="phoneNumber"
          label="شماره همراه"
          register={register}
          validationSchema={{ required: "فیلد الزامی می‌باشد" }}
          error={formState.errors["phoneNumber"]}
          readOnly={false}
        />
        <button className="btn" disabled={isPending}>
          {isPending ? <Loader /> : "ارسال کد تایید"}
        </button>
      </div>
    </form>
  );
}

export default SendOTPForm;
