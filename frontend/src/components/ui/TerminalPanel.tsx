import type { PropsWithChildren } from "react";

export default function TerminalPanel({
  children,
}: Partial<PropsWithChildren>) {
  return (
    <div className="bg-background-dark border-border-dark flex w-[inherit] flex-col border-l backdrop:bg-amber-100">
      <div className="border-border-dark bg-surface-dark flex items-center justify-between border-b px-6 py-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-text-muted text-sm">
            terminal
          </span>
          <span className="text-text-muted font-mono text-xs tracking-wider uppercase">
            Flight_Computer_Log.sys
          </span>
        </div>
        {children ? (
          children
        ) : (
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
            <div className="bg-warning-amber/50 h-2.5 w-2.5 rounded-full"></div>
            <div className="bg-success-green/50 h-2.5 w-2.5 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="scrollbar-thin scrollbar-thumb-border-dark scrollbar-track-transparent flex-1 space-y-1.5 overflow-y-auto p-6 font-mono text-sm">
        <div className="text-text-muted flex gap-3">
          <span className="opacity-70">10:42:01</span> <span>[SYSTEM]</span>
          <span>Initializing flight physics engine v2.4...</span>
        </div>
        <div className="text-success-green flex gap-3">
          <span className="text-text-muted opacity-70">10:42:02</span>
          <span className="font-bold">[SUCCESS]</span>
          <span>Connection to global weather servers established.</span>
        </div>
        <div className="text-info-blue flex gap-3">
          <span className="text-text-muted opacity-70">10:42:05</span>
          <span className="font-bold">[NAV]</span>
          <span>Calculating great circle route from JFK to LHR...</span>
        </div>
        <div className="text-success-green flex gap-3">
          <span className="text-text-muted opacity-70">10:42:19</span>
          <span className="font-bold">[LIFTOFF]</span>
          <span>Simulation initiated. Good luck, pilot.</span>
        </div>
      </div>
    </div>
  );
}
