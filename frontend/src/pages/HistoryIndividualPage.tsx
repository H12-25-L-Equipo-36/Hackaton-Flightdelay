import PredictionCard from "../components/composed/PredictionCard";

const MOCK_PREDICTIONS = [
  {
    id: "PX-8842",
    origin: "SKBO",
    destination: "KJFK",
    date: "2025-12-25",
    aircraft: "Airbus A320neo",
    distance: "4,012 km",
    atmos: "live",
    status: "Success",
  },
  {
    id: "PX-8841",
    origin: "EGLL",
    destination: "LEMD",
    date: "2025-12-24",
    aircraft: "Boeing 737-800",
    distance: "1,245 km",
    atmos: "storm",
    status: "Delayed",
  },
  {
    id: "PX-8840",
    origin: "KMIA",
    destination: "TJSJ",
    date: "2025-12-23",
    aircraft: "Cessna Citation",
    distance: "1,680 km",
    atmos: "tailwind",
    status: "Error",
  },
  {
    id: "PX-8839",
    origin: "VHHH",
    destination: "RJTT",
    date: "2025-12-22",
    aircraft: "Boeing 777-300ER",
    distance: "2,890 km",
    atmos: "none",
    status: "Success",
  },
];

export default function HistoryIndividualPage() {
  return (
    <div className="border-border-dark bg-surface-dark/30 grid h-full grid-cols-1 gap-6 overflow-hidden rounded-xl border p-4 shadow-2xl backdrop-blur-md sm:grid-cols-2 sm:rounded-2xl sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
      {MOCK_PREDICTIONS.map((item) => (
        <PredictionCard key={item.id} {...item} />
      ))}
    </div>
  );
}
