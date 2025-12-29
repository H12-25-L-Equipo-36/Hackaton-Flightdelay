import { NavLink } from "react-router";

interface LinkNavigationProps {
  to: string;
  label: string;
}

export default function LinkNavigation({ label, to }: LinkNavigationProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-center rounded-lg px-3 py-2 text-xs font-bold capitalize transition-all duration-300 sm:px-4 sm:text-sm ${
          isActive
            ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(57,255,20,0.1)]"
            : "text-text-muted hover:bg-surface-dark hover:text-text-light"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
