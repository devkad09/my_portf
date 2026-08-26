import { useState } from "react";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";
import ResumeModal from "./ResumeModal";

const metrics = [
  { value: "20+", label: "Guides & Specs", accent: "blue" },
  { value: "3+", label: "Years Experience", accent: "blue" },
  { value: "100%", label: "Remote Ready", accent: "blue" },
];

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="glow-orb glow-blue w-[500px] h-[500px] -top-32 -left-32 opacity-60" />
      <div className="glow-orb glow-purple w-[450px] h-[450px] top-1/2 -right-32 opacity-50" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Status Pill */}
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 backdrop-blur-md shadow-sm shadow-blue-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                Available for Writing & Development Projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                Kelvin Atsu Djayouri <br />
                <span className="grad-violet-cyan">Technical Writer</span> & Developer Advocate
              </h1>

              {/* Static subtitle */}
              <div className="flex items-center gap-2.5 text-lg sm:text-xl font-medium text-slate-300 min-h-[32px]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                <span className="font-mono text-cyan-300">Technical Writer @ Formgrid</span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Technical Writer at <strong className="text-white font-semibold">Formgrid</strong>. I craft clear, comprehensive technical documentation, developer guides, and API specifications that help teams ship software faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 px-4 py-3 rounded-xl hover:bg-blue-500/10"
              >
                <FileText className="w-4 h-4" /> View CV / Resume
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/devkad09"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 shadow-sm"
                  title="GitHub @devkad09"
                >
                  <GithubLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kaddev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 shadow-sm"
                  title="LinkedIn @kaddev"
                >
                  <LinkedinLogo className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deve.kad.tech@gmail.com"
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10 shadow-sm"
                  title="Email deve.kad.tech@gmail.com"
                >
                  <GmailLogo className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE ID CARD */}
          <div className="relative flex justify-center">
            {/* Ambient card halo */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-cyan-500/30 blur-xl opacity-75" />

            <div className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-slate-700/80 rounded-3xl p-7 shadow-2xl space-y-6">
              {/* Top ID Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/25">
                      <img
                        src="/profile.jpg"
                        alt="Kelvin Atsu Djayouri"
                        className="w-full h-full rounded-[14px] object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-sm" title="Online / Available" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Kelvin Atsu Djayouri</h3>
                    <p className="text-xs font-semibold text-blue-400">Technical Writer at Formgrid</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">Accra, Ghana · Remote Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Quick specs list */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300">Technical Docs & API Specifications</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300">Developer Experience & Onboarding Guides</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-300">React & TypeScript System Documentation</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                {metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-950/80 border border-blue-900/40 text-center">
                    <p className="font-extrabold text-xl text-blue-400">{m.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{m.label}</p>
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
