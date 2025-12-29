export default function SelectFallback({ label }: { label: string }) {
  return (
    <div className="col-span-1 flex w-full flex-col">
      <p className="text-text-light pb-2 text-sm font-medium">{label}</p>
      <div className="bg-surface-dark border-border-dark h-12 w-full animate-pulse rounded-lg border">
        <div className="flex h-full items-center px-3">
          <div className="bg-border-dark/50 h-4 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
}
