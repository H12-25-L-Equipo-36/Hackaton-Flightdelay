import Link from "next/link";
import { Brand } from "./brand";
import { CollaboratorsStatus } from "./collaborators-status";
import { SocialLinks } from "./social-links";

export default function FooterPage() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/40 bg-background/50 backdrop-blur-sm mt-8">
      <div className="container mx-auto py-10 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <Brand />
          <CollaboratorsStatus />
          <SocialLinks />
        </div>

        <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">•</span>
            <span>Flight Prediction Engine </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <span>Built for</span>
            <Link href="https://nocountry.tech/" target="_blank">
              <img
                src="/nocountry.webp"
                alt="NoCountry"
                className="h-4 w-auto"
              />
            </Link>
            <span>Hackathon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
