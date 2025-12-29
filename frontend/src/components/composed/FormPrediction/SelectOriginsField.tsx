import type { Control } from "react-hook-form";
import type { PredictionRequest } from "../../../hooks/useFlightPrediction";
import useOrigins from "../../../hooks/useOrigins";
import SelectCommon from "../../ui/SelectCommon";

export function SelectOriginsField({
  control,
}: {
  control: Control<PredictionRequest>;
}) {
  const { formatValues } = useOrigins();

  return (
    <SelectCommon
      control={control}
      name="origin"
      label="Origin (ICAO)"
      placeholder="Select origin"
      options={formatValues}
      className="col-span-1"
      icon="flight_takeoff"
    />
  );
}
