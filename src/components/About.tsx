import { useState } from "react";
import { FileText, Download } from "lucide-react";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="about" className="relative bg-canvas py-24 sm:py-32" aria-labelledby="about-heading">
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-10 max-w-[1280px]">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-[4.5rem]">
            {/* Left: Framed Portrait */}
            <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-[24px] border border-line bg-surface shadow-card">
                <img
                  src="/profile.jpg"
                  alt="Kelvin Atsu Djayouri"
                  className="aspect-[4/5] h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Narrative Story & Academic Background */}
            <div className="min-w-0 lg:pt-4">
              <p className="section-eyebrow">About</p>
              <h2
                id="about-heading"
                className="max-w-xl text-[clamp(2.25rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.045em] text-ink"
              >
                I build from Ghana. The products get used everywhere.
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-base sm:text-lg leading-[1.7] text-ink-muted">
                <p>
                  I've spent over 3 years developing responsive web applications and creating clear technical documentation systems. Currently, as a Technical Writer at{" "}
                  <a
                    href="https://formgrid.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink font-semibold underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
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

              {/* Skills & Tools Tags */}
              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-3">
                  Core Technologies & Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 18",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Next.js",
                    "Node.js",
                    "REST APIs",
                    "WCAG 2.1 AA",
                    "MS Office Suite",
                    "Technical Writing",
                    "Figma",
                    "Git & GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs sm:text-sm text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#work-with-me" className="btn-primary">
                  Work with Me
                </a>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-secondary flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
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
