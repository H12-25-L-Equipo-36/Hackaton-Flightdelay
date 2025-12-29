import { Link } from "react-router";
import TabNavigation from "./composed/TabNavigation";

export default function Header() {
  const routes = [
    { label: "simulator", path: "simulator" },
    { label: "history", path: "history" },
  ];

  return (
    <header className="border-border-dark bg-surface-dark w-full border-b border-solid">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        <Link to="/simulator" className="flex items-center gap-4">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">
              flight_takeoff
            </span>
          </div>
          <h2 className="text-lg leading-tight font-bold tracking-[-0.015em]">
            Flight Simulator v1.0
          </h2>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <TabNavigation routes={routes} />
        </div>
        <button className="text-text-light md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
