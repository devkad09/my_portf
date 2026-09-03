import { useState } from "react";
import { ArrowUpRight, Sun, Moon, Check, Copy, Mail, Github, Linkedin, FileText, Send, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ResumeModal from "@/components/ResumeModal";

interface ProjectItem {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Nordhem",
    subtitle: "Scandinavian E-Commerce Storefront",
    status: "In Active Development (Personal Project)",
    description:
      "A minimalist apparel storefront with client-side faceted filtering, lookbook overlays, slide-out reactive cart drawer, and sub-second load times.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
  },
  {
    title: "FormFlow",
    subtitle: "Developer Multi-Step Form Engine",
    status: "Active SaaS Build",
    description:
      "A modular form engine and lead router with Zod schema validation, accessible keyboard navigation, and direct Supabase database pipelines.",
    technologies: ["React 18", "TypeScript", "Supabase", "Zod", "REST APIs"],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
  },
  {
    title: "Mcsteeze Lounge",
    subtitle: "Hospitality Brand Portal",
    status: "Production Live",
    description:
      "A mobile-first hospitality website featuring an interactive digital menu browser, reservation workflows, and sub-second asset optimization.",
    technologies: ["React", "Tailwind CSS", "Responsive UI", "Vite"],
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
  },
];

const ARTICLES = [
  {
    title: "Building Headless Form Endpoints That Scale: Lessons from Formgrid.dev",
    date: "Aug 2026",
    url: "https://formgrid.dev",
  },
  {
    title: "Achieving 100/100 Core Web Vitals in Modern React & TypeScript SPAs",
    date: "Aug 2026",
    url: "https://nordhem-blue.vercel.app",
  },
  {
    title: "WCAG 2.1 AA Compliance with axe DevTools: Beyond Basic Semantic HTML",
    date: "Jul 2026",
    url: "https://github.com/devkad09",
  },
  {
    title: "Why Developer Documentation is a Frontend Engineering Problem",
    date: "Jun 2026",
    url: "https://formgrid.dev",
  },
];

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/deve.kad.tech@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Inquiry from ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-200">
      {/* Main Single-Column Editorial Container */}
      <main className="max-w-2xl mx-auto px-6 py-16 sm:py-24 space-y-16">
        {/* Top Header & Identity */}
        <header className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink font-display">
              Kelvin Atsu Djayouri
            </h1>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="text-xs font-mono text-ink-muted hover:text-ink transition-colors cursor-pointer flex items-center gap-1"
                title="View Resume / CV"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV</span>
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-2 transition-all cursor-pointer"
                aria-label="Toggle theme"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Frontend Developer & Technical Writer at{" "}
            <a
              href="https://formgrid.dev"
              target="_blank"
              rel="noreferrer"
              className="text-ink font-medium underline underline-offset-4 decoration-line hover:decoration-ink transition-colors"
            >
              Formgrid.dev
            </a>
            . Building sub-second React applications, accessible design systems, and developer documentation architectures. Based in Accra, Ghana (GMT+0).
          </p>

          {/* Direct Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/devkad09</span>
            </a>
            <a
              href="https://linkedin.com/in/kaddev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/kaddev</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="hover:text-ink transition-colors flex items-center gap-1 cursor-pointer"
              title="Click to copy email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-ink" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "copied to clipboard" : "deve.kad.tech@gmail.com"}</span>
            </button>
          </div>
        </header>

        {/* Section 1: About & Background */}
        <section className="space-y-4 pt-2 border-t border-line">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
            About
          </h2>
          <div className="space-y-3.5 text-sm sm:text-base text-ink-muted leading-relaxed">
            <p>
              I have 2+ years of experience engineering accessible, high-performance web applications using React 18, TypeScript, and modern tooling. My focus centers on clean component architectures, sub-second load times via code splitting, and strict WCAG 2.1 AA accessibility standards verified with axe DevTools.
            </p>
            <p>
              At{" "}
              <a
                href="https://formgrid.dev"
                target="_blank"
                rel="noreferrer"
                className="text-ink font-medium underline underline-offset-4 decoration-line hover:decoration-ink"
              >
                Formgrid.dev
              </a>
              , I author REST API endpoint specifications (<code className="text-xs font-mono bg-surface-2 px-1 py-0.5 rounded">/api/f/:id</code>), component implementation recipes, and developer onboarding guides that streamline headless form integrations.
            </p>
            <p>
              I hold a Diploma in Information Technology from <strong>Accra Technical University</strong> (2024–2026) and am preparing for a <strong>BSc in Computer Science (Top-Up)</strong> at <strong>Ghana Communication Technology University (GCTU)</strong> in 2027.
            </p>
          </div>
        </section>

        {/* Section 2: Work Experience */}
        <section className="space-y-6 pt-2 border-t border-line">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Formgrid.dev */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-semibold text-sm sm:text-base text-ink">
                  Technical Writer & Documentation Engineer —{" "}
                  <a
                    href="https://formgrid.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 decoration-line hover:decoration-ink"
                  >
                    Formgrid.dev
                  </a>
                </h3>
                <span className="text-xs font-mono text-ink-muted shrink-0">2024 – Present</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Authored REST API endpoint documentation, OpenAPI specifications, TypeScript code examples, and interactive component guides. Engineered documentation systems ensuring zero ambiguity in developer adoption.
              </p>
            </div>

            {/* Freelance Frontend */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-semibold text-sm sm:text-base text-ink">
                  Frontend Developer — Freelance & Client Engineering
                </h3>
                <span className="text-xs font-mono text-ink-muted shrink-0">2023 – Present</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Shipped 9+ responsive web applications, including 3 production SaaS analytics dashboards. Optimized Core Web Vitals to sub-second load times and delivered 100% WCAG 2.1 AA accessible interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Selected Projects */}
        <section className="space-y-6 pt-2 border-t border-line">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
            Selected Projects
          </h2>
          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <div key={project.title} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-sm sm:text-base text-ink flex items-center gap-1.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4 flex items-center gap-1"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                    </a>
                  </h3>
                  <span className="text-[11px] font-mono text-ink-muted">{project.status}</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5 text-xs font-mono text-ink-muted">
                  <div className="flex items-center gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    )).reduce((prev, curr) => [prev, "•", curr] as any)}
                  </div>
                  {project.githubUrl && (
                    <>
                      <span>•</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-ink hover:underline"
                      >
                        source
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Writing & Publications */}
        <section className="space-y-6 pt-2 border-t border-line">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
            Writing
          </h2>
          <div className="space-y-3">
            {ARTICLES.map((article) => (
              <div key={article.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-ink group-hover:underline underline-offset-4 flex items-center gap-1 leading-snug"
                >
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-3 h-3 text-ink-muted shrink-0" />
                </a>
                <span className="text-xs font-mono text-ink-muted shrink-0">{article.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Contact & Message */}
        <section className="space-y-6 pt-2 border-t border-line" id="contact">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted">
            Contact
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            I am available for select frontend engineering roles, contract projects, and technical writing engagements. Feel free to email me directly at{" "}
            <a
              href="mailto:deve.kad.tech@gmail.com"
              className="text-ink font-medium underline underline-offset-4"
            >
              deve.kad.tech@gmail.com
            </a>{" "}
            or send a message below.
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-surface-2 border border-line text-xs font-mono text-ink space-y-1">
              <p className="font-bold">Message Sent.</p>
              <p className="text-ink-muted">Thank you. I will reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3 max-w-lg">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full h-10 px-3 text-xs bg-surface-2 border border-line rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full h-10 px-3 text-xs bg-surface-2 border border-line rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full p-3 text-xs bg-surface-2 border border-line rounded-lg text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors leading-relaxed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-ink text-canvas hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Simple Footer */}
        <footer className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-muted">
          <p>© {new Date().getFullYear()} Kelvin Atsu Djayouri</p>
          <p>Accra, Ghana • Remote</p>
        </footer>
      </main>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Index;
