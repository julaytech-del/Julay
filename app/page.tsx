import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import PortfolioPreview from "@/components/PortfolioPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "JULAY — Premium Software Development",
  description:
    "We build scalable digital products — web apps, mobile apps, SaaS, AI systems, and enterprise software that power real business growth.",
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
