import { Outlet } from "react-router";
import TabNavigation from "../components/composed/TabNavigation";

const subRoutes = [
  { label: "individual", path: "individual" },
  { label: "by lote", path: "by-lote" },
];

export default function HistoryLayout() {
  return (
    <section className="bg-background-dark flex min-h-[calc(100vh-64px)] w-full flex-col">
      <header className="border-border-dark bg-surface-dark/50 border-b px-4 py-6 backdrop-blur-sm sm:px-6 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <div className="text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">history</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase sm:text-xs">
                Data Archive
              </span>
            </div>
            <h1 className="text-text-light text-3xl font-black tracking-tight sm:text-4xl">
              History <span className="text-primary italic">Predictions</span>
            </h1>
          </div>

          <TabNavigation routes={subRoutes} />
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 md:py-8">
        <Outlet />
      </div>
    </section>
  );
}
