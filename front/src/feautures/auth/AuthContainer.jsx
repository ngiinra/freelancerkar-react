import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const PHONE_NUMBER = "phoneNumber";
  const { register, formState, handleSubmit, getValues } = useForm();
  const {
    mutateAsync,
    isPending: isSendOTPPending,
    data: OTPResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (formData) => {
    try {
      const { data } = await mutateAsync({
        phoneNumber: formData[PHONE_NUMBER],
      });
      toast.success(data.message);
      setStep(2);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  function handleStep() {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            formState={formState}
            isPending={isSendOTPPending}
            onSubmit={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phone={getValues(PHONE_NUMBER)}
            onBack={() => setStep(1)}
            onResendOTP={handleSubmit(sendOtpHandler)}
            OTPResponse={OTPResponse}
          />
        );
      default:
        return null;
    }
  }

  return <div>{handleStep()}</div>;
}

export default AuthContainer;
