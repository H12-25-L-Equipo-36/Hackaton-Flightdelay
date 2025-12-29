import { toast } from "sonner";
import VirtualLabel from "../../ui/VirtualLabel";

export default function SaveRouteBtn() {
  const handleSave = () => {
    toast.success("File uploaded", {
      description: "Saving currently route",
    });
  };

  return (
    <VirtualLabel label="Save Current Route">
      <button
        type="button"
        onClick={handleSave}
        className="bg-primary text-background-dark flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] active:brightness-90"
      >
        <span className="material-symbols-outlined text-2xl font-bold">
          bookmark
        </span>
        <span className="sr-only">Save Route</span>
      </button>
    </VirtualLabel>
  );
}
