import { DashboardPreview } from "@/components/ui/dashboard-preview";
import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCards } from "@/components/ui/feature-cards";
import FAQSection from "@/components/ui/faq-section";
import CTASection from "@/components/ui/cta-section";
import FooterSection from "@/components/ui/footer-section";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#f5f1ed]">
      <Header />
      <HeroSection />
      <DashboardPreview />
      <FeatureCards />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
