"use client";
import { History, Inbox } from "lucide-react";
import { motion } from "motion/react";
import PredictionCardA from "./prediction-card-a";
import { match } from "ts-pattern";
import SectionHeader from "@/components/shared/section-header";
import { cn } from "@/src/lib/utils";

interface ListHistoryProps {
  className?: string;
}

const mock = [
  {
    origin: "JFK",
    destination: "LAX",
    status: "delayed",
    createdAt: new Date(),
  },
  {
    origin: "LHR",
    destination: "CDG",
    status: "on time",
    createdAt: new Date(),
  },
  {
    origin: "HND",
    destination: "SFO",
    status: "delayed",
    createdAt: new Date(),
  },
  {
    origin: "DXB",
    destination: "SIN",
    status: "on time",
    createdAt: new Date(),
  },
];

export default function ListHistory({ className }: ListHistoryProps) {
  return (
    <aside
      className={cn(
        "h-[600px] lg:h-[600px] flex flex-col gap-4 overflow-y-auto",
        className
      )}
    >
      <SectionHeader
        title="Recent"
        accentText="Predictions"
        label="Your recent predictions"
        size="sm"
        icon={<History className="size-5 text-primary" />}
      />

      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar  p-2 w-full rounded-md gap-2 border max-w-3xl mx-auto">
        {match(!mock.length)
          .with(false, () =>
            mock.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <PredictionCardA {...item} />
              </motion.div>
            ))
          )
          .otherwise(() => (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
              <Inbox className="mb-4 size-10 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No predictions found
              </p>
            </div>
          ))}
      </div>
    </aside>
  );
}
