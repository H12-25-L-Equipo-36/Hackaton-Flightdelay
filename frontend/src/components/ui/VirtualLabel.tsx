import { type PropsWithChildren } from "react";

interface VirtualLabelProps extends PropsWithChildren {
  children: React.ReactNode;
  label: string;
}

export default function VirtualLabel({ children, label }: VirtualLabelProps) {
  return (
    <div className="relative">
      <div className="peer size-fit">{children}</div>
      <span className="absolute top-2/4 left-0 w-max -translate-x-full -translate-y-2/4 rounded-xl border px-2 py-1 text-sm opacity-0 transition-all duration-300 peer-focus-within:-translate-x-[110%] peer-focus-within:opacity-100 peer-hover:-translate-x-[110%] peer-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}
