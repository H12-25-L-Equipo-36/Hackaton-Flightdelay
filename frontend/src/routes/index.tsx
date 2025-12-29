import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import { HistoryRoutes } from "./history.routes";
import { Navigate } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../components/ui/Loader";

const SimulatorPage = lazy(() => import("../pages/SimulatorPage"));

export default function FlightRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="simulator" replace />} />
          <Route path="simulator" element={<SimulatorPage />} />

          {HistoryRoutes}
        </Route>
      </Routes>
    </Suspense>
  );
}
