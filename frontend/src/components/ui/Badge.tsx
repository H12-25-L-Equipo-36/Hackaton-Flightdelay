interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`${className} rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase ring-1`}
    >
      {label}
    </span>
  );
}
