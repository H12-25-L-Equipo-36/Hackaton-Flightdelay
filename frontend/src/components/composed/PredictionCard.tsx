import { useMemo } from "react";
import { match } from "ts-pattern";
import Badge from "../ui/Badge";

const ATMOS_CONFIG: Record<string, { icon: string }> = {
  live: { icon: "sunny" },
  storm: { icon: "thunderstorm" },
  tailwind: { icon: "air" },
  none: { icon: "block" },
};

interface PredictionCardProps {
  id: string;
  origin: string;
  destination: string;
  date: string;
  aircraft: string;
  distance: string;
  atmos: string;
  status: string;
  className?: string;
}

export default function PredictionCard({
  id,
  origin,
  destination,
  date,
  aircraft,
  distance,
  atmos,
  status,
  className = "",
}: PredictionCardProps) {
  const atmosConfig = ATMOS_CONFIG[atmos.toLowerCase()] || ATMOS_CONFIG.none;

  const theme = useMemo(() => {
    return match(status.toLowerCase())
      .with("success", () => ({
        card: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]",
        accent: "text-primary",
        badge: {
          label: "SUCCEEDED",
          classes: "bg-primary/10 text-primary ring-primary/20",
        },
      }))
      .with("delayed", () => ({
        card: "hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
        accent: "text-amber-400",
        badge: {
          label: "DELAYED",
          classes: "bg-amber-400/10 text-amber-400 ring-amber-400/20",
        },
      }))
      .with("error", () => ({
        card: "hover:border-red-500/50 hover:shadow-[0_0_30_rgba(239,68,68,0.15)]",
        accent: "text-red-500",
        badge: {
          label: "FAILED",
          classes: "bg-red-500/10 text-red-500 ring-red-500/20",
        },
      }))
      .otherwise(() => ({
        card: "hover:border-border-dark",
        accent: "text-text-muted",
        badge: {
          label: status.toUpperCase(),
          classes: "bg-text-muted/10 text-text-muted ring-text-muted/20",
        },
      }));
  }, [status]);

  return (
    <div
      className={`group border-border-dark bg-background-dark/40 relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${theme.card} ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <Badge label={theme.badge.label} className={theme.badge.classes} />
        <span className="text-text-muted font-mono text-xs italic">#{id}</span>
      </div>

      {/* Route Section */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-center">
          <p className="text-text-muted text-[10px] font-bold uppercase">
            From
          </p>
          <h3 className="text-text-light text-2xl font-black">{origin}</h3>
        </div>
        <div className="relative flex flex-1 flex-col items-center px-4">
          <div className="border-border-dark w-full border-t border-dashed"></div>
          <span
            className={`${theme.accent} material-symbols-outlined absolute -top-3 transition-transform duration-500 group-hover:translate-x-2`}
          >
            flight
          </span>
        </div>
        <div className="text-center">
          <p className="text-text-muted text-[10px] font-bold uppercase">To</p>
          <h3 className="text-text-light text-2xl font-black">{destination}</h3>
        </div>
      </div>

      {/* Details Grid */}
      <div className="border-border-dark space-y-3 border-t pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              calendar_today
            </span>
            Date
          </span>
          <span className="text-text-light font-medium">{date}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              flight_class
            </span>
            Aircraft
          </span>
          <span className="text-text-light max-w-[120px] truncate font-medium">
            {aircraft}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">route</span>
            Distance
          </span>
          <span className={`font-mono font-bold`}>{distance}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              {atmosConfig.icon}
            </span>
            Atmospherics
          </span>
          <span className="text-text-light font-bold capitalize">{atmos}</span>
        </div>
      </div>
    </div>
  );
}
