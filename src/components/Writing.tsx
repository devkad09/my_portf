import { ArrowUpRight } from "lucide-react";

interface Article {
  title: string;
  tag: string;
  readTime: string;
  date: string;
  description: string;
  url: string;
}

const ARTICLES: Article[] = [
  {
    title: "Building Headless Form Endpoints That Scale: Lessons from Formgrid.dev",
    tag: "api-design",
    readTime: "6 min read",
    date: "Aug 2026",
    description:
      "How to design headless form backend endpoints (/api/f/:id) that prevent spam, handle CORS seamlessly, and process JSON and standard HTML form posts with zero client configuration.",
    url: "https://formgrid.dev",
  },
  {
    title: "Achieving 100/100 Core Web Vitals in Modern React & TypeScript SPAs",
    tag: "performance",
    readTime: "8 min read",
    date: "Aug 2026",
    description:
      "Practical strategies for code splitting, route prefetching, asset compression, and eliminating hydration layout shifts in production React applications.",
    url: "https://nordhem-blue.vercel.app",
  },
  {
    title: "WCAG 2.1 AA Compliance with axe DevTools: Beyond Basic Semantic HTML",
    tag: "accessibility",
    readTime: "7 min read",
    date: "Jul 2026",
    description:
      "A systematic approach to testing interactive modals, custom form controls, and focus traps with automated and manual axe accessibility tooling.",
    url: "https://github.com/devkad09",
  },
  {
    title: "Why Developer Documentation is a Frontend Engineering Problem",
    tag: "documentation",
    readTime: "5 min read",
    date: "Jun 2026",
    description:
      "Bridging the gap between component library code and interactive developer portals that engineers can copy-paste and deploy in under two minutes.",
    url: "https://formgrid.dev",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-24 sm:py-32 bg-canvas" aria-labelledby="writing-heading">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="section-eyebrow">Writing</p>
          <h2 id="writing-heading" className="section-heading">
            Notes from the work
          </h2>
          <p className="section-copy">
            Working notes on frontend systems, API design, accessibility, and documentation architecture.
          </p>
        </div>

        {/* Articles Grid */}
        <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
          {ARTICLES.map((article) => (
            <li key={article.title} className="h-full">
              <article className="flex h-full flex-col rounded-[24px] border border-line bg-surface p-7 sm:p-8 shadow-soft justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-md bg-zinc-200/70 dark:bg-zinc-800 px-2.5 py-1 text-[11px] font-mono font-medium uppercase tracking-[0.08em] text-ink">
                      {article.tag}
                    </span>
                    <p className="shrink-0 text-right text-[13px] text-ink-muted">
                      {article.readTime} • {article.date}
                    </p>
                  </div>

                  <h3 className="mt-5 text-[1.4rem] sm:text-[1.65rem] font-bold leading-[1.2] tracking-[-0.03em] text-ink hover:text-accent transition-colors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">
                    {article.description}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 font-medium bg-ink text-canvas hover:opacity-90 h-10 rounded-[12px] px-4 text-sm transition-all"
                  >
                    Read article
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Writing;
