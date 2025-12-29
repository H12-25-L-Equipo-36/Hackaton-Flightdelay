import LinkNavigation from "../ui/LinkNavigation";

export interface NavRoute {
  label: string;
  path: string;
}

interface TabNavigationProps {
  routes: NavRoute[];
  className?: string;
}

export default function TabNavigation({
  routes,
  className = "",
}: TabNavigationProps) {
  return (
    <nav
      className={`bg-background-dark/50 ring-border-dark flex items-center gap-1 self-start rounded-xl p-1 ring-1 md:self-auto ${className}`}
    >
      {routes.map(({ label, path }) => (
        <LinkNavigation key={path} label={label} to={path} />
      ))}
    </nav>
  );
}
