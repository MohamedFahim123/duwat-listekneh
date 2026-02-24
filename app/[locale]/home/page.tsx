import AboutSection from "@/app/components/sections/AboutSection";
import BranchesSection from "@/app/components/sections/BranchesSection";
import HelpSection from "@/app/components/sections/HelpSection";
import Hero from "@/app/components/sections/Hero";
import OrderSection from "@/app/components/sections/OrderSection";
import SignatureSection from "@/app/components/sections/SignatureSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: currentLocale } = await params;

  return (
    <>
      <Hero />
      <OrderSection locale={currentLocale} />
      <SignatureSection />
      <AboutSection />
      <BranchesSection locale={currentLocale} />
      <HelpSection />
    </>
  );
}
