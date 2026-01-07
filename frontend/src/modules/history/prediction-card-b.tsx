"use client";
import {
  Calendar,
  Plane,
  Route,
  CloudRain,
  CloudLightning,
  Wind,
  Armchair,
  CircleOff,
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export type PredictionStatus = "succeeded" | "delayed" | "failed";
export type AtmosphericType = "live" | "storm" | "tailwind" | "none";

interface HistoryCardProps {
  id: string;
  status: PredictionStatus;
  origin: string;
  destination: string;
  date: string;
  aircraft: string;
  distance: string;
  atmospherics: AtmosphericType;
}

const statusConfig = {
  succeeded: {
    label: "SUCCEEDED",
    bg: "bg-primary/10",
    text: "text-primary",
    planeColor: "text-primary",
  },
  delayed: {
    label: "DELAYED",
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    planeColor: "text-amber-500",
  },
  failed: {
    label: "FAILED",
    bg: "bg-destructive/10",
    text: "text-destructive",
    planeColor: "text-destructive",
  },
};

const atmosphericConfig = {
  live: { label: "Live", icon: CloudRain },
  storm: { label: "Storm", icon: CloudLightning },
  tailwind: { label: "Tailwind", icon: Wind },
  none: { label: "None", icon: CircleOff },
};

export default function PredictionCardB({
  id,
  status,
  origin,
  destination,
  date,
  aircraft,
  distance,
  atmospherics,
}: HistoryCardProps) {
  const config = statusConfig[status];
  const atmospheric = atmosphericConfig[atmospherics];
  const WeatherIcon = atmospheric.icon;

  return (
    <div
      className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl focus-within:border-primary/50 focus-within:shadow-2xl"
      tabIndex={1}
    >
      <div className="flex justify-between items-center mb-6">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold tracking-wider",
            config.bg,
            config.text
          )}
        >
          {config.label}
        </span>
        <span className="text-gray-500 text-xs font-mono">{id}</span>
      </div>

      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex flex-col">
          <span className="text-gray-500 text-[10px] font-bold uppercase mb-1">
            From
          </span>
          <span className="text-foreground text-2xl font-bold tracking-tight">
            {origin}
          </span>
        </div>

        <div className="flex-1 flex items-center gap-2 mb-[-12px]">
          <div className="h-[2px] flex-1 border-b border-dashed border-border/50"></div>
          <Plane className={cn("size-5", config.planeColor)} />
          <div className="h-[2px] flex-1 border-b border-dashed border-border/50"></div>
        </div>

        <div className="flex flex-col items-end text-right">
          <span className="text-muted-foreground text-[10px] font-bold uppercase mb-1">
            To
          </span>
          <span className="text-foreground text-2xl font-bold tracking-tight">
            {destination}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="size-4" />
            <span className="text-xs font-medium">Date</span>
          </div>
          <span className="text-xs font-bold text-foreground">{date}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Armchair className="size-4" />
            <span className="text-xs font-medium">Aircraft</span>
          </div>
          <span className="text-xs font-bold text-foreground">{aircraft}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Route className="size-4" />
            <span className="text-xs font-medium">Distance</span>
          </div>
          <span className="text-xs font-bold text-foreground">
            {distance}{" "}
            <span className="text-muted-foreground font-medium">km</span>
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <WeatherIcon className="size-4" />
            <span className="text-xs font-medium">Atmospherics</span>
          </div>
          <span className="text-xs font-bold text-foreground">
            {atmospheric.label}
          </span>
        </div>
      </div>
    </div>
  );
}
