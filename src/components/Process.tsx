const STAGES = [
  {
    step: "01",
    title: "Discovery",
    description: "Clarify project goals, target users, performance constraints, and success metrics so we build the right solution first.",
  },
  {
    step: "02",
    title: "Architecture",
    description: "Component hierarchy, API contracts, accessibility requirements, and milestones before writing a single line of production code.",
  },
  {
    step: "03",
    title: "Development",
    description: "Iterative delivery with clean, reusable React 18 and TypeScript components. Transparent progress, zero black boxes.",
  },
  {
    step: "04",
    title: "QA & Docs",
    description: "Rigorous axe DevTools accessibility audits, Core Web Vitals optimization, and clear technical documentation for handoff.",
  },
  {
    step: "05",
    title: "Launch",
    description: "Production hardening, deployment on Vercel/cloud infrastructure, and post-launch partnership as usage grows.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-canvas" aria-labelledby="process-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">How I work</p>
          <h2 id="process-heading" className="section-heading">
            A calm path from idea to launch
          </h2>
          <p className="section-copy">
            Five clear stages. You always know where we are, and what comes next.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STAGES.map((stage) => (
            <li
              key={stage.step}
              className="rounded-[24px] border border-line bg-surface p-7 shadow-soft lg:p-6 xl:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="text-[13px] font-medium tracking-[0.12em] text-accent">
                  {stage.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink xl:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-muted">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
