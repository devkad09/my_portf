const SERVICES_DATA = [
  {
    title: "Frontend & Product Engineering",
    description:
      "For founders and teams who need a developer who can build responsive, accessible, sub-second web applications in React 18 & TypeScript, with clean component architecture and complete pixel-perfection.",
    highlights: [
      "Custom React & TypeScript architectures",
      "Tailwind CSS design systems & component libraries",
      "Sub-second load times via code splitting & optimization",
      "WCAG 2.1 AA compliant & tested with axe DevTools",
    ],
  },
  {
    title: "Technical Writing & Documentation Systems",
    description:
      "For developer tools, SaaS products, and APIs that need software built with clarity: REST API references, headless endpoint guides, design system documentation, and onboarding portals that drive user adoption.",
    highlights: [
      "REST API references & endpoint specifications",
      "Developer onboarding portals & workflow guides",
      "Reusable UI component documentation & storybooks",
      "Markdown/MDX documentation pipelines & recipes",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-canvas" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">Services</p>
          <h2 id="services-heading" className="section-heading">
            How I can help
          </h2>
          <p className="section-copy">
            Two ways to work together, described in business outcomes, not a laundry list of frameworks.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.title}
              className="rounded-[24px] border border-line bg-surface p-8 sm:p-10 shadow-soft flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-[1.65] text-ink-muted">
                  {service.description}
                </p>
              </div>

              <ul className="mt-8 space-y-2.5 border-t border-line/60 pt-6">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
