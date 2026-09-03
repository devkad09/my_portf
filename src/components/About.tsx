import { useState } from "react";
import { FileText, Sparkles, MapPin, Send, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="py-24 sm:py-32 relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left: Cyber Dossier Portrait Frame */}
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="relative rounded-3xl overflow-hidden glass-panel border-indigo-500/30 p-2 shadow-2xl">
                {/* Holographic Portrait Box */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950 relative group">
                  <img
                    src="/profile.jpg"
                    alt="Kelvin Atsu Djayouri - Frontend Developer and Technical Writer"
                    className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Subtle cyber scan overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      <p className="font-display font-bold text-lg">Kelvin Atsu Djayouri</p>
                    </div>
                    <p className="text-xs text-indigo-400 font-mono">
                      Frontend Developer & Technical Writer
                    </p>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1.5 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Accra, Ghana (GMT+0) • Remote Global</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified SLA Badge Pill */}
              <div className="mt-4 p-3 rounded-2xl glass-card border-indigo-500/20 flex items-center justify-between text-xs font-mono">
                <span className="text-ink-muted flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span>A11y Standard:</span>
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  100% WCAG 2.1 AA
                </span>
              </div>
            </div>

            {/* Right: Narrative Story & Academic Roadmap */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-eyebrow">
                  <Sparkles className="w-4 h-4" />
                  <span>The Background & Dossier</span>
                </p>
                <h2 id="about-heading" className="section-heading">
                  Building from Ghana.{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    Products used worldwide.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-ink-muted">
                <p>
                  I've spent over 2 years developing responsive, high-speed web applications and creating clear technical documentation systems. Currently, as a Technical Writer at{" "}
                  <a
                    href="https://formgrid.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink font-semibold underline underline-offset-4 decoration-indigo-500 hover:text-indigo-500 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Formgrid.dev</span>
                    <ExternalLink className="w-3 h-3 text-indigo-500" />
                  </a>
                  , I author REST API endpoint references, design system component guides, and lead pipeline documentation for developer adoption.
                </p>
                <p>
                  Alongside documentation, I architect modern frontend interfaces with React 18, TypeScript, and Tailwind CSS, holding every codebase to strict standards: sub-second load times via code splitting, pixel-perfect responsiveness from mobile to 4K, and WCAG 2.1 AA accessibility verified with axe DevTools.
                </p>
                <p className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-surface-2/60 border border-line/60 text-xs sm:text-sm">
                  <GraduationCap className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>
                    Diploma in Information Technology from <strong>Accra Technical University</strong> (2024 – 2026), preparing for <strong>BSc in Computer Science (Top-Up)</strong> at <strong>Ghana Communication Technology University (GCTU)</strong> with planned start in 2027.
                  </span>
                </p>
              </div>

              {/* Technologies Pills */}
              <div className="pt-2 space-y-3">
                <p className="text-xs font-mono uppercase font-bold text-ink tracking-wider">
                  Core Engineering & Tooling Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 18",
                    "TypeScript",
                    "Tailwind CSS",
                    "Next.js",
                    "Vite",
                    "Node.js",
                    "REST APIs",
                    "Supabase",
                    "WCAG 2.1 AA",
                    "axe DevTools",
                    "Technical Writing",
                    "Figma",
                    "Git / GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-surface-2/80 border border-line text-ink-muted hover:border-indigo-500/40 hover:text-ink transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <a href="#work-with-me" className="btn-primary">
                  <Send className="w-4 h-4" />
                  <span>Work with Me</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-secondary"
                >
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <span>View Full CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default About;
