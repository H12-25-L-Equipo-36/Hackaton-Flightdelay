import HistoryHeader from "@/src/modules/history/history-header";
import { PropsWithChildren } from "react";

export default function HistoryLayout({ children }: PropsWithChildren) {
  return (
    <section className="bg-background min-h-screen pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
        <HistoryHeader />

        <div>{children}</div>
      </div>
    </section>
  );
}
