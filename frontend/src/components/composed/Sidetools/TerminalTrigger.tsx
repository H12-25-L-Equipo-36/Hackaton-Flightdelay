import TerminalPanel from "../../ui/TerminalPanel";
import VirtualLabel from "../../ui/VirtualLabel";

export default function TerminalTrigger() {
  return (
    <div className="pointer-events-auto flex flex-col pt-4">
      <VirtualLabel label="Open Flight Log Terminal">
        <button
          type="button"
          popoverTarget="cli-popover"
          className="bg-primary text-background-dark flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] active:brightness-90"
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            terminal
          </span>
          <span className="sr-only">Flight_Computer_Log.sys</span>
        </button>
      </VirtualLabel>

      <div
        id="cli-popover"
        popover="manual"
        className="ease-[cubic-bezier(0.34,1.56,0.64,1) absolute inset-[unset] top-20 right-0 m-0 w-[min(25rem,100%)] origin-top-right scale-0 transition-all transition-discrete duration-500 open:scale-100 open:opacity-100 starting:open:scale-0 starting:open:opacity-0"
      >
        <TerminalPanel>
          <button
            type="button"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-red-500 p-2 text-white transition-all duration-300 hover:opacity-90 active:brightness-90"
            popoverTarget="cli-popover"
            popoverTargetAction="hide"
          >
            <span className="material-symbols-outlined font-bold">
              close_small
            </span>
          </button>
        </TerminalPanel>
      </div>
    </div>
  );
}
