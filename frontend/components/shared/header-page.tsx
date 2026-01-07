import { Plane } from "lucide-react";
import { DropdownMenuDialog } from "./dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeaderPage() {
  return (
    <header
      className="absolute top-0 z-50 w-full border-b border-primary/10 bg-background/60 backdrop-blur-xl shadow-sm"
      style={{
        animation: "re-reveal linear forwards",
        animationTimeline: "view(block)",
        animationRange: "exit-crossing 200% exit-crossing 350%",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
        >
          <div className="p-1.5 sm:p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:rotate-12">
            <Plane className="size-5 sm:size-6 text-primary fill-primary/10" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-black tracking-tight leading-none capitalize bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Flight Prediction
            </h1>
            <div className="hidden sm:flex items-center gap-2 mt-1">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                AI Prediction Engine
              </span>
              <Badge
                variant="outline"
                className="h-4 px-1.5 text-[8px] font-black border-primary/30 bg-primary/5 text-primary uppercase select-none"
              >
                v1.0
              </Badge>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-4 w-px bg-muted mx-1 sm:mx-2 hidden sm:block" />
          <ModeToggle />
          <DropdownMenuDialog />
        </div>
      </div>
    </header>
  );
}
