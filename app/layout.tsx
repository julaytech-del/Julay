import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Julay Group LLC — DevOps & Software Solutions",
    template: "%s | Julay Group",
  },
  description:
    "Julay Group LLC delivers enterprise DevOps, cloud infrastructure, custom software, AI chatbots, and office management systems. US-registered, globally trusted.",
  keywords: [
    "DevOps",
    "CI/CD",
    "cloud infrastructure",
    "AWS",
    "software development",
    "AI chatbots",
    "office management systems",
    "enterprise software",
    "Julay Group LLC",
    "julay.org",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julaygroup.com",
    siteName: "Julay Group LLC",
    title: "Julay Group LLC — DevOps & Software Solutions",
    description:
      "Enterprise DevOps, cloud infrastructure, AI chatbots, and custom software. Built to scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julay Group LLC — DevOps & Software Solutions",
    description: "Enterprise DevOps, cloud infrastructure, AI chatbots, and custom software.",
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
