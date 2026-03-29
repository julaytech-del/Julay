import type { Metadata } from "next";
import { ArrowRight, Target, Eye, Heart, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about JULAY — our mission, values, and the team behind the software.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We sweat the details — from variable naming to system architecture. Quality is non-negotiable at every level.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "We move fast without breaking things. Proper architecture enables speed; shortcuts create debt that slows you down later.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. You see the work, understand the decisions, and stay in control of your product at all times.",
  },
  {
    icon: Heart,
    title: "Ownership",
    description:
      "We treat your product as if it were ours. We think about your users, your business model, and your long-term success.",
  },
];

const team = [
  {
    name: "Alex Mercer",
    role: "Co-Founder & CTO",
    initials: "AM",
    bio: "10+ years in distributed systems and full-stack engineering. Former staff engineer at a top-5 fintech unicorn.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "Jordan Lee",
    role: "Co-Founder & Design Lead",
    initials: "JL",
    bio: "Product designer and frontend engineer with deep expertise in design systems and conversion-focused UX.",
    gradient: "from-violet-500 to-pink-600",
  },
  {
    name: "Priya Nair",
    role: "Lead AI Engineer",
    initials: "PN",
    bio: "ML researcher turned product engineer. Specializes in LLM integration, RAG architectures, and AI-powered automation.",
    gradient: "from-cyan-500 to-indigo-600",
  },
  {
    name: "David Santos",
    role: "Backend Architect",
    initials: "DS",
    bio: "Distributed systems specialist with a track record of building platforms that handle millions of requests per day.",
    gradient: "from-emerald-500 to-cyan-600",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              About JULAY
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              We Engineer
              <br />
              <span className="text-gradient">Software That Matters</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              JULAY was founded on one belief: great software is a strategic advantage. We exist to give ambitious companies access to engineering talent and execution quality that used to be reserved for well-funded startups with large in-house teams.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  We're a small, senior team of engineers and designers who've shipped products across fintech, healthtech, enterprise software, and consumer apps. We've seen what separates products that thrive from those that stagnate — and it almost always comes down to the quality of the foundation.
                </p>
                <p>
                  JULAY exists to build that foundation correctly. We're not a staffing agency, a code factory, or an offshore team hunting for hourly work. We're technical partners who take ownership of outcomes — not just deliverables.
                </p>
                <p>
                  Every engagement starts with understanding your business, your users, and your constraints. From there, we architect systems that can actually grow with you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Products Shipped" },
                { value: "5+", label: "Years of Excellence" },
                { value: "12", label: "Industries Served" },
                { value: "100%", label: "Client Retention" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 text-center hover:bg-white/[0.06] transition-colors"
                >
                  <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-zinc-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-500/15 via-indigo-500/5 to-transparent border border-indigo-500/20 p-8 lg:p-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                <Target size={22} className="text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                To empower businesses with software that creates sustainable competitive advantages — engineered with the same rigor and care that drives the world's best tech companies, but at a scale accessible to every ambitious team.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent border border-violet-500/20 p-8 lg:p-10">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
                <Eye size={22} className="text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                A world where every company — regardless of size or funding — has access to world-class software that truly serves its users. We believe the best technology should amplify human capability, not complicate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-4xl font-bold text-white">How We Operate</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">Senior Engineers, All the Way</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              No juniors, no account managers, no overhead. You work directly with the engineers building your product.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 hover:bg-white/[0.05] transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-lg font-bold text-white mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="text-white font-semibold mb-0.5">{member.name}</h3>
                <p className="text-indigo-400 text-xs font-medium mb-3">{member.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                Why We're Different
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                We Measure Success by Your Outcomes
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Most agencies optimize for billable hours. We optimize for your results. Our business grows when your product succeeds — so every decision we make is oriented around real, measurable outcomes: users retained, revenue generated, operations streamlined.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                That alignment changes how we work. We challenge requirements that won't serve users. We push for simpler solutions when complexity isn't warranted. We bring business context into every technical decision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
              >
                Work With Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
