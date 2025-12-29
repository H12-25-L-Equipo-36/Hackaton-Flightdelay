import SideTools from "../components/composed/Sidetools";
import MapView from "../components/MapView";
import Sidebar from "../components/composed/Sidebar";

export default function SimulatorPage() {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="col-[2/3] row-[1/2]">
        <MapView />
      </div>
      <div className="col-[2/3] row-[1/2]">
        <SideTools />
      </div>
    </div>
  );
}
