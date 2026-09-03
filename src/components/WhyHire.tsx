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
  <section id="why-hire" className="py-24 px-4 sm:px-6 relative border-y border-slate-200 bg-slate-100/60 dark:border-slate-800/60 dark:bg-slate-950/40">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          Why Work With Me
        </p>
        <h2 className="section-heading">
          Engineering & documentation that drives <span className="text-blue-600 dark:text-blue-400">real results</span>
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
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-all shadow-sm dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/50">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
