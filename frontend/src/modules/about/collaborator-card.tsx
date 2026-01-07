import { Github, Linkedin, ExternalLink } from "lucide-react";
import { ActionIcon } from "@/components/shared/action-icon";

interface CollaboratorCardProps {
  name: string;
  role: string;
  avatar: string;
  github: string;
  linkedin: string;
  description?: string;
}

const DEFAULT_DESCRIPTION = (role: string) =>
  `Graduate of the Oracle Next Education program (${role})`;

export default function CollaboratorCard({
  name,
  role,
  avatar,
  github,
  linkedin,
  description,
}: CollaboratorCardProps) {
  return (
    <div className="group relative bg-card/40 rounded-[40px] border border-border overflow-hidden transition-all duration-500 hover:border-primary/30">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />

      <div className="p-8 space-y-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
          <img
            src={avatar}
            alt={name}
            className="relative w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {name}
          </h3>
          <p className="text-primary text-sm font-semibold tracking-wide uppercase">
            {role}
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed italic">
          {description || DEFAULT_DESCRIPTION(role)}
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <ActionIcon href={github} icon={Github} />
          <ActionIcon href={linkedin} icon={Linkedin} />
          <ActionIcon
            href="#"
            icon={ExternalLink}
            iconClassName="size-4"
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
