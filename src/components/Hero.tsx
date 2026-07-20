import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, FileText, CheckCircle2, Award } from "lucide-react";
import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";
import ResumeModal from "./ResumeModal";

const ROLES = [
  "Technical Writer @ Formgrid",
  "Developer Docs Specialist",
  "API & System Spec Writer",
  "Frontend Engineer",
];

const metrics = [
  { value: "20+", label: "Guides & Specs", accent: "blue" },
  { value: "3+", label: "Years Experience", accent: "blue" },
  { value: "100%", label: "Remote Ready", accent: "blue" },
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Status Pill */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-2 text-xs font-semibold text-[#2563eb]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
                </span>
                Available for New Writing & Development Projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0f172a] leading-[1.1]">
                Kelvin Atsu Djayouri <br />
                <span className="text-[#2563eb]">Technical Writer</span> & Developer Advocate
              </h1>

              {/* Typewriter subtitle */}
              <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#334155] min-h-[32px]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>{displayed}</span>
                <span className="w-0.5 h-6 bg-[#2563eb] animate-pulse" />
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="section-copy max-w-xl text-base sm:text-lg">
              Technical Writer at <strong className="text-[#0f172a]">Formgrid</strong>. I craft clear, comprehensive technical documentation, developer guides, and API specifications that help teams ship software faster.
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] px-4 py-3 rounded-xl hover:bg-[#eff6ff] transition-all"
              >
                <FileText className="w-4 h-4" /> View CV / Resume
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-4 border-t border-[#e2e8f0]">
              <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/devkad09"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#475569] hover:text-[#0f172a] hover:border-[#cbd5e1] hover:bg-white transition-all shadow-sm"
                  title="GitHub @devkad09"
                >
                  <GithubLogo className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kaddev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#475569] hover:text-[#2563eb] hover:border-[#bfdbfe] hover:bg-[#eff6ff] transition-all shadow-sm"
                  title="LinkedIn @kaddev"
                >
                  <LinkedinLogo className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deve.kad.tech@gmail.com"
                  className="p-2.5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#475569] hover:text-[#ea4335] hover:border-[#fecaca] hover:bg-[#fef2f2] transition-all shadow-sm"
                  title="Email deve.kad.tech@gmail.com"
                >
                  <GmailLogo className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-2xl space-y-6">
              {/* Top info badge */}
              <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/30">
                    KD
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0f172a]">Kelvin Atsu Djayouri</h3>
                    <p className="text-xs font-semibold text-[#2563eb]">Technical Writer at Formgrid</p>
                  </div>
                </div>
              </div>

              {/* Quick specs list */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                  <span className="text-xs font-medium text-[#334155]">Technical Docs & API Specifications</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                  <span className="text-xs font-medium text-[#334155]">Developer Experience & Onboarding Guides</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                  <span className="text-xs font-medium text-[#334155]">React & TypeScript System Documentation</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-2xl bg-[#eff6ff] border border-[#bfdbfe] text-center">
                    <p className="font-extrabold text-xl text-[#2563eb]">{m.value}</p>
                    <p className="text-[10px] font-bold text-[#1e40af] uppercase tracking-wider mt-1">{m.label}</p>
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
