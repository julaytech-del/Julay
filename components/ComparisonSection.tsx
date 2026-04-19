import { Check, X } from "lucide-react";

const rows = [
  { label: "Automated CI/CD pipelines",          julay: true,  others: false },
  { label: "AI chatbot development in-house",     julay: true,  others: false },
  { label: "End-to-end ownership (no handoffs)",  julay: true,  others: false },
  { label: "24/7 uptime SLA",                     julay: true,  others: false },
  { label: "AWS-native architecture",             julay: true,  others: "Sometimes" },
  { label: "Dedicated engineer access",           julay: true,  others: false },
  { label: "Security-first by default",           julay: true,  others: "Add-on" },
  { label: "Fixed-scope, on-time delivery",       julay: true,  others: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
          <Check size={14} className="text-indigo-400" strokeWidth={2.5} />
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.07] flex items-center justify-center">
          <X size={14} className="text-zinc-600" />
        </div>
      </div>
    );
  return <span className="text-xs text-zinc-500 block text-center">{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section className="py-24 relative scroll-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Why Julay Group
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Others help you manage work.
            <br />
            <span className="text-gradient">We do it for you.</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-lg">
            See why engineering teams choose Julay Group over fragmented agencies.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] overflow-hidden">
          {/* Column headers */}
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.08]">
            <div className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              Capability
            </div>
            <div className="px-4 py-4 text-center">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Typical Agency
              </span>
            </div>
            <div className="px-4 py-4 text-center relative">
              {/* Glow highlight on Julay column header */}
              <div className="absolute inset-0 bg-indigo-500/8 border-x border-indigo-500/20" />
              <span className="relative text-sm font-bold text-indigo-300">⚡ Julay Group</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-white/[0.05] last:border-0 transition-colors hover:bg-white/[0.02] ${
                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
              }`}
            >
              <div className="px-6 py-4 text-sm text-zinc-300 flex items-center">{row.label}</div>
              <div className="px-4 py-4 flex items-center justify-center">
                <Cell value={row.others} />
              </div>
              <div className="px-4 py-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-indigo-500/5 border-x border-indigo-500/10" />
                <span className="relative">
                  <Cell value={row.julay} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
