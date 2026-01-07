import { Github, Twitter, Globe } from "lucide-react";
import { ActionIcon } from "./action-icon";

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-4 md:items-end">
      <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/70">
        Connect with us
      </h3>
      <div className="flex items-center gap-2">
        <ActionIcon
          href="#"
          icon={Github}
          aria-label="GitHub"
          className="p-2.5 bg-muted/50"
          iconClassName="text-muted-foreground group-hover:text-primary"
        />
        <ActionIcon
          href="#"
          icon={Twitter}
          aria-label="Twitter"
          className="p-2.5 bg-muted/50"
          iconClassName="text-muted-foreground group-hover:text-primary"
        />
        <ActionIcon
          href="#"
          icon={Globe}
          aria-label="Website"
          className="p-2.5 bg-muted/50"
          iconClassName="text-muted-foreground group-hover:text-primary"
        />
      </div>
    </div>
  );
}
