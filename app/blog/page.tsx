import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — DevOps, Cloud & AI Insights",
  description:
    "Expert articles on DevOps, CI/CD, cloud infrastructure, AI automation, and software engineering from the Julay Group team.",
  openGraph: {
    title: "Julay Group Blog — DevOps & AI Insights",
    description: "Expert articles on DevOps, cloud infrastructure, and AI automation.",
    url: "https://julay.org/blog",
  },
};

const posts = [
  {
    slug: "devops-best-practices-2026",
    title: "DevOps Best Practices for Enterprise Teams in 2026",
    excerpt:
      "From CI/CD pipelines to GitOps workflows — the patterns that separate high-performing engineering teams from the rest.",
    date: "2026-04-10",
    readTime: "7 min",
    tag: "DevOps",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  },
  {
    slug: "ai-chatbots-customer-support",
    title: "How AI Chatbots Are Replacing Tier-1 Customer Support",
    excerpt:
      "Real data from deployments: response times dropped 80%, CSAT scores improved 34%. Here's how we built it.",
    date: "2026-03-28",
    readTime: "5 min",
    tag: "AI",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  },
  {
    slug: "aws-cost-optimization",
    title: "Cut Your AWS Bill by 40% Without Touching Your Architecture",
    excerpt:
      "Reserved instances, Savings Plans, and right-sizing — practical steps our team uses for every client engagement.",
    date: "2026-03-15",
    readTime: "6 min",
    tag: "Cloud",
    tagColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
  },
  {
    slug: "office-management-systems-roi",
    title: "The ROI of Custom Office Management Systems",
    excerpt:
      "Spreadsheets cost more than you think. We break down the real numbers behind digital transformation for SMBs.",
    date: "2026-03-01",
    readTime: "4 min",
    tag: "Software",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/30",
  },
  {
    slug: "kubernetes-production-checklist",
    title: "Kubernetes Production Checklist: 20 Things Before You Go Live",
    excerpt:
      "Resource limits, RBAC, network policies, health checks — the non-negotiables our SRE team runs through every time.",
    date: "2026-02-18",
    readTime: "9 min",
    tag: "DevOps",
    tagColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  },
  {
    slug: "building-internal-tools-fast",
    title: "Build Internal Tools 10x Faster with the Right Stack",
    excerpt:
      "Why most companies over-engineer internal tooling, and the lightweight approach that ships in days not months.",
    date: "2026-02-05",
    readTime: "5 min",
    tag: "Software",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/30",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold mb-4">
            Insights & Expertise
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Julay Group Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical articles on DevOps, cloud infrastructure, AI automation, and software engineering
            from our team of engineers.
          </p>
        </div>

        {/* Featured post */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-purple-500/40 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${posts[0].tagColor}`}>
              {posts[0].tag}
            </span>
            <span className="text-gray-500 text-sm">{posts[0].date} · {posts[0].readTime} read</span>
            <span className="ml-auto text-xs text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full">Featured</span>
          </div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
            {posts[0].title}
          </h2>
          <p className="text-gray-400 mb-5 leading-relaxed">{posts[0].excerpt}</p>
          <Link
            href={`/blog/${posts[0].slug}`}
            className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
          >
            Read article →
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-gray-500 text-xs">{post.date} · {post.readTime}</span>
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center rounded-2xl border border-purple-500/20 bg-purple-500/5 p-10">
          <h3 className="text-2xl font-bold mb-3">Ready to transform your infrastructure?</h3>
          <p className="text-gray-400 mb-6">Talk to our team about DevOps, cloud, or AI for your business.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold hover:from-purple-500 hover:to-purple-700 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
