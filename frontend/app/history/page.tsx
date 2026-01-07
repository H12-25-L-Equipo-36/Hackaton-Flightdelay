import GradientOverlayCard from "@/components/shared/gradient-overlay-card";
import {
  AtmosphericType,
  PredictionStatus,
} from "@/src/modules/history/interfaces";
import PredictionCardB from "@/src/modules/history/prediction-card-b";
import { Metadata } from "next";

const TITLE = "History";
export const metadata: Metadata = {
  title: TITLE,
  description: "History of predictions.",
  alternates: {
    canonical: "/history",
  },
  openGraph: {
    title: TITLE,
  },
  twitter: {
    title: TITLE,
  },
};

const HISTORY_DATA = [
  {
    id: "#PX-8842",
    status: "succeeded" as PredictionStatus,
    origin: "SKBO",
    destination: "KJFK",
    date: "2025-12-25",
    aircraft: "Airbus A320neo",
    distance: "4,012",
    atmospherics: "live" as AtmosphericType,
  },
  {
    id: "#PX-8841",
    status: "delayed" as PredictionStatus,
    origin: "EGLL",
    destination: "LEMD",
    date: "2025-12-24",
    aircraft: "Boeing 737-800",
    distance: "1,245",
    atmospherics: "storm" as AtmosphericType,
  },
  {
    id: "#PX-8840",
    status: "failed" as PredictionStatus,
    origin: "KMIA",
    destination: "TJSJ",
    date: "2025-12-23",
    aircraft: "Cessna Citation",
    distance: "1,680",
    atmospherics: "tailwind" as AtmosphericType,
  },
  {
    id: "#PX-8839",
    status: "succeeded" as PredictionStatus,
    origin: "VHHH",
    destination: "RJTT",
    date: "2025-11-22",
    aircraft: "Boeing 777-300ER",
    distance: "2,890",
    atmospherics: "none" as AtmosphericType,
  },
  {
    id: "#PX-8838",
    status: "failed" as PredictionStatus,
    origin: "VHHH",
    destination: "RJTT",
    date: "2025-11-22",
    aircraft: "Boeing 777-300ER",
    distance: "2,890",
    atmospherics: "none" as AtmosphericType,
  },
];

export default function HistoryPage() {
  return (
    <GradientOverlayCard>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {HISTORY_DATA.map((item) => (
          <PredictionCardB key={item.id} {...item} />
        ))}
      </div>
    </GradientOverlayCard>
  );
}
