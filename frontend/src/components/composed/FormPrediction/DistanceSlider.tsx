import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";

const MIN_DISTANCE = 3;
const MAX_DISTANCE = 15300;

interface DistanceSliderProps<
  T extends FieldValues,
> extends UseControllerProps<T> {
  className?: string;
}

export default function DistanceSlider<T extends FieldValues>(
  props: DistanceSliderProps<T>,
) {
  const {
    field: { value, onChange, ...fieldProps },
  } = useController(props);

  const progressPercent =
    ((Number(value) - MIN_DISTANCE) / (MAX_DISTANCE - MIN_DISTANCE)) * 100;

  return (
    <div
      className={`bg-surface-dark border-border-dark rounded-lg border p-4 ${props.className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-text-light text-sm font-medium">Flight Distance</p>
        <span className="text-primary font-mono font-bold">
          {Number(value).toLocaleString()} km
        </span>
      </div>
      <div className="flex h-6 items-center gap-4">
        <span className="text-text-muted text-xs">{MIN_DISTANCE} km</span>
        <div className="relative flex-1">
          <input
            type="range"
            min={MIN_DISTANCE}
            max={MAX_DISTANCE}
            disabled
            step="50"
            className="slider-altitude h-1.5 w-full cursor-pointer appearance-none rounded-full"
            style={{
              background: `linear-gradient(to right, var(--color-primary) ${progressPercent}%, var(--color-border-dark) ${progressPercent}%)`,
            }}
            {...fieldProps}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        </div>
        <span className="text-text-muted text-xs">
          {MAX_DISTANCE.toLocaleString()} km
        </span>
      </div>
    </div>
  );
}
