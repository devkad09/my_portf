import { Code2, BookOpen, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Frontend & Product Engineering",
    subtitle: "Modern React 18 & TypeScript Systems",
    icon: Code2,
    badge: "Sub-Second Delivery",
    accent: "indigo",
    description:
      "For founders, startups, and engineering teams that need a developer who builds high-performance, accessible web applications with clean component architecture and complete visual perfection.",
    highlights: [
      "Custom React 18 & TypeScript web application architecture",
      "Tailwind CSS design systems, tokens, and reusable component libraries",
      "Sub-second load times via code splitting, asset optimization, and zero CLS",
      "100% WCAG 2.1 AA accessible and tested with axe DevTools",
      "Client-side routing, state management, and real-time database integrations",
    ],
    idealFor: "Startups, SaaS teams, E-Commerce brands requiring zero-lag interfaces.",
  },
  {
    title: "Technical Writing & Docs Architecture",
    subtitle: "Developer Portals & API References",
    icon: BookOpen,
    badge: "Formgrid.dev Standard",
    accent: "violet",
    description:
      "For developer tools, APIs, and SaaS products that need software built with absolute clarity: REST API endpoint references, MDX documentation pipelines, and onboarding guides that accelerate developer adoption.",
    highlights: [
      "REST API references & OpenAPI / curl / fetch endpoint specifications",
      "Developer onboarding portals, workflow guides, and interactive sandboxes",
      "Reusable UI component documentation & interactive Storybooks",
      "Markdown/MDX documentation pipelines & recipes for rapid handoff",
      "AI Lead Pipeline documentation and automated stage workflows",
    ],
    idealFor: "DevTools, APIs, SaaS platforms needing documentation developers actually love.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Value & Offerings</span>
          </p>
          <h2 id="services-heading" className="section-heading">
            How we can <span className="text-indigo-600 dark:text-indigo-400">collaborate</span>
          </h2>
          <p className="section-copy mx-auto">
            Focused on concrete business outcomes: fast software delivery and documentation systems that drive developer adoption.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-3xl glass-card p-8 sm:p-10 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Service Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-line/60">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-surface-2 border border-line text-indigo-600 dark:text-indigo-400">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-[26px] font-bold text-ink tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1 font-semibold">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono uppercase font-bold text-ink tracking-wider">
                      Key Deliverables & Standards:
                    </p>
                    <ul className="space-y-2.5">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Target Audience & CTA */}
                <div className="mt-8 pt-6 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-mono text-ink-muted">Ideal For:</p>
                    <p className="text-xs font-semibold text-ink">{service.idealFor}</p>
                  </div>

                  <a
                    href="#work-with-me"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-violet-500 transition-colors shrink-0"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
