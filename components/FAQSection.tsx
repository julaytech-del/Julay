"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship in 4–12 weeks depending on scope. A DevOps setup usually takes 2–3 weeks. A full AI chatbot integration is 4–6 weeks. A custom enterprise platform is 8–16 weeks. We give you a precise timeline before signing anything.",
  },
  {
    q: "Will you take over our existing codebase?",
    a: "Yes. We do thorough code reviews, document what we find, and either extend or refactor based on what makes the most business sense. We won't rewrite everything unless the technical debt genuinely warrants it.",
  },
  {
    q: "How accurate is the AI you build?",
    a: "Our chatbots are trained on your own domain knowledge — docs, FAQs, workflows. Clients consistently see 80–95% resolution rates. We always build human escalation paths for edge cases.",
  },
  {
    q: "Do you work with non-technical teams?",
    a: "Absolutely. You get a single point of contact, plain-English updates, and live demos every week. You never need to understand Docker or AWS to stay fully in the loop.",
  },
  {
    q: "What happens after launch?",
    a: "We offer 30 days of post-launch support on every project. For ongoing work — monitoring, feature dev, scaling — we have monthly retainer options. You're never left holding a system you can't maintain.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 relative scroll-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Real questions.<br />Straight answers.</h2>
          <p className="text-zinc-400 text-lg">No vague agency speak.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-indigo-500/30 bg-indigo-500/[0.07]"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-indigo-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
