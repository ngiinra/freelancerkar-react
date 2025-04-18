import React from "react";
import { RHFDescriptionField, RHFTextbox } from "../../ui/Fields";
import { FaHeadphonesAlt } from "react-icons/fa";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiTelegram2Line,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  return (
    <div
      id="contact-us"
      className="base-color w-full px-5 pt-15  bg-[url(public/bbblurry.svg)]"
    >
      <div className="p-2 mb-6 md:max-w-5/6 mx-auto text-center">
        <span className="font-bold text-2xl border-b-2 p-2 border-sky-500">
          تماس با ما
        </span>
        <form
          className="mx-auto grid grid-cols-1 md:grid-cols-2 my-10 max-w-3xl"
          onSubmit={handleSubmit(() => {})}
        >
          <RHFTextbox
            placeHolder="نام خود را وارد کنید"
            name="name"
            register={register}
            error={errors["name"]}
            validationSchema={{ required: "الزامی" }}
            readOnly={false}
          />
          <RHFTextbox
            placeHolder="ایمیل"
            name="email"
            register={register}
            error={errors["email"]}
            validationSchema={{
              required: "الزامی",
            }}
            readOnly={false}
          />
          <RHFDescriptionField
            placeHolder="متن پیام"
            name="desc"
            register={register}
            error={errors["desc"]}
            readOnly={false}
            oneRow={true}
            validationSchema={{ required: "الزامی" }}
          />
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            ارسال
          </button>
          <div className="flex items-center w-full px-4 py-3 gap-x-5 justify-center md:justify-end text-lg">
            <FaHeadphonesAlt className="size-5" />
            <span>{toPersianNumbers("021-88776655")}</span>
          </div>
        </form>
        <div className="flex mx-auto justify-center items-center border-t-1 border-sky-500 p-3 gap-x-3">
          <span>ما را در شبکه های اجتماعی دنبال کنید</span>
          <Link to="#">
            <RiTelegram2Line className="size-7 hover:text-sky-500 " />
          </Link>
          <Link to="#">
            <RiWhatsappLine className="size-7 hover:text-green-500" />
          </Link>
          <Link to="#">
            <RiInstagramLine className="size-7 hover:text-pink-500" />
          </Link>
          <Link to="#">
            <RiTwitterXLine className="size-7 hover:text-stone-500" />
          </Link>
          <Link to="#">
            <RiLinkedinLine className="size-7 hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
