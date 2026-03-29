import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-transparent border border-indigo-500/20 overflow-hidden px-8 py-16 text-center">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                <Zap size={24} className="text-white" strokeWidth={2.5} />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Ready to Build
              <br />
              <span className="text-gradient">Something Great?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Let's turn your idea into a product that competes at the highest level. No fluff — just execution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-xl hover:shadow-indigo-500/30 w-full sm:w-auto justify-center"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
