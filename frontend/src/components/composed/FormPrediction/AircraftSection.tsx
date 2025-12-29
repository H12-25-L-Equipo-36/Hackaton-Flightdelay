import type { Control } from "react-hook-form";
import type { PredictionRequest } from "../../../hooks/useFlightPrediction";
import SelectCommon from "../../ui/SelectCommon";
import DistanceSlider from "./DistanceSlider";

interface AircraftSectionProps {
  control: Control<PredictionRequest>;
}

export default function AircraftSection({ control }: AircraftSectionProps) {
  return (
    <div className="space-y-4">
      <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
        <span className="material-symbols-outlined text-sm">airlines</span>
        Aircraft & Physics
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SelectCommon
          control={control}
          name="airline"
          label="Aircraft Model"
          placeholder="Select an aircraft"
          options={[]}
          className="col-span-2"
          icon="flight"
        />
      </div>
      <DistanceSlider
        control={control}
        name="distanceKm"
        className="col-span-2"
      />
    </div>
  );
}
