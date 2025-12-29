import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";

interface SelectOptions {
  id: number;
  value: string;
  label: string;
}

interface SelectCommonProps<
  T extends FieldValues,
> extends UseControllerProps<T> {
  label: string;
  placeholder: string;
  options: SelectOptions[];
  icon?: string;
  className?: string;
}

export default function SelectCommon<T extends FieldValues>({
  label,
  placeholder,
  options,
  className,
  icon,
  ...props
}: SelectCommonProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <div className={`col-span-1 flex w-full flex-col ${className}`}>
      <p className="text-text-light pb-2 text-sm font-medium">{label}</p>
      <div className="relative">
        {icon && (
          <span className="text-text-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
            <span className="material-symbols-outlined text-sm">{icon}</span>
          </span>
        )}
        <select
          className={`form-select bg-surface-dark focus:border-primary focus:ring-primary h-12 w-full rounded-lg border text-base transition-colors focus:ring-1 disabled:opacity-30 ${
            icon ? "pr-3 pl-10" : "px-3"
          } ${error ? "border-red-500" : "border-border-dark"}`}
          disabled={options.length === 0}
          {...field}
        >
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {error && (
          <span className="mt-1 text-xs font-medium text-red-500">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
}
