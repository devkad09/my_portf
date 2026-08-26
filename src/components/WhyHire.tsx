import { CheckCircle2, Award, Layers, ShieldCheck, TrendingUp } from "lucide-react";

const REASONS = [
  {
    title: "Proven Track Record",
    badge: "20+ Guides & Specs Shipped",
    description: "Over 3 years of authoring high-impact developer documentation, API specifications, and component guides for engineering teams and SaaS products.",
    icon: Award,
  },
  {
    title: "Full-Stack & Systems Literacy",
    badge: "Formgrid Technical Specialist",
    description: "Deep understanding of modern web architectures (React, TypeScript, REST APIs, System Design) allowing for precise and accurate technical documentation.",
    icon: Layers,
  },
  {
    title: "Clarity & Accuracy First",
    badge: "100% Documentation Precision",
    description: "Rigorous standards for technical clarity, error-free code examples, interactive component specs, and developer onboarding materials.",
    icon: ShieldCheck,
  },
  {
    title: "Developer Impact & Adoption",
    badge: "40%+ Onboarding Speedup",
    description: "Documentation crafted to lower support overhead, accelerate developer adoption, and streamline product integration cycles.",
    icon: TrendingUp,
  },
];

const WhyHire = () => (
  <section id="why-hire" className="py-24 px-4 sm:px-6 relative border-y border-slate-800/60 bg-slate-950/40 backdrop-blur-md">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Why Work With Me
        </p>
        <h2 className="section-heading">
          Technical writing that drives <span className="grad-violet-cyan">developer adoption</span>
        </h2>
        <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
          I bridge the gap between complex software architecture and developer clarity with structured, intuitive documentation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {REASONS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/90 group"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Clear, accurate & developer-ready documentation guaranteed</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyHire;
