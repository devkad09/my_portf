import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Compass, GitBranch, Layers, Rocket } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Discovery & Scope",
    icon: Compass,
    subtitle: "Align on user needs & metrics",
    description:
      "Clarify project goals, target audience, performance constraints, and success metrics before writing code. We define the exact scope to eliminate ambiguity.",
    deliverable: "Product requirement specs, user flow diagrams, milestone timelines",
    tools: ["Figma", "Spec Docs", "Target Metrics"],
  },
  {
    step: "02",
    title: "System Architecture",
    icon: GitBranch,
    subtitle: "Contracts, components & a11y",
    description:
      "Define React component hierarchy, state management strategy, REST/GraphQL API contracts, and WCAG accessibility guidelines before implementation.",
    deliverable: "Schema definitions, component hierarchy, design token mapping",
    tools: ["TypeScript", "Zod", "API Specs"],
  },
  {
    step: "03",
    title: "Iterative Build",
    icon: Layers,
    subtitle: "Clean React 18 & TypeScript",
    description:
      "Rapid, modular frontend development using modern React 18, Tailwind CSS, and strict TypeScript. Transparent milestones with live staging previews.",
    deliverable: "Production component library, modular pages, live staging URLs",
    tools: ["React 18", "Tailwind CSS", "Vite / Next"],
  },
  {
    step: "04",
    title: "QA & A11y Audit",
    icon: ShieldCheck,
    subtitle: "axe DevTools & Web Vitals",
    description:
      "Rigorous automated and manual accessibility audits with axe DevTools, keyboard navigation tests, and Core Web Vitals optimization to guarantee sub-second loads.",
    deliverable: "100/100 Core Web Vitals score, WCAG 2.1 AA audit clearance",
    tools: ["axe DevTools", "Lighthouse", "Cross-Browser"],
  },
  {
    step: "05",
    title: "Deploy & Docs Handoff",
    icon: Rocket,
    subtitle: "Production launch & docs",
    description:
      "Production deployment to Vercel/cloud infrastructure, CDN optimization, and complete technical documentation handoff for long-term maintainability.",
    deliverable: "Live deployment, REST API references, MDX developer documentation",
    tools: ["Vercel", "GitHub Actions", "MDX Docs"],
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="process-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Engineering Process</span>
          </p>
          <h2 id="process-heading" className="section-heading">
            A reliable pipeline from <span className="text-emerald-600 dark:text-emerald-400">concept to cloud</span>
          </h2>
          <p className="section-copy mx-auto">
            Five structured stages ensuring transparency, zero surprises, and guaranteed technical quality at every step.
          </p>
        </div>

        {/* 5-Step Interactive Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "glass-card border-emerald-500/50 bg-surface shadow-2xl scale-[1.03] -translate-y-1"
                    : "glass-card border-line/60 bg-surface/60 hover:border-emerald-500/30"
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-line/60">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      PHASE {stage.step}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/30"
                          : "bg-surface-2 text-ink-muted"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5 space-y-2">
                    <h3 className="font-display font-bold text-lg text-ink">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {stage.subtitle}
                    </p>
                    <p className="text-xs text-ink-muted leading-relaxed pt-2">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Deliverable & Tooling */}
                <div className="mt-6 pt-4 border-t border-line/60 space-y-2">
                  <p className="text-[10px] font-mono uppercase font-bold text-ink-muted">
                    Key Deliverable:
                  </p>
                  <p className="text-xs font-semibold text-ink leading-snug">
                    {stage.deliverable}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {stage.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-ink-muted bg-surface-2 border border-line"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
