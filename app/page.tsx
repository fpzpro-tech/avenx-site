import { CTASection } from "@/components/CTASection";
import { CoachSection } from "@/components/CoachSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FutureSection } from "@/components/FutureSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SocialSection } from "@/components/SocialSection";
import { SpotSection } from "@/components/SpotSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main>
        <HeroSection />
        <FeatureGrid />
        <SpotSection />
        <CoachSection />
        <SocialSection />
        <FutureSection />
        <CTASection />
      </main>

      <footer className="border-t border-white/5 bg-avenx-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-avenx-primary/30 bg-avenx-primary/10 text-sm font-bold text-avenx-primary">
              A
            </span>
            <span className="font-semibold tracking-[0.18em] text-avenx-snow">AVENX</span>
          </div>
          <p className="text-sm text-avenx-muted">
            © {new Date().getFullYear()} AVENX — Street workout. Spots. Coach IA.
          </p>
        </div>
      </footer>
    </div>
  );
}
