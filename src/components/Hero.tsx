import { useState } from "react";
import { ArrowRight, FileText, CheckCircle2, Copy, Check, MapPin, Sparkles } from "lucide-react";
import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";
import ResumeModal from "./ResumeModal";

const metrics = [
  { value: "3+", label: "Years Exp", sub: "React & TypeScript" },
  { value: "20+", label: "Projects Shipped", sub: "3 Production SaaS" },
  { value: "100%", label: "WCAG 2.1 AA", sub: "Axe Tested & Accessible" },
];

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-950/50 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Ghana • Remote Ready
              </span>
              <a
                href="https://formgrid.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 hover:border-blue-300 dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-blue-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Technical Writer @ Formgrid.dev
              </a>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Kelvin Atsu Djayouri <br />
                <span className="text-blue-600 dark:text-blue-400">Frontend Developer</span> & Technical Writer
              </h1>

              {/* Subtitle & Focus */}
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium">
                <span className="font-mono text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg dark:text-cyan-300 dark:bg-cyan-950/50 dark:border-cyan-800/40">
                  React 18 · TypeScript · Tailwind CSS · Documentation Systems
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Frontend Developer and Technical Writer with 3+ years of experience developing responsive, high-performance web applications and creating clear technical documentation. Strong background in reusable component systems and accessible interfaces.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-all cursor-pointer dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Icons & CV Trigger */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Socials:</span>
                <a
                  href="https://github.com/devkad09"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-700 dark:hover:bg-slate-800"
                  title="GitHub @devkad09"
                >
                  <GithubLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kaddev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10"
                  title="LinkedIn @kaddev"
                >
                  <LinkedinLogo className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deve.kad.tech@gmail.com"
                  className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:text-red-400 dark:hover:border-red-500/40 dark:hover:bg-red-500/10"
                  title="Email deve.kad.tech@gmail.com"
                >
                  <GmailLogo className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" /> View Interactive CV →
              </button>
            </div>
          </div>

          {/* RIGHT BENTO PROFILE WIDGET */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-7 shadow-xl space-y-6 dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-2xl">
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="/profile.jpg"
                      alt="Kelvin Atsu Djayouri"
                      className="w-16 h-16 rounded-2xl object-cover border border-blue-500/40 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm" title="Online" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Kelvin Atsu Djayouri</h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Technical Writer @ <a href="https://formgrid.dev" target="_blank" rel="noreferrer" className="underline hover:no-underline">Formgrid (formgrid.dev)</a>
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Accra, Ghana · UTC+0
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Skill Focus */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Reusable Component Systems & UI Libraries</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Technical Documentation & Workflow Guides</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">WCAG 2.1 AA Accessibility & Performance</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center dark:bg-slate-950/80 dark:border-slate-800/80">
                    <p className="font-extrabold text-xl text-blue-600 dark:text-blue-400">{m.value}</p>
                    <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mt-0.5">{m.label}</p>
                    <p className="text-[9px] text-slate-500 mt-0.5">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default Hero;
