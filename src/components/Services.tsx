import { Code, Smartphone, Globe, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Responsive Websites",
    desc: "High-performance websites built mobile-first with polished UI, smooth micro-interactions, and blazing Core Web Vitals scores.",
    icon: Smartphone,
    accent: "cyan",
    number: "01",
  },
  {
    title: "React Applications",
    desc: "Scalable single-page apps architected with modern patterns, clean state management, and buttery-smooth animations.",
    icon: Code,
    accent: "violet",
    number: "02",
  },
  {
    title: "Design Systems",
    desc: "Reusable UI component libraries designed for consistency, accessibility, and long-term maintainability at scale.",
    icon: Palette,
    accent: "emerald",
    number: "03",
  },
  {
    title: "Frontend Engineering",
    desc: "Performance-first engineering, thorough testing, and polished interactions for modern production-grade applications.",
    icon: Globe,
    accent: "amber",
    number: "04",
  },
];

const accentMap: Record<string, { gradient: string; border: string; bg: string; text: string; glow: string }> = {
  violet: {
    gradient: "from-violet-500 to-purple-600",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    text: "text-violet-300",
    glow: "rgba(139,92,246,0.25)",
  },
  cyan: {
    gradient: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    glow: "rgba(6,182,212,0.2)",
  },
  emerald: {
    gradient: "from-emerald-400 to-teal-500",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    glow: "rgba(16,185,129,0.2)",
  },
  amber: {
    gradient: "from-amber-400 to-orange-500",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    glow: "rgba(245,158,11,0.2)",
  },
};

const Services = () => (
  <section id="services" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
    <div className="glow-cyan w-[400px] h-[400px] right-0 -bottom-20 opacity-15 absolute pointer-events-none" />

    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 text-center reveal">
        <p className="section-eyebrow justify-center mb-4">
          <span className="w-5 h-px bg-violet-400 rounded-full" />
          What I build
          <span className="w-5 h-px bg-violet-400 rounded-full" />
        </p>
        <h2 className="section-heading">
          Digital products that{" "}
          <span className="grad-violet-cyan">delight users</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl mt-4">
          Beautiful, fast, and user-friendly solutions for agencies, founders, and product teams who want to make a real impact.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 gap-5 reveal">
        {services.map((service) => {
          const a = accentMap[service.accent];
          return (
            <div
              key={service.title}
              className="group glass card-border rounded-2xl p-7 relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{ "--hover-glow": a.glow } as React.CSSProperties}
            >
              {/* Background glow on hover */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br ${a.gradient}`}
              />

              <div className="relative z-10">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-heading font-bold text-3xl ${a.text} opacity-30`}>{service.number}</span>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title & desc */}
                <h4 className="font-heading font-bold text-lg text-white mb-3">{service.title}</h4>
                <p className="section-copy text-sm leading-relaxed">{service.desc}</p>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-white/05 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4]">Full-stack frontend</span>
                  <a href="#contact" className={`flex items-center gap-1.5 text-[11px] font-semibold ${a.text} opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-2`}>
                    Get started <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
