export default function FormHeader() {
  return (
    <div className="p-6 pb-2">
      <div className="flex flex-col gap-2">
        <div className="text-primary flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase">
            System Ready
          </span>
        </div>
        <h1 className="text-3xl leading-tight font-black tracking-[-0.033em]">
          Flight Config
        </h1>
        <p className="text-text-muted text-sm font-normal">
          Input parameters to calculate geodesic path and fuel burn.
        </p>
      </div>
    </div>
  );
}
