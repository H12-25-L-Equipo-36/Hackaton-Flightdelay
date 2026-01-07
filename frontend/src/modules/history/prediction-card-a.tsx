import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Clock, PlaneTakeoff, PlaneLanding, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface PredictionCardAProps {
  origin: string;
  destination: string;
  status: string;
  createdAt: Date;
}

export default function PredictionCardA({
  origin,
  destination,
  status,
  createdAt,
}: PredictionCardAProps) {
  return (
    <Card className="overflow-hidden border-muted/50 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Badge
            variant={status === "delayed" ? "destructive" : "secondary"}
            className="font-medium px-2 py-0.5"
          >
            {status.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <Clock className="size-3.5" />
            {format(createdAt, "HH:mm")}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-primary/10">
                <PlaneTakeoff className="size-3.5 text-primary" />
              </div>
              <span className="font-bold text-base truncate">{origin}</span>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider ml-1">
              Departure
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1 px-4">
            <div className="w-full h-px bg-linear-to-r from-transparent via-muted-foreground/30 to-transparent relative">
              <PlaneTakeoff className="size-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/40 rotate-90" />
            </div>
            <span className="text-[10px] text-muted-foreground/40 font-medium italic">
              Flight Path
            </span>
          </div>

          <div className="flex flex-col gap-1 items-end min-w-0 text-right">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base truncate">
                {destination}
              </span>
              <div className="p-1.5 rounded-full bg-primary/10">
                <PlaneLanding className="size-3.5 text-primary" />
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mr-1">
              Arrival
            </span>
          </div>
        </div>

        <Separator className="my-4 opacity-50" />

        <div className="flex justify-between items-center text-[10px] text-muted-foreground/60 font-medium">
          <div className="flex items-center gap-1">
            <MapPin className="size-3" />
            <span>Trans-Atlantic Route</span>
          </div>
          <span>{format(createdAt, "MMM dd, yyyy")}</span>
        </div>
      </CardContent>
    </Card>
  );
}
