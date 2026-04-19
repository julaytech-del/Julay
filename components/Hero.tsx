import Link from "next/link";
import { ArrowRight, Play, Sparkles, Shield, Zap, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-indigo-600/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-[80px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8 fade-up" style={{ animationDelay: "0ms" }}>
          <Badge variant="purple" className="text-sm px-4 py-1.5">
            <Sparkles size={12} />
            DevOps &amp; Software Solutions — US Registered
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-5 fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="text-white">We Build</span>
          <br />
          <span className="text-gradient">Scalable Digital</span>
          <br />
          <span className="text-white">Products</span>
        </h1>

        {/* Clarifying sub-headline */}
        <p
          className="max-w-xl mx-auto text-base sm:text-lg font-medium text-white/70 mb-3 fade-up"
          style={{ animationDelay: "140ms" }}
        >
          DevOps pipelines · AI chatbots · Enterprise software — delivered end to end.
        </p>

        <p
          className="max-w-2xl mx-auto text-base text-zinc-500 leading-relaxed mb-10 fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Julay Group LLC automates your infrastructure, deploys intelligent AI chatbots,
          and builds enterprise systems engineered to scale from day one.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Play size={14} className="text-indigo-400" />
            See our work
          </Link>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-20 fade-up"
          style={{ animationDelay: "300ms" }}
        >
          {[
            { icon: Shield, label: "Enterprise-Grade Security" },
            { icon: Zap, label: "Automated CI/CD Pipelines" },
            { icon: Sparkles, label: "AI-Powered Chatbots" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-zinc-500 text-sm">
              <Icon size={14} className="text-indigo-400" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Stats — impactful */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 fade-up"
          style={{ animationDelay: "360ms" }}
        >
          {[
            { value: "50+", label: "Projects Delivered", sub: "across 3 continents" },
            { value: "99%", label: "Client Satisfaction", sub: "verified reviews" },
            { value: "10×", label: "Average ROI", sub: "first 6 months" },
            { value: "24/7", label: "Support & Uptime", sub: "SLA-backed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#080808] px-6 py-7 text-center group hover:bg-white/[0.03] transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-white/80 mb-0.5">{stat.label}</div>
              <div className="text-xs text-zinc-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
