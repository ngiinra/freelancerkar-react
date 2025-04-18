import { NavLink } from "react-router-dom";

function SidebarItems({ to, label }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `sidebar-item text-blue-500 [text-shadow:_0_1px_1px_var(--color-blue-500)]`
          : `sidebar-item text-stone-600 dark:text-slate-300 [text-shadow:_0_1px_1px_var(--color-stone-500)]`
      }
      to={to}
    >
      <div>{label}</div>
    </NavLink>
  );
}

export default SidebarItems;
