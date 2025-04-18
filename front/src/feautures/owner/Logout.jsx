import useLogout from "./useLogout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TooltipButton from "../../ui/TooltipButton";
import AreYouSure from "../../ui/AreYouSure";
import SidebarHeaderItem from "../../ui/sidebar/SidebarHeaderItem";
import { RiLogoutBoxLine } from "react-icons/ri";

function Logout() {
  const { mutate } = useLogout();
  const navigate = useNavigate();
  function handleLogout() {
    mutate(
      {},
      {
        onError: (er) => toast.error(er?.response?.data?.error),
        onSuccess: () => navigate("/auth", { replace: true }),
      }
    );
  }
  return (
    <SidebarHeaderItem>
      <TooltipButton
        buttonText={
          <RiLogoutBoxLine className="size-7 text-stone-600 dark:text-slate-300 [text-shadow:_0_1px_1px_var(--color-stone-500)]" />
        }
        direction="down"
        buttonClasses="text-lg"
      >
        <AreYouSure handleClickNo={handleLogout} />
      </TooltipButton>
    </SidebarHeaderItem>
  );
}

export default Logout;
