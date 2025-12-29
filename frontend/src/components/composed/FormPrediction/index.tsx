import { useForm, type SubmitHandler } from "react-hook-form";
import useFlightPrediction, {
  PredictionRequestSchema,
  type PredictionRequest,
} from "../../../hooks/useFlightPrediction";
import AtmosControls from "./AtmosControls";
import BtnCallToAction from "../../ui/BtnCallToAction";
import { zodResolver } from "@hookform/resolvers/zod";
import RouteSection from "./RouteSection";
import AircraftSection from "./AircraftSection";

export default function FormPrediction() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<PredictionRequest>({
    defaultValues: {
      origin: "",
      destination: "",
      departureDate: new Date().toISOString().split("T")[0],
      airline: "",
      distanceKm: 3,
      atmos: "none",
    },
    resolver: zodResolver(PredictionRequestSchema),
    reValidateMode: "onSubmit",
    mode: "all",
  });

  const { flightMutation } = useFlightPrediction();

  const onSubmit: SubmitHandler<PredictionRequest> = (values) => {
    flightMutation.mutate(values);
  };

  return (
    <form
      className="flex flex-1 flex-col gap-8 p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RouteSection control={control} />
      <AircraftSection control={control} />
      <AtmosControls control={control} name="atmos" />

      <div className="border-border-dark mt-auto border-t pt-6">
        <BtnCallToAction
          type="submit"
          disabled={flightMutation.status === "pending" || !isValid}
          status={flightMutation.status}
        />
      </div>
    </form>
  );
}
