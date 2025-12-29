import z, { ZodError } from "zod";

const EnvironmentSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  FLIGHT_PREDICTION_API: z.url(),
  FLIGHT_PREDICTION_API_MOCKUP: z.url(),
});

type TEnvironmentSchema = z.infer<typeof EnvironmentSchema>;

const ENVIRONMENTS = {
  NODE_ENV: import.meta.env.MODE,
  FLIGHT_PREDICTION_API: import.meta.env.VITE_FLIGHT_PREDICTION_API,
  FLIGHT_PREDICTION_API_MOCKUP: import.meta.env
    .VITE_FLIGHT_PREDICTION_API_MOCKUP,
} as const;

try {
  EnvironmentSchema.parse(ENVIRONMENTS);
} catch (e) {
  if (e instanceof ZodError) {
    console.error("Environment validation failed:", e.issues);
  }

  throw new Error("Invalid environment variables");
}

export function getEnv(key: keyof TEnvironmentSchema) {
  const envSearched = ENVIRONMENTS[key];

  if (!envSearched || !envSearched.trim().length) {
    throw new Error(`Environment variable ${key} is not defined.`);
  }

  return envSearched;
}

export function getBaseUrl(): string {
  return getEnv("NODE_ENV") === "production"
    ? getEnv("FLIGHT_PREDICTION_API")
    : getEnv("FLIGHT_PREDICTION_API_MOCKUP");
}
