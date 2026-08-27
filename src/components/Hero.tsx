import { useState } from "react";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  Code2,
  Activity,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  Copy,
  Check,
  Play,
} from "lucide-react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "code" | "metrics">("terminal");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ cmd: string; res: React.ReactNode }>
  >([
    {
      cmd: "whoami",
      res: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-semibold">Kelvin Atsu Djayouri (KadDev)</p>
          <p className="text-slate-400">
            Frontend Developer & Technical Writer @{" "}
            <a
              href="https://formgrid.dev"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              Formgrid.dev
            </a>
          </p>
          <p className="text-slate-400">Accra, Ghana (GMT+0) • Remote Global</p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);

  const terminalCommands: Record<string, React.ReactNode> = {
    whoami: (
      <div className="space-y-1 text-xs">
        <p className="text-emerald-400 font-semibold">Kelvin Atsu Djayouri (KadDev)</p>
        <p className="text-slate-400">
          Frontend Developer & Technical Writer @{" "}
          <a
            href="https://formgrid.dev"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 underline"
          >
            Formgrid.dev
          </a>
        </p>
        <p className="text-slate-400">Accra, Ghana (GMT+0) • Remote Global</p>
      </div>
    ),
    formgrid: (
      <div className="space-y-1 text-xs text-slate-300">
        <p className="text-emerald-400 font-semibold">⚡ Formgrid.dev Documentation Systems</p>
        <p>• Authored REST API references & headless endpoint guides (/api/f/:id).</p>
        <p>• Engineered interactive component libraries & AI Lead Pipeline docs.</p>
      </div>
    ),
    skills: (
      <div className="space-y-1 text-xs text-slate-300">
        <p><span className="text-emerald-400 font-bold">Frontend:</span> React 18, TypeScript, Tailwind CSS, Next.js, Vite</p>
        <p><span className="text-teal-400 font-bold">Docs:</span> REST APIs, MDX, Component Systems, Guides</p>
        <p><span className="text-emerald-400 font-bold">Standards:</span> WCAG 2.1 AA, axe DevTools, Core Web Vitals</p>
      </div>
    ),
    projects: (
      <div className="space-y-1 text-xs text-slate-300">
        <p>🛍️ <span className="text-emerald-300 font-semibold">Nordhem:</span> Scandinavian E-Commerce (100 Web Vitals)</p>
        <p>📋 <span className="text-teal-300 font-semibold">FormFlow:</span> Multi-step form engine with Supabase</p>
        <p>🍸 <span className="text-amber-300 font-semibold">Mcsteeze Lounge:</span> Digital hospitality experience</p>
      </div>
    ),
    contact: (
      <div className="space-y-1 text-xs text-slate-300">
        <p>📧 Email: <a href="mailto:deve.kad.tech@gmail.com" className="text-emerald-400 underline">deve.kad.tech@gmail.com</a></p>
        <p>💼 LinkedIn: <a href="https://linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-teal-400 underline">@kaddev</a></p>
        <p>💻 GitHub: <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-emerald-400 underline">@devkad09</a></p>
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
              Command '{clean}' not found. Try: <code className="text-cyan-300">whoami</code>, <code className="text-cyan-300">formgrid</code>, <code className="text-cyan-300">skills</code>, <code className="text-cyan-300">projects</code>, <code className="text-cyan-300">contact</code>, <code className="text-cyan-300">clear</code>
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
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & Proof */}
          <div className="space-y-6 sm:space-y-7">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/20 text-xs font-semibold text-ink shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Q3/Q4 Projects & Contracts</span>
              <span className="text-ink-muted/40">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">Accra (GMT+0)</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-[38px] sm:text-[52px] lg:text-[58px] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink font-display"
            >
              Crafting high-performance web applications &{" "}
              <span className="text-emerald-600 dark:text-emerald-400">modern digital experiences.</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg lg:text-[19px] leading-[1.7] text-ink-muted max-w-xl">
              Frontend Developer specializing in React 18, TypeScript, and accessible UI architectures. Building scalable SaaS platforms, design systems, and developer-first web apps.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a href="#projects" className="btn-primary">
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#work-with-me" className="btn-secondary">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Start a Project</span>
              </a>
            </div>

            {/* Verified Metrics Strip */}
            <div className="pt-6 border-t border-line/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">3+ Yrs</p>
                <p className="text-xs text-ink-muted mt-0.5">React & TypeScript</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">20+</p>
                <p className="text-xs text-ink-muted mt-0.5">Projects Shipped</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">3 SaaS</p>
                <p className="text-xs text-ink-muted mt-0.5">In Production</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">100%</p>
                <p className="text-xs text-ink-muted mt-0.5">WCAG 2.1 AA & Vitals</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dev Cockpit */}
          <div className="relative">
            <div className="relative rounded-[24px] glass-panel border-emerald-500/30 overflow-hidden shadow-2xl">
              {/* Cockpit Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
                    kaddev-cockpit v2.6
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-1 rounded-xl bg-slate-950/70 border border-white/10">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "terminal"
                        ? "bg-emerald-600 text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <TerminalIcon className="w-3.5 h-3.5" />
                    <span>cli</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "code"
                        ? "bg-emerald-600 text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>code</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeTab === "metrics"
                        ? "bg-emerald-600 text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>vitals</span>
                  </button>
                </div>
              </div>

              {/* Cockpit Tab Content */}
              <div className="p-5 bg-[#080b14] text-slate-200 min-h-[340px] max-h-[380px] overflow-y-auto font-mono text-xs">
                {/* TAB 1: Terminal Shell */}
                {activeTab === "terminal" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/05 pb-2">
                      <p>Try commands: <span className="text-emerald-400">whoami</span>, <span className="text-teal-400">formgrid</span>, <span className="text-emerald-400">skills</span>, <span className="text-amber-400">projects</span></p>
                      <button
                        onClick={handleCopyCmd}
                        className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer bg-white/05 px-2 py-0.5 rounded"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>npx kaddev-cli</span>
                      </button>
                    </div>

                    {/* Quick runnable pills */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["whoami", "formgrid", "skills", "projects", "contact", "clear"].map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => handleRunCommand(cmd)}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-2.5 h-2.5 text-emerald-400" />
                          <span>{cmd}</span>
                        </button>
                      ))}
                    </div>

                    {/* Terminal History */}
                    <div className="space-y-3 pt-2">
                      {terminalHistory.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <span>❯</span>
                            <span className="text-white font-bold">{item.cmd}</span>
                          </div>
                          <div className="pl-3 border-l border-emerald-500/30">{item.res}</div>
                        </div>
                      ))}
                    </div>

                    {/* Command Prompt Input */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (terminalInput) handleRunCommand(terminalInput);
                      }}
                      className="flex items-center gap-2 pt-2 text-emerald-400"
                    >
                      <span>❯</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type a command and press Enter..."
                        className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-slate-600"
                      />
                    </form>
                  </div>
                )}

                {/* TAB 2: Live Code Preview */}
                {activeTab === "code" && (
                  <div className="space-y-2 leading-relaxed">
                    <p className="text-slate-500">// TypeScript & Formgrid.dev API Endpoint Reference</p>
                    <p>
                      <span className="text-emerald-400">interface</span>{" "}
                      <span className="text-amber-300">DeveloperProfile</span> &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-300">engineer</span>: <span className="text-teal-300">"Kelvin Atsu Djayouri"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-300">role</span>: <span className="text-teal-300">"Frontend & Tech Writer"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-300">coreStack</span>: [<span className="text-teal-300">"React 18"</span>, <span className="text-teal-300">"TypeScript"</span>, <span className="text-teal-300">"Tailwind"</span>];
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-300">standards</span>: &#123; <span className="text-teal-300">a11y</span>: <span className="text-amber-300">"WCAG 2.1 AA"</span>, <span className="text-teal-300">speed</span>: <span className="text-amber-300">"&lt;1.0s FCP"</span> &#125;;
                    </p>
                    <p>&#125;</p>
                    <p className="pt-2">
                      <span className="text-emerald-400">export async function</span>{" "}
                      <span className="text-emerald-300">dispatchConsultation</span>(<span className="text-orange-300">spec</span>: <span className="text-amber-300">ProjectSpec</span>) &#123;
                    </p>
                    <p className="pl-4 text-slate-400">
                      // Direct route to Formsubmit & Supabase lead pipeline
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-400">return await</span> <span className="text-emerald-300">formgrid</span>.<span className="text-teal-300">submit</span>(<span className="text-orange-300">spec</span>);
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {/* TAB 3: Real-time Performance & Vitals */}
                {activeTab === "metrics" && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400">
                      Lighthouse & axe DevTools Verified Audits for Production Deliverables:
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-sm">
                          100
                        </div>
                        <div>
                          <p className="font-semibold text-white text-xs">Performance</p>
                          <p className="text-[10px] text-emerald-400">Sub-second FCP</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-sm">
                          100
                        </div>
                        <div>
                          <p className="font-semibold text-white text-xs">Accessibility</p>
                          <p className="text-[10px] text-emerald-400">WCAG 2.1 AA</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-sm">
                          100
                        </div>
                        <div>
                          <p className="font-semibold text-white text-xs">Best Practices</p>
                          <p className="text-[10px] text-emerald-400">Clean Standards</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-sm">
                          100
                        </div>
                        <div>
                          <p className="font-semibold text-white text-xs">SEO & Semantic</p>
                          <p className="text-[10px] text-emerald-400">High Visibility</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-300 flex items-center gap-1.5 font-sans">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Tested with axe DevTools 2026
                      </span>
                      <span className="text-emerald-400 font-bold">0 Violations</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Cockpit Footer Status */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Terminal Online
                </span>
                <span className="text-slate-500 font-mono">React 18 • TypeScript 5.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
