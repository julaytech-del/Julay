import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ComparisonSection from "@/components/ComparisonSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Julay Group LLC — DevOps & Software Solutions",
  description:
    "Julay Group LLC delivers enterprise DevOps, cloud infrastructure, AI chatbots, and office management systems. US-registered, globally trusted.",
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Hero />
      <ProblemSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ComparisonSection />
      <PortfolioPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
