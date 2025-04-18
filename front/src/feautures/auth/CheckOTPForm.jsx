import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import navigateUserWithItsActiveStatus from "../../utils/checkUserActiveAndStatus";

const EXPIRED_TIME = 90;
export default function CheckOTPForm({
  phone,
  onBack,
  onResendOTP,
  OTPResponse,
}) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(EXPIRED_TIME);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber: phone, otp });
      toast.success(data.message);
      navigateUserWithItsActiveStatus(data.user, navigate);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  }
  function returnSendOTPStep(e) {
    e.preventDefault();
    onBack();
  }
  useEffect(() => {
    const timerInterval = setInterval(() => {
      time > 0 && setTime((t) => t - 1);
    }, 1000);

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, []);

  return (
    <form className="my-10 border-1 base-border base-color rounded-lg shadow-sm h-90 items-center flex justify-center text-sm text-right">
      <div className="p-5 w-full">
        <div className="text-stone-400 w-full mb-1">
          {time > 0 ? (
            <p>ثانیه تا ارسال مجدد کد {time}</p>
          ) : (
            <button className="cursor-pointer" onClick={(e) => onResendOTP(e)}>
              ارسال مجدد کد
            </button>
          )}
        </div>
        <button
          className="text-sky-600 cursor-pointer hover:text-pink-600 w-full mb-1 text-right"
          onClick={returnSendOTPStep}
        >
          تغییر شماره موبایل ←
        </button>
        <div className="mb-7 text-xs">
          {OTPResponse && <p>{OTPResponse?.data?.message}</p>}
        </div>
        <div className="mb-8">
          <label htmlFor="otp" className="mb-4 block">
            کد ارسال شده به شماره همراه را وارد نمایید
          </label>
          <OTPInput
            value={otp}
            onChange={setOtp}
            renderSeparator={<span>&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            numInputs={6}
            skipDefaultStyles={true}
            containerStyle="flex flex-row-reverse justify-center gap-x-2"
            inputStyle="size-10 p-1 rounded-lg base-color-100 outline-none"
          />
        </div>
        <button className="btn" onClick={handleSubmit} disabled={isPending}>
          {isPending ? <Loader /> : "ثبت"}
        </button>
      </div>
    </form>
  );
}
