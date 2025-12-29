import { Route, Navigate } from "react-router";
import { lazy } from "react";

const HistoryLayout = lazy(() => import("../layout/HistoryLayout"));

const HistoryByLotePage = lazy(() => import("../pages/HistoryByLotePage"));
const HistoryIndividualPage = lazy(
  () => import("../pages/HistoryIndividualPage"),
);

export const HistoryRoutes = (
  <Route path="history" element={<HistoryLayout />}>
    <Route index element={<Navigate to="individual" replace />} />
    <Route path="individual" element={<HistoryIndividualPage />} />
    <Route path="by-lote" element={<HistoryByLotePage />} />
  </Route>
);
