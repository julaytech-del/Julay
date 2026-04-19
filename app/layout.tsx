import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    url: "https://julay.org",
    siteName: "Julay Group LLC",
    title: "Julay Group LLC — DevOps & Software Solutions",
    description:
      "Enterprise DevOps, cloud infrastructure, AI chatbots, and custom software. Built to scale.",
    images: [
      {
        url: "https://julay.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julay Group LLC — DevOps & Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@julaygroup",
    title: "Julay Group LLC — DevOps & Software Solutions",
    description: "Enterprise DevOps, cloud infrastructure, AI chatbots, and custom software.",
    images: ["https://julay.org/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
  alternates: {
    canonical: "https://julay.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Julay Group LLC",
  "url": "https://julay.org",
  "logo": "https://julay.org/logo.png",
  "description": "Enterprise DevOps, cloud infrastructure, AI chatbots, and custom software. US-registered, globally trusted.",
  "foundingDate": "2023",
  "address": { "@type": "PostalAddress", "addressCountry": "US" },
  "sameAs": ["https://linkedin.com/company/julay-group"],
  "offers": [
    { "@type": "Offer", "name": "DevOps & CI/CD" },
    { "@type": "Offer", "name": "Cloud Infrastructure" },
    { "@type": "Offer", "name": "AI Chatbots" },
    { "@type": "Offer", "name": "Custom Software Development" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} min-h-screen bg-[#080808] text-white antialiased`}>
        {/* Elite AI Factory — visitor tracking */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_FACTORY_URL ?? "http://localhost:8080"}/track/julay-org`}
          alt=""
          width={1}
          height={1}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
