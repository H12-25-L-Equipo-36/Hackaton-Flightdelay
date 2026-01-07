"use client";

import { ChevronDown, Plane, FileSpreadsheet } from "lucide-react";
import PredictForm from "./predict-form";
import CSVBatchPredictor from "./csv-batch-predictor";

export default function PredictionSidebar() {
  return (
    <div className="flex flex-col gap-4">
      <details
        name="command"
        className="group border border-border/50 rounded-[32px] overflow-hidden bg-card/20 backdrop-blur-sm"
        open
      >
        <summary className="flex items-center justify-between gap-2 p-4 md:p-6 cursor-pointer list-none hover:bg-secondary/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Plane className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Manual Entry
              </span>
              <span className="text-sm font-bold tracking-tight">
                Single Prediction
              </span>
            </div>
          </div>
          <ChevronDown className="size-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
        </summary>
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <PredictForm />
        </div>
      </details>

      <details
        name="command"
        className="group border border-border/50 rounded-[32px] overflow-hidden bg-card/20 backdrop-blur-sm"
      >
        <summary className="flex items-center justify-between gap-2 p-4 md:p-6 cursor-pointer list-none hover:bg-secondary/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <FileSpreadsheet className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Bulk Process
              </span>
              <span className="text-sm font-bold tracking-tight">
                CSV Batch Upload
              </span>
            </div>
          </div>
          <ChevronDown className="size-5 text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
        </summary>
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <CSVBatchPredictor />
        </div>
      </details>
    </div>
  );
}
