import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore JULAY's portfolio — real products built with precision and purpose.",
};

const projects = [
  {
    title: "NexaPay",
    category: "SaaS / FinTech",
    description:
      "A multi-tenant payment processing platform handling $2M+ in monthly transactions. Features include real-time fraud detection, multi-currency support, webhook management, and a white-label API for partners.",
    impact: "$2M+ monthly volume",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    badge: "SaaS Platform",
    badgeVariant: "purple" as const,
    gradient: "from-indigo-500/20 via-violet-500/8 to-transparent",
    border: "border-indigo-500/20",
    size: "large",
  },
  {
    title: "FlowSync",
    category: "Enterprise / Automation",
    description:
      "Workflow automation suite integrating 40+ enterprise tools. Reduced operational overhead by 70% for mid-size businesses through visual workflow builders, conditional logic, and real-time monitoring.",
    impact: "70% ops reduction",
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Kafka"],
    badge: "Enterprise",
    badgeVariant: "cyan" as const,
    gradient: "from-cyan-500/15 via-teal-500/6 to-transparent",
    border: "border-cyan-500/20",
    size: "large",
  },
  {
    title: "HealthTrack AI",
    category: "AI / Mobile",
    description:
      "AI-powered health monitoring app with wearable device sync, personalized health insights, predictive scoring, and physician dashboard for remote patient monitoring.",
    impact: "50K+ active users",
    stack: ["React Native", "Python", "TensorFlow", "Firebase", "FastAPI"],
    badge: "AI + Mobile",
    badgeVariant: "green" as const,
    gradient: "from-emerald-500/15 via-green-500/6 to-transparent",
    border: "border-emerald-500/20",
    size: "standard",
  },
  {
    title: "CommandDesk",
    category: "Desktop / Enterprise",
    description:
      "Enterprise desktop application for network operations teams. Real-time network topology visualization, alert management, and automated incident response across multi-cloud environments.",
    impact: "30% faster incident resolution",
    stack: ["Electron", "React", "Rust", "WebSocket", "SQLite"],
    badge: "Desktop",
    badgeVariant: "default" as const,
    gradient: "from-amber-500/12 via-orange-500/5 to-transparent",
    border: "border-amber-500/20",
    size: "standard",
  },
  {
    title: "Vaultr",
    category: "SaaS / Developer Tools",
    description:
      "Secrets management SaaS for development teams. Version-controlled secrets, environment scoping, audit logs, and CI/CD integrations with GitHub Actions, GitLab, and Bitbucket.",
    impact: "500+ teams onboarded",
    stack: ["Next.js", "Go", "PostgreSQL", "Vault", "AWS KMS"],
    badge: "Developer Tools",
    badgeVariant: "purple" as const,
    gradient: "from-violet-500/12 via-purple-500/5 to-transparent",
    border: "border-violet-500/20",
    size: "standard",
  },
  {
    title: "Lingo AI",
    category: "AI / Web App",
    description:
      "Language learning platform powered by LLMs. Conversational AI tutors, adaptive learning paths, pronunciation scoring, and progress analytics for enterprise language training programs.",
    impact: "3x learning efficiency",
    stack: ["Next.js", "Python", "OpenAI", "LangChain", "Pinecone", "PostgreSQL"],
    badge: "AI Platform",
    badgeVariant: "green" as const,
    gradient: "from-pink-500/12 via-rose-500/5 to-transparent",
    border: "border-pink-500/20",
    size: "standard",
  },
];

export default function PortfolioPage() {
  const large = projects.filter((p) => p.size === "large");
  const standard = projects.filter((p) => p.size === "standard");

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Products We're
            <br />
            <span className="text-gradient">Proud to Have Built</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real products. Real impact. From early-stage MVPs to enterprise-grade platforms — each built to solve a genuine problem at scale.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large featured */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {large.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
          {/* Standard grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standard.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-zinc-400 mb-8">
            We're always taking on new partners. Let's talk about what you're building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-xl hover:shadow-indigo-500/30"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`group rounded-3xl bg-gradient-to-br ${project.gradient} border ${project.border} overflow-hidden hover:border-opacity-50 transition-all duration-300 flex flex-col`}
    >
      {/* Image placeholder */}
      <div
        className={`${featured ? "h-56" : "h-40"} bg-white/[0.02] border-b border-white/5 flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
        <div className="text-center z-10 px-4">
          <div
            className={`font-black text-gradient opacity-20 mb-1 ${featured ? "text-7xl" : "text-5xl"}`}
          >
            {project.title[0]}
          </div>
          <div className="text-xs text-zinc-700">{project.category}</div>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge variant={project.badgeVariant}>{project.badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`text-white font-bold ${featured ? "text-2xl" : "text-lg"}`}>
            {project.title}
          </h3>
          {!featured && (
            <Badge variant={project.badgeVariant} className="shrink-0 text-xs">
              {project.badge}
            </Badge>
          )}
        </div>

        {featured && (
          <div className="text-xs font-semibold text-emerald-400 mb-2">{project.impact}</div>
        )}

        <p
          className={`text-zinc-400 leading-relaxed flex-1 mb-4 ${featured ? "text-sm" : "text-xs"}`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, featured ? 99 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-white/5 border border-white/8 text-zinc-400 text-xs"
            >
              {tech}
            </span>
          ))}
          {!featured && project.stack.length > 3 && (
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/8 text-zinc-600 text-xs">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
