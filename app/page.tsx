import { BetaContactSection } from "@/components/BetaContactSection";
import { CommunitySection } from "@/components/CommunitySection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { ProgramSection } from "@/components/ProgramSection";
import { SpotSection } from "@/components/SpotSection";
import { StepsSection } from "@/components/StepsSection";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { TESTFLIGHT_URL } from "@/lib/assets";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <HeroSection />
        <ProblemSection />
        <SpotSection />
        <CommunitySection />
        <ProgramSection />
        <StepsSection />
        <FaqSection />
        <BetaContactSection />
      </main>

      <footer>
        <div className="wrap">
          <BrandLogo />
          <span>© {new Date().getFullYear()} AVENX</span>
          <nav aria-label="Pied de page">
            <a href="#faq">Questions</a>
            <a href={TESTFLIGHT_URL} target="_blank" rel="noopener noreferrer">
              Bêta iOS
            </a>
            <a href="mailto:contact@avenx.app">contact@avenx.app</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
