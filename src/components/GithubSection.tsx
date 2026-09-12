import { useState, useEffect } from "react";
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  Loader2,
  AlertCircle,
  FolderGit2,
} from "lucide-react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/devkad09/repos?sort=updated&per_page=6");
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub public repositories");
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data.slice(0, 4));
        }
        setLoading(false);
      } catch (err) {
        // Fallback to verified real repos on rate limit or offline
        setError(true);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden bg-white"
      aria-labelledby="github-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
              <Github className="w-3.5 h-3.5" />
              <span>Public Open Source Activity</span>
            </div>
            <h2 id="github-heading" className="section-heading text-3xl sm:text-4xl">
              GitHub Repositories
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs min-h-[44px] h-11 px-4 w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            <span>@devkad09 on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors truncate break-all">
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
                  className="text-slate-700 hover:text-blue-600 font-medium flex items-center gap-1 min-h-[36px] py-1 px-1"
                >
                  <span>Inspect</span>
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
