import Link from "next/link";
import {
  GitBranch,
  Cloud,
  Code2,
  MessageSquare,
  LayoutDashboard,
  Settings2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Automated deployment pipelines, infrastructure as code, containerization with Docker & Kubernetes on AWS.",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    href: "/services#devops",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS architecture design, auto-scaling, high availability, cost optimization, and 24/7 monitoring.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    href: "/services#cloud",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Full-stack enterprise applications, SaaS platforms, and web apps built with React, Next.js, and Node.js.",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    href: "/services#software",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Intelligent chatbot systems for government agencies, enterprises, and service organizations — powered by LLMs.",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
    href: "/services#chatbots",
  },
  {
    icon: LayoutDashboard,
    title: "Office Management Systems",
    description:
      "End-to-end digital workplace platforms: HR, inventory, scheduling, reporting, and workflow automation.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    href: "/services#oms",
  },
  {
    icon: Settings2,
    title: "System Integration",
    description:
      "Seamlessly connect APIs, legacy systems, databases, and third-party platforms into unified ecosystems.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
    href: "/services#integration",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Julay Group Builds
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            From DevOps pipelines to AI chatbots — we cover every layer of modern enterprise technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} p-6 hover:scale-[1.02] transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-white/5 border ${service.border} flex items-center justify-center mb-4`}
                >
                  <Icon size={18} className={service.iconColor} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-zinc-500 group-hover:text-white transition-colors">
                  Learn more
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Explore all services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
