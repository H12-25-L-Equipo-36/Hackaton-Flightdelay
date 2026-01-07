export type PredictionStatus = "succeeded" | "delayed" | "failed";

export type AtmosphericType = "live" | "storm" | "tailwind" | "none";

export interface Prediction {
  id: string;
  status: PredictionStatus;
  origin: string;
  destination: string;
  date: string;
  aircraft: string;
  distance: string;
  atmospherics: AtmosphericType;
}

export interface Lote {
  id: string;
  title: string;
  date: string;
  simulationsCount: number;
  predictions: Prediction[];
}
