import { useForm } from "react-hook-form";
import { RHFDescriptionField, RHFTextbox } from "../../ui/Fields";
import useUserData from "../auth/useUserData";
import Loader from "../../ui/Loader";
import useEditProfile from "../auth/useEditProfile";
import { RiUser4Fill, RiUser4Line } from "react-icons/ri";

export default function Profile() {
  const { data, isPending } = useUserData();
  const userData = data?.data?.user;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: userData?.name,
      email: userData?.email,
      phoneNumber: userData?.phoneNumber,
      biography: userData?.biography,
    },
  });

  const { mutate, isPending: isDataSubmiting } = useEditProfile();

  function handleChangeData(formData) {
    mutate(formData);
  }
  if (isPending) return <Loader size="15" color="pink" />;
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg p-7">
      <form onSubmit={handleSubmit(handleChangeData)}>
        <h1 className="p-10 text-center text-xl text-blue-600 mb-10 border-b-1 border-stone-300 flex items-center gap-x-2 justify-center">
          <RiUser4Line /> اطلاعات کاربری
        </h1>
        <RHFTextbox
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          error={errors["name"]}
          readOnly={false}
          validationSchema={{
            required: "فیلد الزامی می‌باشد",
            minLength: { value: 10, message: "حداقل 10 کاراکتر وارد نمایید" },
            maxLength: {
              value: 100,
              message: "نام و نام خانوادگی بسیار طولانی است",
            },
          }}
          placeHolder="نام و نام خانوادگی"
        />

        <RHFTextbox
          label="ایمیل"
          name="email"
          register={register}
          error={errors["email"]}
          readOnly={false}
          validationSchema={{
            required: "فیلد الزامی می باشد",
            minLength: { value: 10, message: "حداقل 10 کاراکتر وارد نمایید" },
            maxLength: {
              value: 100,
              message: "مقدار وارد شده بسیار طولانی است",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "لطفا ایمیل وارد نمایید.",
            },
          }}
          placeHolder="exmaple@example.com"
        />

        <RHFTextbox
          label="شماره همراه"
          name="phoneNumber"
          register={register}
          error={errors["phoneNumber"]}
          readOnly={false}
          validationSchema={{
            required: "فیلد الزامی می‌باشد",
            pattern: {
              value:
                /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4|0]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
              message: "شماره موبایل وارد شده معتبر نمی باشد",
            },
          }}
          placeHolder="09011111111"
        />

        <RHFDescriptionField
          label="بایو"
          name="biography"
          register={register}
          error={errors["biography"]}
          readOnly={false}
          validationSchema={{}}
        />
        <div className="justify-end col-span-2 flex">
          <button className="btn md:w-1/4 py-3" type="submit">
            {isDataSubmiting ? <Loader /> : "ثبت"}
          </button>
        </div>
      </form>
    </div>
  );
}
