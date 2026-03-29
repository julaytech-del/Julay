import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "JULAY — Premium Software Development",
    template: "%s | JULAY",
  },
  description:
    "JULAY builds scalable digital products — web apps, mobile apps, SaaS platforms, AI systems, and enterprise software that power real business growth.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "SaaS",
    "AI solutions",
    "enterprise software",
    "React",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julay.dev",
    siteName: "JULAY",
    title: "JULAY — Premium Software Development",
    description:
      "We build scalable digital products that power your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JULAY — Premium Software Development",
    description: "We build scalable digital products that power your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080808] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
