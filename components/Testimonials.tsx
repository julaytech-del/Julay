import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, NexaPay",
    avatar: "SC",
    quote:
      "JULAY took our fragmented fintech concept and built it into a production-grade platform in under 4 months. The architecture is clean, the code is maintainable, and performance is exceptional.",
    stars: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder, FlowSync",
    avatar: "MW",
    quote:
      "What sets JULAY apart is their ability to understand business problems — not just technical specs. They pushed back on bad ideas and suggested smarter solutions. Real partners, not just contractors.",
    stars: 5,
  },
  {
    name: "Aisha Patel",
    role: "VP Engineering, HealthTrack",
    avatar: "AP",
    quote:
      "The AI integration work JULAY delivered was beyond our expectations. Complex ML pipelines made production-ready with zero downtime and full monitoring. I'd use them again without question.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-7 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
