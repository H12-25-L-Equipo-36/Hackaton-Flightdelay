"use client";
import { History, LayoutGrid, User } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SectionHeader from "@/components/shared/section-header";

const links = [
  { href: "/history", label: "Individual", icon: <User className="size-4" /> },
  {
    href: "/history/byLote",
    label: "By Lote",
    icon: <LayoutGrid className="size-4" />,
  },
];

export default function HistoryHeader() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
      <SectionHeader
        title="History"
        accentText="Predictions"
        label="Data Archive"
        size="lg"
        icon={<History className="size-5 text-primary" />}
      />

      <div className="w-full md:w-auto flex items-center bg-secondary/30 backdrop-blur-sm p-1 rounded-2xl md:rounded-full border border-border/50 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-2 rounded-xl md:rounded-full text-sm font-bold transition-all duration-300",
              pathname === link.href
                ? "bg-accent text-primary shadow-lg shadow-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {link.icon}
            <span
              className={cn(
                "whitespace-nowrap",
                pathname === link.href ? "" : "hidden sm:block"
              )}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
