import FormPrediction from "./FormPrediction";
import FormHeader from "./FormPrediction/FormHeader";

export default function Sidebar() {
  return (
    <div className="border-border-dark bg-background-dark flex min-h-full w-full flex-col border-r lg:w-[450px] xl:w-[500px]">
      <FormHeader />
      <FormPrediction />
    </div>
  );
}
