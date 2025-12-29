import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";

interface AtmosControlsProps<
  T extends FieldValues,
> extends UseControllerProps<T> {
  className?: string;
}

const ATMOS_OPTIONS = [
  { id: "live", label: "Live", icon: "sunny" },
  { id: "storm", label: "Storm", icon: "storm" },
  { id: "tailwind", label: "Tailwind", icon: "air" },
  { id: "none", label: "None", icon: "block" },
] as const;

export default function AtmosControls<T extends FieldValues>(
  props: AtmosControlsProps<T>,
) {
  const { field } = useController(props);

  return (
    <div className={`space-y-4 ${props.className}`}>
      <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
        <span className="material-symbols-outlined text-sm">cloud</span>
        Atmospherics
      </div>
      <div className="grid grid-cols-3 gap-3">
        {ATMOS_OPTIONS.map((option) => (
          <label key={option.id} className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              {...field}
              value={option.id}
              checked={field.value === option.id}
            />
            <div className="border-border-dark text-text-muted peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:bg-surface-dark flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors peer-checked:font-bold">
              <span className="material-symbols-outlined text-base">
                {option.icon}
              </span>
              {option.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
