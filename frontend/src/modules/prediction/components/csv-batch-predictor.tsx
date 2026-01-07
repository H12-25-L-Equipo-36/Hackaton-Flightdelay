"use client";

import { useState, useRef } from "react";
import {
  FileUp,
  UploadCloud,
  FileSpreadsheet,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/src/lib/utils";
import SectionHeader from "@/components/shared/section-header";

export default function CSVBatchPredictor() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    if (
      selectedFile.type === "text/csv" ||
      selectedFile.name.endsWith(".csv")
    ) {
      setFile(selectedFile);
      setStatus("idle");
    } else {
      setStatus("error");
      // Optional: Show error message for invalid file type
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!file) return;

    setStatus("uploading");

    // Simulate upload/processing
    setTimeout(() => {
      setStatus("success");
      // In a real app, you would send the file to a server action
    }, 2000);
  };

  const removeFile = () => {
    setFile(null);
    setStatus("idle");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 sm:p-6 w-full rounded-2xl border bg-card/40 backdrop-blur-sm transition-all duration-300">
        <div
          className={cn(
            "relative group flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl transition-all duration-300",
            dragActive
              ? "border-primary bg-primary/5 scale-[0.99]"
              : "border-border hover:border-primary/50",
            status === "success" && "border-emerald-500/50 bg-emerald-500/5"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept=".csv"
            onChange={handleChange}
          />

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="size-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-emerald-500">
                    Batch Processed!
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Your batch simulations have been created.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={removeFile}
                  className="mt-2"
                >
                  Upload Another
                </Button>
              </motion.div>
            ) : file ? (
              <motion.div
                key="file-selected"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border w-full">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FileSpreadsheet className="size-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{file.name}</p>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={removeFile}
                    className="rounded-full hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="size-4" />
                  </Button>
                </div>

                <Button
                  className="w-full font-bold"
                  disabled={status === "uploading"}
                  onClick={handleUpload}
                >
                  {status === "uploading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <UploadCloud className="size-4" />
                      </motion.div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileUp className="mr-2 size-4" />
                      Calculate Batch
                    </>
                  )}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <UploadCloud className="size-10" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold">Drop your CSV here</p>
                  <p className="text-xs text-muted-foreground max-w-[200px]">
                    Drag and drop or click to browse flight batch files
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onButtonClick}
                  className="mt-2 font-bold"
                >
                  Select File
                </Button>
                {status === "error" && (
                  <div className="flex items-center gap-1.5 text-destructive mt-2 text-[10px] font-bold uppercase tracking-wider">
                    <AlertCircle className="size-3" />
                    Invalid file type. Please use CSV.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">
          <span>Max 100 routes</span>
          <button className="hover:text-primary transition-colors cursor-pointer">
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
}
