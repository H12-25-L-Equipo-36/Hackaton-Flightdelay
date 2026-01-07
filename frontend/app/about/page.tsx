import { Users } from "lucide-react";
import SectionHeaders from "@/components/shared/section-header";

import AboutFooter from "@/src/modules/about/about-footer";
import { COLLABORATORS } from "@/src/modules/shared/data/collaborators";
import CollaboratorCard from "@/src/modules/about/collaborator-card";

const TITLE = "About Us";
export const metadata = {
  title: TITLE,
  description: "Learn more about the Flight Search Engine and our team.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: TITLE,
  },
  twitter: {
    title: TITLE,
  },
};

export default function AboutPage() {
  return (
    <section className="bg-background min-h-screen pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto space-y-24">
        <div className="space-y-12">
          <SectionHeaders
            title="Our"
            accentText="Collaborators"
            label="The Minds Behind"
            size="lg"
            icon={<Users className="size-4" />}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
            {COLLABORATORS.map((member, idx) => (
              <CollaboratorCard key={idx} {...member} />
            ))}
          </div>
        </div>

        <AboutFooter />
      </div>
    </section>
  );
}
