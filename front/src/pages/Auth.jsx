import React, { useEffect } from "react";
import AuthContainer from "../feautures/auth/AuthContainer";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Auth() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [navigate, isAuth]);
  return (
    <div className="w-full sm:max-w-sm m-auto mt-10 flex items-center justify-center">
      <AuthContainer />
    </div>
  );
}

export default Auth;
