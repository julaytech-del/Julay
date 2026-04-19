const problems = [
  {
    emoji: "⏳",
    headline: "Deployments take days",
    body: "Manual releases, broken pipelines, rollback nightmares — your team ships slow and burns out fixing production at 2am.",
  },
  {
    emoji: "🧩",
    headline: "Five vendors, zero ownership",
    body: "Your dev agency, your cloud consultant, your AI vendor — none of them talk to each other. You're the coordinator.",
  },
  {
    emoji: "📉",
    headline: "Technical debt compounds",
    body: "Quick fixes stack up. The codebase no one dares touch. New features take 3× longer than they should.",
  },
  {
    emoji: "🤖",
    headline: "AI stays a slide deck",
    body: "Every quarter there's a 'let's add AI' meeting. Nothing ships. The opportunity window closes while you're still planning.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden scroll-section">
      {/* subtle red-tinted glow — toned down */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-rose-600/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-rose-400/70 uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Sound familiar?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Most engineering teams are losing time, money, and momentum to the same four problems.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.headline}
              className="relative rounded-2xl border border-rose-500/10 bg-rose-500/[0.04] p-6 hover:border-rose-500/20 hover:bg-rose-500/[0.07] transition-all duration-300 group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-rose-200 transition-colors">
                {p.headline}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Bridge line */}
        <div className="mt-14 text-center">
          <p className="text-zinc-300 text-xl font-semibold">
            That&apos;s exactly why we built Julay Group.
          </p>
          <div className="mt-4 w-px h-12 bg-gradient-to-b from-indigo-500/60 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
