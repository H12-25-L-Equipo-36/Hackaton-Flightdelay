import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { sleep } from "../utils/sleep";
import { getBaseUrl } from "../utils/getEnv";

export const PredictionRequestSchema = z.object({
  airline: z.string().min(1),
  origin: z.string().min(1),
  destination: z.string().min(1),
  departureDate: z.string().min(1),
  distanceKm: z.number().min(3),
  atmos: z.enum(["live", "storm", "tailwind", "none"]).optional(),
});

export const PredictionResultSchema = z.object({
  prediction: z.string(),
  probability: z.number(),
});

export type PredictionRequest = z.infer<typeof PredictionRequestSchema>;
export type PredictionResult = z.infer<typeof PredictionResultSchema>;

export default function useFlightPrediction() {
  const flightMutation = useMutation({
    mutationFn: async (
      payload: PredictionRequest,
    ): Promise<PredictionResult> => {
      // TODO DELETE FROM PRODUCTION
      await sleep();
      const emulateResult = () => {
        console.log("Submitting Prediction:", payload);

        const isSuccess = Math.floor(Math.random() * 2) % 2 === 0;
        const probability = parseFloat(Math.random().toFixed(2));
        const result = isSuccess
          ? { prediction: "On Time", probability }
          : { prediction: "Delayed", probability };

        console.log("Emulate Prediction:", result);

        return result;
      };

      const response = await fetch(`${getBaseUrl()}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emulateResult()),
      });

      if (!response) throw new Error("Failed to fetch prediction");

      return await response.json();
    },
  });

  return {
    flightMutation,
  };
}
