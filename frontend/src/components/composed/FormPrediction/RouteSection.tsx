import { Suspense } from "react";
import type { Control } from "react-hook-form";
import type { PredictionRequest } from "../../../hooks/useFlightPrediction";
import { SelectOriginsField } from "./SelectOriginsField";
import SelectCommon from "../../ui/SelectCommon";
import DatePicker from "./DatePicker";
import SelectFallback from "../../ui/SelectFallback";

interface RouteSectionProps {
  control: Control<PredictionRequest>;
}

export default function RouteSection({ control }: RouteSectionProps) {
  return (
    <div className="space-y-4">
      <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
        <span className="material-symbols-outlined text-sm">map</span> Route
        Parameters
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Suspense fallback={<SelectFallback label="Origin (ICAO)" />}>
          <SelectOriginsField control={control} />
        </Suspense>
        <SelectCommon
          control={control}
          name="destination"
          label="Destination (ICAO)"
          placeholder="Select destination"
          options={[]}
          className="col-span-1"
          icon="flight_land"
        />
        <DatePicker
          control={control}
          name="departureDate"
          label="Departure Date"
          className="col-span-2"
        />
      </div>
    </div>
  );
}
