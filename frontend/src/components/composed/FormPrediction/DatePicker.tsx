import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";

interface DatePickerProps<T extends FieldValues> extends UseControllerProps<T> {
  className?: string;
  label: string;
}

export default function DatePicker<T extends FieldValues>({
  className,
  label,
  ...props
}: DatePickerProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <div className={`flex w-full flex-col ${className}`}>
      <p className="text-text-light pb-2 text-sm font-medium">{label}</p>
      <div className="relative">
        <span className="text-text-muted absolute top-1/2 left-3 -translate-y-1/2">
          <span className="material-symbols-outlined text-[20px]">
            calendar_month
          </span>
        </span>
        <input
          {...field}
          min={field.value}
          type="date"
          className={`form-input focus:border-primary focus:ring-primary placeholder:text-text-muted bg-surface-dark h-12 w-full rounded-lg border pr-3 pl-10 font-mono text-base transition-colors focus:ring-1 ${
            error ? "border-red-500" : "border-border-dark"
          }`}
        />
        {error && (
          <span className="mt-1 text-xs font-medium text-red-500">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
}
