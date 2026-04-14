import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";

const projects = [
  {
    title: "julay.org",
    category: "AI Productivity Platform",
    description:
      "Our flagship AI-powered productivity platform — intelligent task automation, smart workflows, and real-time collaboration for modern teams.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Claude AI", "AWS"],
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
    badge: "Live Product",
    badgeVariant: "purple" as const,
    href: "https://julay.org",
  },
  {
    title: "ChatBot Suite",
    category: "AI / Enterprise",
    description:
      "Multi-channel AI chatbot platform for government agencies and enterprises — handling thousands of daily inquiries with 95%+ resolution rate.",
    stack: ["React", "Python", "FastAPI", "Claude AI", "Docker", "AWS"],
    gradient: "from-cyan-500/15 via-teal-500/8 to-transparent",
    badge: "AI Chatbots",
    badgeVariant: "cyan" as const,
    href: "/portfolio",
  },
  {
    title: "OfficePilot",
    category: "Office Management System",
    description:
      "Comprehensive office management platform — HR workflows, inventory tracking, scheduling, and executive dashboards in one unified system.",
    stack: ["React", "Node.js", "MongoDB", "Redis", "AWS EC2"],
    gradient: "from-emerald-500/15 via-green-500/8 to-transparent",
    badge: "Enterprise",
    badgeVariant: "green" as const,
    href: "/portfolio",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/[0.07] overflow-hidden hover:border-white/[0.14] transition-all duration-300 flex flex-col hover:scale-[1.02]`}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-white/[0.03] border-b border-white/5 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
                <div className="text-center z-10">
                  <div className="text-4xl font-black text-gradient opacity-30">
                    {project.title[0]}
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">{project.category}</div>
                </div>
                <ExternalLink
                  size={14}
                  className="absolute top-4 right-4 text-zinc-700 group-hover:text-zinc-400 transition-colors"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  <Badge variant={project.badgeVariant}>{project.badge}</Badge>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-zinc-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
