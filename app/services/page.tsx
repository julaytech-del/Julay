import type { Metadata } from "next";
import {
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Brain,
  Settings2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore JULAY's full range of software development services — web, mobile, desktop, SaaS, AI, and enterprise integrations.",
};

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "Full-stack web applications built to scale",
    description:
      "We architect and build modern web applications using React, Next.js, and robust backend systems. Whether it's a customer-facing product or an internal tool, we engineer for performance, SEO, and long-term maintainability.",
    benefits: [
      "Server-side rendering and static generation for optimal performance",
      "RESTful & GraphQL APIs built for high throughput",
      "Component-driven architecture for easy iteration",
      "Auth, payments, and real-time features out of the box",
    ],
    useCases: [
      "B2B SaaS dashboards and admin panels",
      "E-commerce platforms with custom checkout flows",
      "Marketing websites with CMS integration",
      "Real-time collaboration tools",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    color: "indigo",
    gradient: "from-indigo-500/15 to-transparent",
    border: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    tagline: "Native and cross-platform mobile experiences",
    description:
      "We build iOS and Android applications with polished UX, offline support, and deep device integration. From simple utilities to complex consumer apps, we ship products users actually enjoy using.",
    benefits: [
      "Native performance with React Native or Flutter",
      "Push notifications, biometrics, and device APIs",
      "Offline-first architecture with smart sync",
      "App Store and Play Store submission support",
    ],
    useCases: [
      "Consumer apps with social features",
      "On-demand service platforms",
      "Health and fitness tracking apps",
      "Field service mobile tools",
    ],
    stack: ["React Native", "Flutter", "Expo", "Firebase", "GraphQL"],
    color: "violet",
    gradient: "from-violet-500/15 to-transparent",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop Software",
    tagline: "High-performance applications for professionals",
    description:
      "We develop powerful desktop software for Windows, macOS, and Linux — from productivity tools to data-intensive engineering applications. Built with native feel and cross-platform consistency.",
    benefits: [
      "Cross-platform deployment from a single codebase",
      "Native OS integrations and system tray support",
      "Efficient local data processing and storage",
      "Auto-update and distribution pipelines",
    ],
    useCases: [
      "Developer tools and IDEs",
      "Media processing and creative software",
      "Enterprise data management tools",
      "Hardware interface and control panels",
    ],
    stack: ["Electron", "Tauri", "Rust", "React", "SQLite"],
    color: "cyan",
    gradient: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Platforms",
    tagline: "Complete SaaS products from zero to launch",
    description:
      "We build full SaaS products end-to-end — multi-tenancy, subscription billing, role-based access control, onboarding flows, and dashboards. Designed to grow from 10 to 100,000 users.",
    benefits: [
      "Multi-tenant architecture with data isolation",
      "Stripe-powered billing and subscription management",
      "User management, teams, and RBAC",
      "Analytics, usage tracking, and feature flags",
    ],
    useCases: [
      "Project management and collaboration tools",
      "CRM and sales automation platforms",
      "Developer tools and API products",
      "Industry-specific vertical SaaS",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    color: "emerald",
    gradient: "from-emerald-500/15 to-transparent",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions",
    tagline: "Intelligent systems that learn and adapt",
    description:
      "We integrate AI into your products and workflows — from LLM-powered interfaces to custom ML models. We go beyond demos to build production-grade AI systems with proper monitoring, fallbacks, and cost controls.",
    benefits: [
      "LLM integration with OpenAI, Anthropic, and open models",
      "Custom ML model training and deployment",
      "RAG pipelines and semantic search",
      "AI-powered automation and workflow orchestration",
    ],
    useCases: [
      "Intelligent document processing and extraction",
      "AI copilots embedded in existing products",
      "Predictive analytics and recommendation engines",
      "Automated customer support systems",
    ],
    stack: ["Python", "LangChain", "OpenAI", "Anthropic", "FastAPI", "Pinecone"],
    color: "pink",
    gradient: "from-pink-500/15 to-transparent",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    id: "integration",
    icon: Settings2,
    title: "System Integration",
    tagline: "Connect your tools into a single unified system",
    description:
      "We design and build integration layers that unify your tech stack — APIs, databases, third-party platforms, and legacy systems. Eliminate data silos and manual workflows with robust automation architecture.",
    benefits: [
      "Event-driven architecture with message queues",
      "ETL pipelines and data synchronization",
      "Webhook management and API orchestration",
      "Real-time data flows with monitoring",
    ],
    useCases: [
      "ERP and CRM data synchronization",
      "E-commerce platform integrations",
      "Payment and banking gateway connections",
      "Legacy system modernization",
    ],
    stack: ["Node.js", "Python", "Kafka", "RabbitMQ", "REST", "GraphQL"],
    color: "amber",
    gradient: "from-amber-500/15 to-transparent",
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Everything You Need
            <br />
            <span className="text-gradient">To Ship Great Software</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Full-spectrum software development — from concept to code to production. We handle the complexity so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`rounded-3xl bg-gradient-to-br ${service.gradient} border ${service.border} overflow-hidden`}
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left */}
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${service.iconBg} border flex items-center justify-center mb-5`}
                      >
                        <Icon size={22} className={service.iconColor} />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-zinc-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={`text-xs font-semibold ${service.iconColor} uppercase tracking-widest`}>
                          {service.tagline}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-zinc-400 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2.5">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-zinc-400 text-sm">
                              <CheckCircle2
                                size={14}
                                className={`${service.iconColor} mt-0.5 shrink-0`}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">
                          Use Cases
                        </h3>
                        <ul className="space-y-2.5">
                          {service.useCases.map((uc) => (
                            <li
                              key={uc}
                              className="flex items-start gap-2 text-zinc-400 text-sm"
                            >
                              <span className={`${service.iconColor} mt-1.5 shrink-0`}>
                                ·
                              </span>
                              {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-zinc-400 mb-8">
            Book a free discovery call. We'll assess your needs and recommend the right approach — no strings attached.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-xl hover:shadow-indigo-500/30"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
