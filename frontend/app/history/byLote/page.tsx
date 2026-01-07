import LoteSection from "@/src/modules/history/lote-section";
import { Lote } from "@/src/modules/history/interfaces";
import PredictionCardB from "@/src/modules/history/prediction-card-b";
import { Metadata } from "next";

const TITLE = "History By Lote";
export const metadata: Metadata = {
  title: TITLE,
  description: "History of predictions by lote.",
  alternates: {
    canonical: "/history/byLote",
  },
  openGraph: {
    title: TITLE,
  },
  twitter: {
    title: TITLE,
  },
};

const MOCK_LOTES: Lote[] = [
  {
    id: "lote-42",
    title: "Transatlantic Routine Lote #42",
    date: "2025-12-25",
    simulationsCount: 2,
    predictions: [
      {
        id: "#PX-8842",
        status: "succeeded",
        origin: "SKBO",
        destination: "KJFK",
        date: "2025-12-25",
        aircraft: "Airbus A320neo",
        distance: "4,012",
        atmospherics: "live",
      },
      {
        id: "#PX-8843",
        status: "succeeded",
        origin: "SKBO",
        destination: "EGLL",
        date: "2025-12-25",
        aircraft: "Airbus A350-900",
        distance: "8,500",
        atmospherics: "live",
      },
    ],
  },
  {
    id: "lote-12",
    title: "Domestic Cargo Batch #12",
    date: "2025-12-24",
    simulationsCount: 2,
    predictions: [
      {
        id: "#PX-8841",
        status: "delayed",
        origin: "EGLL",
        destination: "LEMD",
        date: "2025-12-24",
        aircraft: "Boeing 737-800",
        distance: "1,245",
        atmospherics: "storm",
      },
      {
        id: "#PX-8844",
        status: "failed",
        origin: "EGLL",
        destination: "LFPG",
        date: "2025-12-24",
        aircraft: "Boeing 737-800",
        distance: "350",
        atmospherics: "storm",
      },
    ],
  },
];

export default function ByLotePage() {
  return (
    <div className="flex flex-col gap-8 relative z-10">
      {MOCK_LOTES.map((lote) => (
        <LoteSection
          key={lote.id}
          date={lote.date}
          title={lote.title}
          simulationsCount={lote.simulationsCount}
        >
          {lote.predictions.map((prediction) => (
            <PredictionCardB key={prediction.id} {...prediction} />
          ))}
        </LoteSection>
      ))}
    </div>
  );
}
