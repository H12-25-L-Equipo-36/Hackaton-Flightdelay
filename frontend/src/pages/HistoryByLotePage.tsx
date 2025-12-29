import PredictionCard from "../components/composed/PredictionCard";

const MOCK_BATCHES = [
  {
    name: "Transatlantic Routine Lote #42",
    date: "2025-12-25",
    predictions: [
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
        id: "PX-8843",
        origin: "SKBO",
        destination: "EGLL",
        date: "2025-12-25",
        aircraft: "Airbus A350-900",
        distance: "8,500 km",
        atmos: "live",
        status: "Success",
      },
    ],
  },
  {
    name: "Domestic Cargo Batch #12",
    date: "2025-12-24",
    predictions: [
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
        id: "PX-8844",
        origin: "EGLL",
        destination: "LFPG",
        date: "2025-12-24",
        aircraft: "Boeing 737-800",
        distance: "350 km",
        atmos: "storm",
        status: "Error",
      },
    ],
  },
  {
    name: "Caribbean Testing Lote #03",
    date: "2025-12-23",
    predictions: [
      {
        id: "PX-8840",
        origin: "KMIA",
        destination: "TJSJ",
        date: "2025-12-23",
        aircraft: "Cessna Citation",
        distance: "1,680 km",
        atmos: "tailwind",
        status: "Success",
      },
    ],
  },
];

export default function HistoryByLotePage() {
  return (
    <div className="space-y-8">
      {MOCK_BATCHES.map((batch, index) => (
        <article
          key={index}
          className="border-border-dark bg-surface-dark/20 space-y-8 rounded-3xl border p-6 shadow-lg backdrop-blur-sm sm:p-8"
        >
          <div className="border-primary flex flex-col gap-2 border-l-4 pl-4">
            <h3 className="text-text-light text-xl font-bold tracking-tight sm:text-2xl">
              {batch.name}
            </h3>
            <div className="text-text-muted flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                {batch.date}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  account_tree
                </span>
                {batch.predictions.length} Simulations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {batch.predictions.map((prediction) => (
              <PredictionCard key={prediction.id} {...prediction} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
