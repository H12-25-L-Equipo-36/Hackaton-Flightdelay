import * as z from "zod";

export interface ActionResponse<T = any> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  origin: z.string().min(1, "Please select an item"),
  destination: z.string().min(1, "Please select an item"),
  departureDate: z.date({ error: "This field is required" }),
  aircraftModel: z.string().min(1, "Please select an item"),
  flightDistance: z.coerce.number({ error: "This field is required" }),
  atmospherics: z.string().min(1, "Please select an item"),
});

export type Schema = z.infer<typeof formSchema>;
