import { Sparkles, Clock, ArrowUpRight, BookOpen } from "lucide-react";
import { ARTICLES } from "@/data/portfolioData";

export const Articles = () => {
  return (
    <section
      id="writing"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-white scroll-mt-16"
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-3 max-w-2xl">
            <p className="section-eyebrow">
              <Sparkles className="w-4 h-4" />
              <span>Technical Writing</span>
            </p>
            <h2 id="writing-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Articles & documentation{" "}
              <span className="text-slate-500">
                guides
              </span>
            </h2>
            <p className="text-base text-slate-600">
              Writing helps me think through software architecture. Here are technical publications covering headless APIs, frontend performance, and web accessibility.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 text-slate-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-2"
                  >
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{article.date}</span>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
