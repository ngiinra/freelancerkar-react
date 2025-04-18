import toast from "react-hot-toast";

export default function navigateUserWithItsActiveStatus(user, navigate) {
  if (!user.isActive) navigate("/complete-profile");
  else if (user.status !== 2) {
    navigate("/");
    toast("پروفایل شما در انتظار تایید است.", { icon: "ℹ️" });
  } else if (user.role) {
    if (user.role === "OWNER") navigate("/owner");
    else if (user.role === "FREELANCER") navigate("/freelancer");
    else if (user.role === "ADMIN") navigate("/admin");
  }
}
