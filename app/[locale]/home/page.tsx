import AboutSection from "@/app/components/sections/AboutSection";
import BranchesSection from "@/app/components/sections/BranchesSection";
import HelpSection from "@/app/components/sections/HelpSection";
import Hero from "@/app/components/sections/Hero";
import OrderSection from "@/app/components/sections/OrderSection";
import SignatureSection from "@/app/components/sections/SignatureSection";

export default function HomePage({ locale }: { locale: string }) {
  return (
    <>
      <Hero />
      <OrderSection locale={locale} />
      <SignatureSection />
      <AboutSection />
      <BranchesSection locale={locale} />
      <HelpSection />
    </>
  );
}
