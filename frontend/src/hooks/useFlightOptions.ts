import { useSuspenseQuery } from "@tanstack/react-query";
import { getBaseUrl } from "../utils/getEnv";

export interface Origin {
  id: number;
  city: string;
  airport: string;
}

export interface Destination {
  id: number;
  city: string;
  airport: string;
}

export function useFlightOptions() {
  const origins = useSuspenseQuery<Origin[]>({
    queryKey: ["origins"],
    queryFn: async () => {
      const response = await fetch(`${getBaseUrl()}/origins`);
      if (!response.ok) {
        throw new Error("Failed to fetch origins");
      }
      return response.json();
    },
  });

  return origins;
}

// export function useOpt(destination: string) {
//   const destinations = useSuspenseQuery<Destination[]>({
//     queryKey: ["origins", destination],
//     queryFn: async () => {
//       const response = await fetch(`${getBaseUrl()}/destinations`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch destinations");
//       }
//       return response.json();
//     },
//   });

//   const

//   const distance = use;
// }
