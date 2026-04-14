"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, ArrowRight, Clock, Globe } from "lucide-react";

const services = [
  "DevOps & CI/CD",
  "Cloud Infrastructure (AWS)",
  "Custom Software Development",
  "AI Chatbot",
  "Office Management System",
  "System Integration",
  "Not sure yet",
];

const budgets = [
  "Under $10k",
  "$10k – $30k",
  "$30k – $75k",
  "$75k – $150k",
  "$150k+",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("sent");
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Let's Build
            <br />
            <span className="text-gradient">Something Great</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with honest feedback and a clear path forward.
          </p>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Info cards */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <Mail size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-zinc-500 text-sm mb-2">
                  For project inquiries and partnerships
                </p>
                <a
                  href="mailto:hello@julaygroup.com"
                  className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                >
                  hello@julaygroup.com
                </a>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Clock size={18} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Response Time</h3>
                <p className="text-zinc-500 text-sm">
                  We respond to all inquiries within{" "}
                  <span className="text-zinc-300 font-medium">24 hours</span> on business days.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Globe size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">Remote-First</h3>
                <p className="text-zinc-500 text-sm">
                  We work with clients globally. Async-first with regular video syncs in your timezone.
                </p>
              </div>

              {/* Process */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6">
                <h3 className="text-white font-semibold mb-4">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", label: "You submit the form" },
                    { step: "02", label: "We review your project details" },
                    { step: "03", label: "We schedule a discovery call" },
                    { step: "04", label: "We send a scoped proposal" },
                  ].map(({ step, label }) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-indigo-400 w-6 shrink-0">{step}</span>
                      <ArrowRight size={12} className="text-zinc-700 shrink-0" />
                      <span className="text-zinc-400 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white/[0.03] border border-white/[0.07] p-8 lg:p-10">
                {status === "sent" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                      <CheckCircle2 size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-zinc-400 text-sm max-w-sm">
                      Thanks for reaching out. We'll review your project and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                        <MessageSquare size={15} className="text-indigo-400" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">Tell Us About Your Project</h2>
                        <p className="text-zinc-500 text-xs">All fields marked * are required</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all appearance-none"
                        >
                          <option value="" className="bg-[#1a1a1a]">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#1a1a1a]">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all appearance-none"
                        >
                          <option value="" className="bg-[#1a1a1a]">Select range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-[#1a1a1a]">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <p className="text-zinc-600 text-xs text-center">
                      By submitting, you agree to our Privacy Policy. We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
