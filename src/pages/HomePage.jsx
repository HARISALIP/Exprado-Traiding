import Hero from "../components/Hero";
import Services from "../components/Services";
import BrandExperience from "../components/BrandExperience";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsStrip from "../components/StatsStrip";
import SafetySection from "../components/SafetySection";
import CtaSection from "../components/CtaSection";

export default function HomePage({ navigateTo }) {
  return (
    <>
      <Hero navigateTo={navigateTo} />
      <StatsStrip />
      <Services navigateTo={navigateTo} />
      <BrandExperience />
      <WhyChooseUs />
      <SafetySection />
      <CtaSection navigateTo={navigateTo} />
    </>
  );
}
