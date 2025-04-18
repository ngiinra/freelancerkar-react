import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuth, hasAccess, isPending, isVerified } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isPending && !isAuth) navigate("/auth");
    if (!isPending && !hasAccess) navigate("/not-access");
    if (!isPending && isAuth && !isVerified) navigate("/");
  }, [isPending, isAuth, hasAccess, navigate, isVerified]);

  if (isPending)
    return (
      <div className="base-color flex h-screen items-center justify-center">
        <Loader size="15px" color="blue" />
      </div>
    );
  if (!isPending && isAuth && hasAccess) return children;
}

export default ProtectedRoute;
