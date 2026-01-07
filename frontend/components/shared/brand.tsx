import { Plane } from "lucide-react";

export function Brand() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 cursor-default">
        <div className="p-1.5 rounded-lg bg-primary/10">
          <Plane className="size-4 text-primary" />
        </div>
        <span className="text-lg font-black tracking-tight capitalize">
          Flight Prediction
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        Next-generation AI engine for flight prediction and atmospheric
        analysis. Providing real-time insights for global aviation.
      </p>
    </div>
  );
}
