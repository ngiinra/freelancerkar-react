import useUserData from "../feautures/auth/useUserData";
import { useLocation } from "react-router-dom";
export default function useAuth() {
  const { data, isPending } = useUserData();
  const { pathname: urlAddress } = useLocation();
  const user = data?.data?.user;
  let isAuth = false;
  let hasAccess = false;
  let isVerified = false;

  if (user) isAuth = true;
  if (user && Number(user.status) === 2) isVerified = true;
  if (user && user.role) {
    user.role.toLowerCase().includes(urlAddress.split("/")[1])
      ? (hasAccess = true)
      : (hasAccess = false);
  }

  return { isAuth, hasAccess, isPending, isVerified, user };
}
