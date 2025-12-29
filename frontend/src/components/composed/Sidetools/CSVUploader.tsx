import { toast } from "sonner";
import VirtualLabel from "../../ui/VirtualLabel";

export default function CSVUploader() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    const isCSV = fileName.endsWith(".csv");

    if (!isCSV) {
      toast.error("Unsupported format", {
        description: `The file "${file.name}" is not a valid CSV.`,
      });
      e.target.value = "";
      return;
    }

    toast.success("File uploaded", {
      description: `${file.name} ready to process.`,
    });
  };

  return (
    <VirtualLabel label="Upload CSV Data">
      <div className="pointer-events-auto">
        <label className="bg-primary text-background-dark flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] active:brightness-90">
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="material-symbols-outlined text-2xl font-bold">
            upload_file
          </span>
          <span className="sr-only">Upload CSV</span>
        </label>
      </div>
    </VirtualLabel>
  );
}
