import { useState, useEffect } from "react";
import { Github, GitBranch, Star, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 1,
    name: "nordhem",
    description: "Minimalist Scandinavian fashion storefront built with React 18, TypeScript, and Vite.",
    html_url: "https://github.com/devkad09/nordhem",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-20T00:00:00Z",
  },
  {
    id: 2,
    name: "formflow",
    description: "Multi-step form engine with runtime Zod schema validation and Supabase integration.",
    html_url: "https://github.com/devkad09/formflow",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-15T00:00:00Z",
  },
  {
    id: 3,
    name: "mcsteeze-lounge",
    description: "Mobile-first digital menu browser and table reservation management system.",
    html_url: "https://github.com/devkad09/mcsteeze-lounge",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-08-01T00:00:00Z",
  },
];

export const GithubSection = () => {
  const [repos, setRepos] = useState<GithubRepo[]>(FALLBACK_REPOS);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/devkad09/repos?sort=updated&per_page=6");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data.slice(0, 4));
          }
        }
      } catch {
        // Keep honest fallbacks
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      className="py-24 sm:py-32 bg-slate-50/70 border-b border-slate-100"
      aria-labelledby="github-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-3">
            <p className="section-eyebrow">
              <span>Open Source</span>
            </p>
            <h2 id="github-heading" className="section-heading text-3xl sm:text-5xl">
              GITHUB
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Public repositories and codebases I actively develop.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary font-mono text-xs self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-400 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                    </svg>
                    <h3 className="font-mono font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  {repo.language && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium shrink-0">
                      {repo.language}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {repo.description || "Public repository containing source code and component architecture."}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center gap-1 py-1"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
