import CSVUploader from "./CSVUploader";
import SaveRouteBtn from "./SaveRouteBtn";
import TerminalTrigger from "./TerminalTrigger";

export default function SideTools() {
  return (
    <aside className="pointer-events-none relative z-20 flex h-full w-full flex-col items-end gap-8 p-6 transition-all select-none">
      <div className="pointer-events-auto flex flex-col gap-4">
        <CSVUploader />
        <SaveRouteBtn />
      </div>

      <TerminalTrigger />
    </aside>
  );
}
