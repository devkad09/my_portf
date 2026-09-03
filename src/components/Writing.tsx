import { ArrowUpRight, BookOpen, Sparkles, Clock, Calendar } from "lucide-react";

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
    tag: "API Architecture",
    readTime: "6 min read",
    date: "Aug 2026",
    description:
      "How to design headless form backend endpoints (/api/f/:id) that prevent spam, handle CORS seamlessly, and process JSON and standard HTML form posts with zero client configuration.",
    url: "https://formgrid.dev",
  },
  {
    title: "Achieving 100/100 Core Web Vitals in Modern React & TypeScript SPAs",
    tag: "Web Performance",
    readTime: "8 min read",
    date: "Aug 2026",
    description:
      "Practical strategies for code splitting, route prefetching, asset compression, and eliminating hydration layout shifts in production React applications.",
    url: "https://nordhem-blue.vercel.app",
  },
  {
    title: "WCAG 2.1 AA Compliance with axe DevTools: Beyond Basic Semantic HTML",
    tag: "Accessibility",
    readTime: "7 min read",
    date: "Jul 2026",
    description:
      "A systematic approach to testing interactive modals, custom form controls, and focus traps with automated and manual axe accessibility tooling.",
    url: "https://github.com/devkad09",
  },
  {
    title: "Why Developer Documentation is a Frontend Engineering Problem",
    tag: "Documentation",
    readTime: "5 min read",
    date: "Jun 2026",
    description:
      "Bridging the gap between component library code and interactive developer portals that engineers can copy-paste and deploy in under two minutes.",
    url: "https://formgrid.dev",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="writing-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Technical Publications</span>
          </p>
          <h2 id="writing-heading" className="section-heading">
            Engineering insights & <span className="text-emerald-600 dark:text-emerald-400">publications</span>
          </h2>
          <p className="section-copy mx-auto">
            Working notes on frontend systems, API design, accessibility, and developer documentation architecture.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl glass-card p-6 sm:p-8 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >

              <div className="relative z-10 space-y-4">
                {/* Meta Top Row */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-line/60">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-500" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Article Headline */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {article.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="relative z-10 mt-6 pt-4 border-t border-line/60 flex items-center justify-end">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-teal-500 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
