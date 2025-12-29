import { useMemo, type ButtonHTMLAttributes } from "react";
import { match } from "ts-pattern";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  status: "pending" | "error" | "success" | "idle";
};

export default function BtnCallToAction({ status, ...rest }: Props) {
  const buttonConfig = useMemo(() => {
    return match(status)
      .with("pending", () => ({
        label: "SIMULATING...",
        className: "bg-green-400",
      }))
      .with("error", () => ({
        label: "RETRY SIMULATION",
        className: "bg-warning-amber hover:bg-warning-amber/90",
      }))
      .otherwise(() => ({
        label: "INITIATE SIMULATION",
        className: "bg-primary hover:bg-primary/90",
      }));
  }, [status]);

  return (
    <button
      {...rest}
      className={`text-background-dark shadow-primary/25 group flex h-14 w-full items-center justify-center gap-2 rounded-lg text-lg font-bold tracking-wide shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-30 ${buttonConfig.className}`}
    >
      <span className="material-symbols-outlined group-hover:animate-bounce">
        rocket_launch
      </span>
      {buttonConfig.label}
    </button>
  );
}
