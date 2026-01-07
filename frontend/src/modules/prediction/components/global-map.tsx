import { Card } from "@/components/ui/card";
import { Map, MapControls } from "@/components/ui/map";
import { cn } from "@/src/lib/utils";

interface GlobalMapProps {
  className?: string;
}

export default function GlobalMap({ className }: GlobalMapProps) {
  return (
    <Card
      className={cn("h-[600px] lg:h-[600px] p-0 overflow-hidden", className)}
    >
      <Map center={[-74.006, 40.7128]} zoom={1}>
        <MapControls />
      </Map>
    </Card>
  );
}
