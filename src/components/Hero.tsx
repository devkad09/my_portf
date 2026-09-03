import { useState } from "react";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  Code2,
  Activity,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Copy,
  Check,
  Play,
  FileText,
  Layers,
  Zap,
} from "lucide-react";
import ResumeModal from "./ResumeModal";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "code" | "metrics">("terminal");
  const [terminalInput, setTerminalInput] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ cmd: string; res: React.ReactNode }>
  >([
    {
      cmd: "whoami",
      res: (
        <div className="space-y-1 text-xs">
          <p className="text-indigo-400 font-bold">Kelvin Atsu Djayouri (KadDev)</p>
          <p className="text-slate-300">
            Frontend Developer & Technical Writer @{" "}
            <a
              href="https://formgrid.dev"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 font-semibold underline underline-offset-2"
            >
              Formgrid.dev
            </a>
          </p>
          <p className="text-slate-400 text-[11px]">Accra, Ghana (GMT+0) • Remote Global</p>
        </div>
      ),
    },
  ]);

  const terminalCommands: Record<string, React.ReactNode> = {
    whoami: (
      <div className="space-y-1 text-xs">
        <p className="text-indigo-400 font-bold">Kelvin Atsu Djayouri (KadDev)</p>
        <p className="text-slate-300">
          Frontend Developer & Technical Writer @{" "}
          <a
            href="https://formgrid.dev"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 font-semibold underline underline-offset-2"
          >
            Formgrid.dev
          </a>
        </p>
        <p className="text-slate-400 text-[11px]">Accra, Ghana (GMT+0) • Remote Global</p>
      </div>
    ),
    formgrid: (
      <div className="space-y-1 text-xs text-slate-300">
        <p className="text-indigo-400 font-bold">⚡ Formgrid.dev Documentation Systems</p>
        <p>• Authored REST API endpoint references & headless pipeline documentation (/api/f/:id).</p>
        <p>• Engineered interactive component architecture guides and lead intake portals.</p>
      </div>
    ),
    stack: (
      <div className="space-y-1 text-xs text-slate-300">
        <p><span className="text-indigo-400 font-bold">Frontend:</span> React 18, TypeScript, Tailwind CSS, Vite, Next.js</p>
        <p><span className="text-violet-400 font-bold">Backend & Cloud:</span> Node.js, REST APIs, Supabase, Express, MongoDB</p>
        <p><span className="text-purple-400 font-bold">Quality:</span> WCAG 2.1 AA A11y, axe DevTools, Core Web Vitals (100/100)</p>
      </div>
    ),
    projects: (
      <div className="space-y-1 text-xs text-slate-300">
        <p>🛍️ <span className="text-indigo-300 font-semibold">Nordhem:</span> Scandinavian e-commerce (Personal Project · In Progress)</p>
        <p>📋 <span className="text-violet-300 font-semibold">FormFlow:</span> Multi-step form engine with Supabase (Active SaaS)</p>
        <p>🍸 <span className="text-purple-300 font-semibold">Mcsteeze Lounge:</span> Digital hospitality experience (Production Live)</p>
      </div>
    ),
    contact: (
      <div className="space-y-1 text-xs text-slate-300">
        <p>📧 Email: <a href="mailto:deve.kad.tech@gmail.com" className="text-indigo-400 underline">deve.kad.tech@gmail.com</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-violet-400 underline">@kaddev</a></p>
        <p>💻 GitHub: <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-indigo-400 underline">@devkad09</a></p>
      </div>
    ),
  };

  const handleRunCommand = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    if (clean === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    }
    if (terminalCommands[clean]) {
      setTerminalHistory((prev) => [...prev, { cmd: clean, res: terminalCommands[clean] }]);
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        {
          cmd: clean,
          res: (
            <p className="text-red-400 text-xs">
              Command '{clean}' not found. Try: <code className="text-indigo-300">whoami</code>, <code className="text-indigo-300">formgrid</code>, <code className="text-indigo-300">stack</code>, <code className="text-indigo-300">projects</code>, <code className="text-indigo-300">contact</code>, <code className="text-indigo-300">clear</code>
            </p>
          ),
        },
      ]);
    }
    setTerminalInput("");
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("npx kaddev-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="top"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle Ambient Indigo & Violet Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Hero Narrative & Value Prop (6 cols) */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              {/* Radar Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-xs font-semibold text-ink shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span>Available for Select Contracts & Engineering</span>
                <span className="text-ink-muted/40">•</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">Accra (GMT+0)</span>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="text-[36px] sm:text-[48px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.04em] text-ink font-display"
              >
                Engineering sub-second web applications &{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  modern digital experiences.
                </span>
              </h1>

              {/* Narrative Subtitle */}
              <p className="text-base sm:text-lg leading-relaxed text-ink-muted max-w-xl">
                Frontend Developer & Technical Writer with 2+ years of experience crafting high-performance React 18 & TypeScript applications, accessible design systems, and developer-grade documentation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a href="#projects" className="btn-primary">
                  <span>Explore Selected Works</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-secondary"
                >
                  <FileText className="w-4 h-4 text-indigo-500" />
                  <span>Interactive CV</span>
                </button>
              </div>

              {/* 4-Metric Verified Bento Strip */}
              <div className="pt-6 border-t border-line/60 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-3 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="font-display text-2xl font-extrabold text-ink tracking-tight">2+ Yrs</p>
                  <p className="text-[11px] font-mono text-ink-muted mt-0.5">React & TS</p>
                </div>
                <div className="p-3 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="font-display text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">9+</p>
                  <p className="text-[11px] font-mono text-ink-muted mt-0.5">Projects Shipped</p>
                </div>
                <div className="p-3 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="font-display text-2xl font-extrabold text-violet-600 dark:text-violet-400 tracking-tight">100/100</p>
                  <p className="text-[11px] font-mono text-ink-muted mt-0.5">Web Vitals Pass</p>
                </div>
                <div className="p-3 rounded-2xl bg-surface-2/60 border border-line/60">
                  <p className="font-display text-base font-bold text-indigo-600 dark:text-indigo-400 tracking-tight truncate">Formgrid</p>
                  <p className="text-[11px] font-mono text-ink-muted mt-0.5">Tech Writer</p>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Bento Interactive Cockpit (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Cockpit Window */}
              <div className="relative rounded-[24px] glass-panel border-indigo-500/30 overflow-hidden shadow-2xl">
                {/* Cockpit Chrome Header */}
                <div className="px-4 py-3 bg-slate-900/95 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
                      kaddev-cockpit v2.6
                    </span>
                  </div>

                  {/* Mode Switcher */}
                  <div className="flex items-center p-1 rounded-xl bg-slate-950/80 border border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveTab("terminal")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeTab === "terminal"
                          ? "bg-indigo-600 text-white shadow-sm font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <TerminalIcon className="w-3.5 h-3.5" />
                      <span>terminal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("code")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeTab === "code"
                          ? "bg-indigo-600 text-white shadow-sm font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>spec.ts</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("metrics")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        activeTab === "metrics"
                          ? "bg-indigo-600 text-white shadow-sm font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Activity className="w-3.5 h-3.5" />
                      <span>audits</span>
                    </button>
                  </div>
                </div>

                {/* Cockpit Window Content */}
                <div className="p-5 bg-[#070914] text-slate-200 min-h-[320px] max-h-[360px] overflow-y-auto font-mono text-xs">
                  {/* TAB 1: Terminal Shell */}
                  {activeTab === "terminal" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/05 pb-2">
                        <p>
                          Commands: <span className="text-indigo-400">whoami</span>, <span className="text-violet-400">formgrid</span>, <span className="text-indigo-400">stack</span>, <span className="text-purple-400">projects</span>
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyCmd}
                          className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer bg-white/05 px-2 py-0.5 rounded border border-white/05"
                        >
                          {copied ? <Check className="w-3 h-3 text-indigo-400" /> : <Copy className="w-3 h-3" />}
                          <span>npx kaddev-cli</span>
                        </button>
                      </div>

                      {/* Quick Runnable Command Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {["whoami", "formgrid", "stack", "projects", "contact", "clear"].map((cmd) => (
                          <button
                            type="button"
                            key={cmd}
                            onClick={() => handleRunCommand(cmd)}
                            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-300 hover:text-indigo-300 hover:border-indigo-500/40 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <Play className="w-2.5 h-2.5 text-indigo-400" />
                            <span>{cmd}</span>
                          </button>
                        ))}
                      </div>

                      {/* Terminal History */}
                      <div className="space-y-3 pt-2">
                        {terminalHistory.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center gap-2 text-indigo-400">
                              <span>❯</span>
                              <span className="text-white font-bold">{item.cmd}</span>
                            </div>
                            <div className="pl-3 border-l border-indigo-500/30">{item.res}</div>
                          </div>
                        ))}
                      </div>

                      {/* Command Prompt Input */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (terminalInput) handleRunCommand(terminalInput);
                        }}
                        className="flex items-center gap-2 pt-2 text-indigo-400"
                      >
                        <span>❯</span>
                        <input
                          type="text"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          placeholder="Type command and hit Enter..."
                          className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-slate-600"
                        />
                      </form>
                    </div>
                  )}

                  {/* TAB 2: Live Code Architecture Spec */}
                  {activeTab === "code" && (
                    <div className="space-y-2 leading-relaxed text-slate-300">
                      <p className="text-slate-500">// TypeScript & Formgrid.dev API Endpoint Reference</p>
                      <p>
                        <span className="text-indigo-400">interface</span>{" "}
                        <span className="text-violet-300">FrontendArchitecture</span> &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-300">author</span>: <span className="text-violet-300">"Kelvin Atsu Djayouri"</span>;
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-300">specialization</span>: <span className="text-violet-300">"React 18 & Docs Systems"</span>;
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-300">coreStack</span>: [<span className="text-violet-300">"React"</span>, <span className="text-violet-300">"TypeScript"</span>, <span className="text-violet-300">"Tailwind"</span>];
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-300">guarantees</span>: &#123; <span className="text-violet-300">a11y</span>: <span className="text-purple-300">"WCAG 2.1 AA"</span>, <span className="text-violet-300">speed</span>: <span className="text-purple-300">"&lt;0.8s LCP"</span> &#125;;
                      </p>
                      <p>&#125;</p>
                      <p className="pt-2">
                        <span className="text-indigo-400">export async function</span>{" "}
                        <span className="text-indigo-300">shipProductionApp</span>(<span className="text-violet-300">spec</span>: <span className="text-purple-300">ProjectSpec</span>) &#123;
                      </p>
                      <p className="pl-4 text-slate-400">
                        // Real-time sub-second delivery pipeline
                      </p>
                      <p className="pl-4">
                        <span className="text-indigo-400">return await</span> <span className="text-indigo-300">formgrid</span>.<span className="text-violet-300">dispatch</span>(<span className="text-violet-300">spec</span>);
                      </p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {/* TAB 3: Verified Performance & Vitals */}
                  {activeTab === "metrics" && (
                    <div className="space-y-4">
                      <p className="text-xs text-slate-400">
                        Lighthouse & axe DevTools Verified Metrics on Live Builds:
                      </p>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-sm">
                            100
                          </div>
                          <div>
                            <p className="font-semibold text-white text-xs">Performance</p>
                            <p className="text-[10px] text-indigo-400">Sub-second FCP</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-sm">
                            100
                          </div>
                          <div>
                            <p className="font-semibold text-white text-xs">Accessibility</p>
                            <p className="text-[10px] text-indigo-400">WCAG 2.1 AA</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-sm">
                            100
                          </div>
                          <div>
                            <p className="font-semibold text-white text-xs">Best Practices</p>
                            <p className="text-[10px] text-indigo-400">Strict TypeScript</p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900/80 border border-indigo-500/30 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-sm">
                            100
                          </div>
                          <div>
                            <p className="font-semibold text-white text-xs">SEO & Semantic</p>
                            <p className="text-[10px] text-indigo-400">Clean Schema</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between text-[11px]">
                        <span className="text-indigo-300 flex items-center gap-1.5 font-sans">
                          <ShieldCheck className="w-4 h-4 text-indigo-400" /> Tested with axe DevTools 2026
                        </span>
                        <span className="text-indigo-400 font-bold">0 Violations</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cockpit Status Bar */}
                <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    Cockpit Online
                  </span>
                  <span className="text-slate-500 font-mono">React 18 • TypeScript • Tailwind</span>
                </div>
              </div>

              {/* Bento Sub-Cards: Role Snapshot & Stack Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Formgrid.dev Role Bento Badge */}
                <div className="p-4 rounded-2xl glass-card border-indigo-500/20 flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink truncate">Formgrid.dev Author</p>
                    <p className="text-[11px] text-ink-muted truncate">REST APIs & Component Docs</p>
                  </div>
                </div>

                {/* Speed SLA Bento Badge */}
                <div className="p-4 rounded-2xl glass-card border-indigo-500/20 flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink truncate">Sub-Second Delivery</p>
                    <p className="text-[11px] text-ink-muted truncate">Code Splitting & Zero CLS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CV Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;
