import Header from "../components/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main className="dark relative">
      <div className="bg-background-dark text-text-light font-display flex flex-col">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
