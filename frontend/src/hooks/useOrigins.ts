import { useSuspenseQuery } from "@tanstack/react-query";
import { getBaseUrl } from "../utils/getEnv";
import { sleep } from "../utils/sleep";

export interface Origin {
  id: number;
  city: string;
  airport: string;
}

export default function useOrigins() {
  const origin = useSuspenseQuery<Origin[]>({
    queryKey: ["origins"],
    queryFn: async () => {
      await sleep(1000);
      const res = await fetch(`${getBaseUrl()}/origins`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return {
    ...origin,
    formatValues: origin.data.map(({ id, airport, city }) => ({
      id,
      label: `${airport} ${city}`,
      value: city,
    })),
  };
}
