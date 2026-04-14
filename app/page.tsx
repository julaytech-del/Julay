import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Julay Group LLC — DevOps & Software Solutions",
  description:
    "Julay Group LLC delivers enterprise DevOps, cloud infrastructure, AI chatbots, and office management systems. US-registered, globally trusted.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
