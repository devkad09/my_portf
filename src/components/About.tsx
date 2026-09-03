import { useState } from "react";
import { FileText, Sparkles, MapPin, CheckCircle2, Send, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-24 sm:py-32 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left: Framed Portrait with Neon Accents */}
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="relative rounded-3xl overflow-hidden glass-panel border-emerald-500/30 p-2 shadow-2xl">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface-2 relative">
                  <img
                    src="/profile.jpg"
                    alt="Kelvin Atsu Djayouri - Frontend Developer and Technical Writer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 p-5 text-white">
                    <p className="font-display font-bold text-lg">Kelvin Atsu Djayouri</p>
                    <p className="text-xs text-emerald-400 font-mono">Frontend Developer & Technical Writer</p>
                    <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>Accra, Ghana (GMT+0) • Remote Global</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Story & Academic Background */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-eyebrow">
                  <Sparkles className="w-4 h-4" />
                  <span>The Background</span>
                </p>
                <h2 id="about-heading" className="section-heading">
                  Building from Ghana. <span className="text-emerald-600 dark:text-emerald-400">Products used worldwide.</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-ink-muted">
                <p>
                  I've spent over 2 years developing responsive web applications and creating clear technical documentation systems. Currently, as a Technical Writer at{" "}
                  <a
                    href="https://formgrid.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink font-semibold underline underline-offset-4 decoration-emerald-500 hover:text-emerald-500 transition-colors"
                  >
                    Formgrid.dev
                  </a>
                  , I author REST API endpoint references, design system component guides, and lead pipeline documentation for developer adoption.
                </p>
                <p>
                  Alongside documentation, I build modern frontend interfaces with React 18, TypeScript, and Tailwind CSS, holding every interface to rigorous standards: sub-second load times via code splitting, pixel-perfect responsiveness from mobile to 4K, and WCAG 2.1 AA accessibility tested with axe DevTools.
                </p>
                <p>
                  I completed my Diploma in Information Technology at <strong>Accra Technical University</strong> (2024 – 2026), and I am preparing for my <strong>BSc in Computer Science (Top-Up)</strong> at <strong>Ghana Communication Technology University (GCTU)</strong> with planned start in 2027.
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
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-2 border border-line text-ink-muted"
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
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-secondary"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
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
