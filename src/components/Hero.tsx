import { useState } from "react";
import { ArrowDown, Github, Terminal as TerminalIcon, Check, Copy } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyTerminal = () => {
    const terminalText = `$ whoami\n\nkelvin@kad.dev\n\nfrontend developer\nbackend learner\nbuilder\nproblem solver`;
    navigator.clipboard.writeText(terminalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28 bg-white border-b border-slate-100"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8">
        <div className="space-y-12 sm:space-y-14">
          {/* Identity Eyebrow */}
          <div className="space-y-2">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
              {PERSONAL_INFO.name}
            </p>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600">
              FRONTEND DEVELOPER &bull; BUILDING TOWARD FULL-STACK.
            </p>
          </div>

          {/* Main Statement & Supporting Copy */}
          <div className="space-y-6 max-w-3xl">
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.05]">
              “I build things for the web.”
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.supportingText}
            </p>
          </div>

          {/* Buttons: [VIEW MY WORK] & [GITHUB] */}
          <div className="flex flex-col xxs:flex-row flex-wrap items-stretch xxs:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToWork}
              className="btn-primary min-h-[44px] h-11 px-6 font-mono text-xs font-bold uppercase tracking-wider cursor-pointer group"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[44px] h-11 px-5 font-mono text-xs font-bold uppercase tracking-wider"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
          </div>

          {/* Status Area & Personal Terminal Grid */}
          <div className="pt-8 border-t border-slate-100 grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Technical Status Area: CURRENTLY */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">
                  CURRENTLY
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Focus
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {PERSONAL_INFO.currently.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center font-mono text-xs px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle Personal Terminal */}
            <div className="relative rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 p-5 shadow-sm font-mono text-xs space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-[11px] text-slate-400 flex items-center gap-1">
                    <TerminalIcon className="w-3 h-3" />
                    <span>terminal</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyTerminal}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                  title="Copy terminal contents"
                  aria-label="Copy terminal text"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="space-y-1.5 text-slate-300 leading-relaxed">
                <p className="text-emerald-400">
                  <span className="text-slate-500">$</span> whoami
                </p>
                <p className="text-white font-bold pl-2">kelvin@kad.dev</p>
                <div className="pt-1 pl-2 space-y-0.5 text-slate-400 text-xs">
                  <p>&rarr; frontend developer</p>
                  <p>&rarr; backend learner</p>
                  <p>&rarr; builder</p>
                  <p>&rarr; problem solver</p>
                </div>
                <div className="pt-1 text-slate-500">
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="inline-block w-2 h-3.5 bg-slate-400 animate-pulse align-middle ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
