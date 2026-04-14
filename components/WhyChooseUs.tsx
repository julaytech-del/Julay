import { CheckCircle2, Code2, Layers, TrendingUp, Users, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Every codebase we write is modular, testable, and maintainable — built to outlast trends and scale with your team.",
  },
  {
    icon: TrendingUp,
    title: "Performance First",
    description:
      "We obsess over speed and efficiency. Sub-second loads, optimized queries, and infrastructure that handles traffic spikes without breaking.",
  },
  {
    icon: Layers,
    title: "Full-Stack Mastery",
    description:
      "From database design to pixel-perfect UI, we own the entire product — no coordination gaps, no hand-off overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Security Built-In",
    description:
      "Security isn't an afterthought. We implement OWASP best practices, proper auth flows, and encrypted data pipelines from day one.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description:
      "You'll always know where things stand. Weekly demos, async updates, and direct engineer access — no black boxes.",
  },
  {
    icon: CheckCircle2,
    title: "Delivery You Can Count On",
    description:
      "We ship on schedule. Scope is managed proactively, blockers resolved fast, and quality never compromised for deadlines.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              Why Julay Group
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Built Different.
              <br />
              <span className="text-gradient">Delivered Better.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We don't just deploy code — we build DevOps cultures, automate operations, and ship AI-powered systems that become your competitive edge.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "US-registered LLC — Julay Group LLC, United States",
                "End-to-end DevOps: from code to cloud in one pipeline",
                "AI chatbots trained for your specific domain and workflows",
                "Deep expertise in AWS, Docker, Kubernetes, and modern stacks",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-zinc-300 text-sm">
                  <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
