import { useState } from "react";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CONFIRMED_TECHNOLOGIES } from "@/data/technologies";

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [interactiveCounter, setInteractiveCounter] = useState(3);
  const [activeTab, setActiveTab] = useState<"component" | "types" | "performance">("component");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
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
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white"
      aria-label="Introduction and Overview"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
          {/* Left Column: Narrative & CTAs */}
          <div className="space-y-6">
            {/* Subtle Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200 text-xs font-mono text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16a34a]" />
              </span>
              <span className="font-semibold">{PERSONAL_INFO.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                {PERSONAL_INFO.name}
              </p>
              <h1 className="font-display font-extrabold text-[clamp(1.95rem,5.5vw,3.75rem)] text-slate-900 tracking-tight leading-[1.08] break-words">
                {PERSONAL_INFO.headline}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Positioning Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium border border-blue-200">
                {PERSONAL_INFO.positioning}
              </span>
            </div>

            {/* Primary CTAs - Responsive Full Width on narrow mobile */}
            <div className="flex flex-col xxs:flex-row flex-wrap items-stretch xxs:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="w-full xxs:w-auto inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98] bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-sm min-h-[44px] h-11 rounded-xl px-6 text-sm cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full xxs:w-auto btn-secondary min-h-[44px]"
              >
                <span>Let’s Connect</span>
              </button>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full xxs:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-mono px-3.5 min-h-[44px] h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  aria-label="Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className="text-xs font-mono text-slate-500">
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Right Column: Developer Visual with Floating Technology Badges (lg-only to prevent mobile clipping) */}
          <div className="relative">
            {/* Subtle Floating Technology Badges on Large Screens */}
            <div className="hidden lg:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float">
              <div
                className="w-4 h-4 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: CONFIRMED_TECHNOLOGIES.react.svgIcon }}
              />
              <span className="text-xs font-mono font-bold text-slate-800">React</span>
            </div>

            <div className="hidden lg:flex absolute -bottom-3 -left-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float [animation-delay:1.5s]">
              <div
                className="w-4 h-4 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: CONFIRMED_TECHNOLOGIES.typescript.svgIcon }}
              />
              <span className="text-xs font-mono font-bold text-slate-800">TypeScript</span>
            </div>

            <div className="hidden lg:flex absolute -top-4 -right-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md animate-float [animation-delay:0.8s]">
              <div
                className="w-4 h-4 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: CONFIRMED_TECHNOLOGIES.tailwindcss.svgIcon }}
              />
              <span className="text-xs font-mono font-bold text-slate-800">Tailwind CSS</span>
            </div>

            {/* Visual Container */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-lg p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">
              {/* Window Header - Responsive Flex Reflow */}
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="ml-2 text-xs font-mono text-slate-500 font-medium">
                    DeveloperWorkspace.tsx
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs w-full xs:w-auto justify-between xs:justify-start">
                  <button
                    type="button"
                    onClick={() => setActiveTab("component")}
                    className={`flex-1 xs:flex-none text-center px-2 sm:px-2.5 py-1 min-h-[30px] rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      activeTab === "component" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    UI State
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("types")}
                    className={`flex-1 xs:flex-none text-center px-2 sm:px-2.5 py-1 min-h-[30px] rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      activeTab === "types" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("performance")}
                    className={`flex-1 xs:flex-none text-center px-2 sm:px-2.5 py-1 min-h-[30px] rounded-md text-xs font-medium transition-colors cursor-pointer ${
                      activeTab === "performance" ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Standards
                  </button>
                </div>
              </div>

              {/* Tab 1: Live Interactive Component State */}
              {activeTab === "component" && (
                <div className="space-y-4 py-2">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-slate-700">
                        Interactive Playground
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium shrink-0">
                        Live React State
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Click to interact with reactive state, view responsive breakpoint changes, and inspect clean component ergonomics.
                    </p>

                    {/* Interactive controls */}
                    <div className="pt-1 flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setInteractiveCounter((prev) => prev + 1)}
                        className="px-3.5 py-1.5 min-h-[36px] rounded-lg bg-[#2563eb] text-white text-xs font-medium hover:bg-[#1d4ed8] transition-colors cursor-pointer shadow-xs"
                      >
                        Count: {interactiveCounter}
                      </button>

                      <button
                        type="button"
                        onClick={() => setInteractiveCounter(0)}
                        className="px-2.5 py-1.5 min-h-[36px] rounded-lg border border-slate-200 bg-white text-slate-700 text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Reset
                      </button>

                      <span className="text-xs font-mono text-slate-500">
                        Latency: &lt;1ms
                      </span>
                    </div>
                  </div>

                  {/* Responsive simulation bar */}
                  <div className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Viewport Verified:</span>
                    </span>
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-medium">320px–430px</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-medium">768px–1920px+</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: TypeScript Strict Contract */}
              {activeTab === "types" && (
                <div className="py-1 font-mono text-xs space-y-2 text-slate-700 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
                  <pre className="text-[11px] leading-relaxed text-slate-800">
{`interface FrontendDeveloper {
  name: 'Kelvin Atsu Djayouri';
  role: 'Frontend Developer';
  focus: ['React 18', 'TypeScript', 'Tailwind CSS'];
  currentLearning: ['Node.js', 'APIs', 'Supabase'];
  goal: 'Well-Rounded Full-Stack Engineering';
  accessible: true; // WCAG 2.1 AA Compliant
}`}
                  </pre>
                </div>
              )}

              {/* Tab 3: Performance Standards */}
              {activeTab === "performance" && (
                <div className="py-2 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <p className="text-[10px] text-slate-500">CORE VITALS</p>
                    <p className="text-xl font-bold text-blue-600">100/100</p>
                    <p className="text-[10px] text-slate-500">Performance Focus</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <p className="text-[10px] text-slate-500">ACCESSIBILITY</p>
                    <p className="text-xl font-bold text-slate-900">100%</p>
                    <p className="text-[10px] text-slate-500">WCAG 2.1 AA Target</p>
                  </div>
                </div>
              )}

              {/* Footer Note */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Frontend First • Expanding Full-Stack</span>
                </span>
                <span>KadDev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
