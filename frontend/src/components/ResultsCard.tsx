export default function ResultsCard() {
  return (
    <div className="mt-auto space-y-4">
      <div className="text-text-muted flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
        <span className="material-symbols-outlined text-sm">leaderboard</span>
        Simulation Results
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div className="bg-surface-dark border-border-dark rounded-lg border p-4 shadow-xl">
          <p className="text-text-muted mb-1 text-xs font-bold tracking-wider uppercase">
            Distance
          </p>
          <p className="text-primary font-mono text-xl">
            3,451 <span className="text-text-muted text-sm">NM</span>
          </p>
        </div>
        <div className="bg-surface-dark border-border-dark rounded-lg border p-4 shadow-xl">
          <p className="text-text-muted mb-1 text-xs font-bold tracking-wider uppercase">
            Est. Time
          </p>
          <p className="text-primary font-mono text-xl">06h 45m</p>
        </div>
        <div className="bg-surface-dark border-border-dark col-span-2 rounded-lg border p-4 shadow-xl">
          <p className="text-text-muted mb-1 text-xs font-bold tracking-wider uppercase">
            Fuel Burn
          </p>
          <p className="text-primary font-mono text-xl">
            42.5 <span className="text-text-muted text-sm">TONS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
