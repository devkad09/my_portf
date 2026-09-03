import { CheckCircle2, Award, Layers, ShieldCheck, TrendingUp } from "lucide-react";

const REASONS = [
  {
    title: "Proven Track Record & SaaS Shipped",
    badge: "9+ Projects · 3 Production SaaS",
    description: "Over 2 years of building and shipping responsive React applications, SaaS analytics dashboards, and end-to-end documentation systems.",
    icon: Award,
  },
  {
    title: "Formgrid.dev & Component Systems",
    badge: "Formgrid.dev Technical Writer",
    description: "Building reusable component libraries, REST API specifications, and developer workflows with a focus on maintainability and technical clarity.",
    icon: Layers,
  },
  {
    title: "WCAG 2.1 AA Accessibility & Quality",
    badge: "Axe DevTools Tested",
    description: "Rigorous standards for accessible web interfaces, clean semantic structure, keyboard navigation, and high-precision technical documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Performance & Sub-Second Loading",
    badge: "Optimized Core Web Vitals",
    description: "Delivering responsive interfaces across screen sizes from mobile to 4K, achieving sub-second load times via code splitting and lazy loading.",
    icon: TrendingUp,
  },
];

const WhyHire = () => (
  <section id="why-hire" className="py-24 px-4 sm:px-6 relative border-y border-line/60 bg-surface-2/40">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Why Work With Me
        </p>
        <h2 className="section-heading">
          Engineering & documentation that drives <span className="text-slate-500 dark:text-slate-300">real results</span>
        </h2>
        <p className="section-copy mx-auto max-w-2xl text-base sm:text-lg">
          Combining modern frontend engineering with rigorous technical documentation and accessible design systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {REASONS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bento-card"
            >
              <div className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-ink group-hover:scale-110 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-ink border border-white/15">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-ink group-hover:text-slate-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line/60 flex items-center gap-2 text-xs font-semibold text-ink">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
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
