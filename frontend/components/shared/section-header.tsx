import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  title: string;
  accentText: string;
  label: string;
  icon?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeVariants = {
  sm: {
    container: "space-y-1",
    label: "text-[10px] gap-1.5",
    title: "text-lg md:text-xl",
    icon: "size-3.5",
  },
  md: {
    container: "space-y-2",
    label: "text-xs gap-2",
    title: "text-2xl md:text-3xl",
    icon: "size-4",
  },
  lg: {
    container: "space-y-4",
    label: "text-xs gap-2.5",
    title: "text-3xl md:text-5xl",
    icon: "size-5",
  },
  xl: {
    container: "space-y-6",
    label: "text-sm gap-3",
    title: "text-5xl md:text-7xl",
    icon: "size-6",
  },
};

export default function SectionHeader({
  title,
  accentText,
  label,
  icon,
  as: Tag = "h2",
  size = "md",
  className,
}: SectionHeaderProps) {
  const variant = sizeVariants[size];

  return (
    <div className={cn(variant.container, className)}>
      <div
        className={cn(
          "flex items-center text-primary font-bold tracking-widest uppercase",
          variant.label
        )}
      >
        {icon && (
          <div
            className={cn(
              "flex items-center justify-center shrink-0",
              variant.icon
            )}
          >
            {icon}
          </div>
        )}
        <span className="leading-none">{label}</span>
      </div>
      <Tag
        className={cn(
          "font-bold tracking-tight text-foreground leading-[1.1]",
          variant.title
        )}
      >
        {title} <span className="text-primary italic">{accentText}</span>
      </Tag>
    </div>
  );
}
