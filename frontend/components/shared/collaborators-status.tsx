import { COLLABORATORS } from "@/src/modules/shared/data/collaborators";
import Link from "next/link";

export function CollaboratorsStatus() {
  return (
    <div className="flex flex-col gap-4 md:items-center">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {COLLABORATORS.slice(0, 4).map((collaborator) => (
            <Link
              key={collaborator.name}
              href={collaborator.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:z-10 focus:z-10 outline-none"
            >
              <img
                src={collaborator.avatar}
                alt={collaborator.name}
                className="size-7 rounded-full border-2 border-background object-cover bg-muted"
              />
            </Link>
          ))}
        </div>
        <span className="text-xs font-semibold text-muted-foreground">
          collaborators
        </span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 w-fit">
        <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
          All systems functional
        </span>
      </div>
    </div>
  );
}
