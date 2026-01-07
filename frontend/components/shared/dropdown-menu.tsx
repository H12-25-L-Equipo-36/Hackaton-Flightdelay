"use client";

import { Logs, History, Plane, Waypoints } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    name: "Simulator",
    href: "/",
    icon: Plane,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "About",
    href: "/about",
    icon: Waypoints,
  },
] as const;

export function DropdownMenuDialog() {
  const pathname = usePathname();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label="Open menu" size="icon-sm">
          <Logs />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuLabel>Sections</DropdownMenuLabel>
        <DropdownMenuGroup>
          {sections.map((section) => (
            <DropdownMenuItem key={section.name} asChild>
              <Link
                href={section.href}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  pathname === section.href
                    ? "bg-primary/80 font-semibold text-primary-foreground"
                    : ""
                }`}
              >
                <section.icon
                  className={`hover:text-current ${
                    pathname === section.href ? "text-primary-foreground" : ""
                  }`}
                />
                <span>{section.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
