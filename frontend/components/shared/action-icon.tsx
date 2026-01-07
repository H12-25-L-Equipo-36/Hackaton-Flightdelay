import { cn } from "@/src/lib/utils";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

interface ActionIconProps extends ComponentProps<typeof Link> {
  icon: LucideIcon;
  iconClassName?: string;
}

export function ActionIcon({
  icon: Icon,
  className,
  iconClassName,
  ...props
}: ActionIconProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "p-2 rounded-xl bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      <Icon className={cn("size-5", iconClassName)} />
    </Link>
  );
}
