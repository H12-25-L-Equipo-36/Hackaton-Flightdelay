export default function Loader() {
  return (
    <div className="bg-background-dark/80 fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="animate-radar border-primary/40 absolute h-16 w-16 rounded-full border-2"></div>
        <div className="animate-radar border-primary/30 absolute h-16 w-16 rounded-full border-2 [animation-delay:0.5s]"></div>
        <div className="animate-flight text-primary relative flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl">flight</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-primary font-mono text-sm font-bold tracking-[0.3em] uppercase">
          Calculating Route
        </p>
        <div className="bg-surface-dark h-[2px] w-24 overflow-hidden rounded-full">
          <div className="bg-primary h-full w-full origin-left animate-[loading-bar_1.5s_infinite_ease-in-out]"></div>
        </div>
      </div>

      <style>
        {`
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}
      </style>
    </div>
  );
}
