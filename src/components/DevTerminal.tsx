import { useState } from "react";
import { Terminal, Copy, Check, Play } from "lucide-react";

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

const COMMANDS: Record<string, React.ReactNode> = {
  whoami: (
    <div className="space-y-1 text-emerald-300">
      <p>👨‍💻 <strong className="text-white">Kelvin Atsu Djayouri (KadDev)</strong></p>
      <p className="text-xs text-emerald-400 font-semibold">Frontend Developer | Technical Writer | Information Technology</p>
      <p className="text-xs text-[#8892a4]">Technical Writer at <a href="https://formgrid.dev" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Formgrid.dev</a> & Freelance Frontend Engineer. Ghana • Remote Ready.</p>
    </div>
  ),
  formgrid: (
    <div className="space-y-1.5 text-xs text-[#8892a4]">
      <p>⚡ <strong className="text-white">Formgrid (formgrid.dev) — AI Form Builder & Lead Pipeline</strong></p>
      <p>• Authored the complete REST API documentation & headless HTML endpoint reference (<code className="text-emerald-400">/api/f/:id</code>).</p>
      <p>• Build and maintain modern component libraries and supporting documentation systems.</p>
      <p>• Documented the AI Lead Pipeline, automated stage tracking (New → Contacted → Converted), and email follow-up reminders.</p>
      <p>🔗 <a href="https://formgrid.dev" target="_blank" rel="noreferrer" className="text-emerald-400 underline">https://formgrid.dev</a> · <a href="https://github.com/allenarduino/formgrid" target="_blank" rel="noreferrer" className="text-teal-400 underline">GitHub Open Source</a></p>
    </div>
  ),
  skills: (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div><span className="text-emerald-400 font-bold">Frontend:</span> React 18, TypeScript, JavaScript, Tailwind CSS, Context API, Recharts</div>
      <div><span className="text-teal-400 font-bold">Backend & APIs:</span> Node.js, REST APIs, MongoDB, Express</div>
      <div><span className="text-emerald-400 font-bold">Tools & Standards:</span> Git, Figma, MS Office Suite, WCAG 2.1 A11y, Core Web Vitals</div>
      <div><span className="text-amber-400 font-bold">Technical Writing:</span> Documentation Systems, Component Libraries, Responsive Design</div>
    </div>
  ),
  projects: (
    <div className="space-y-1.5 text-xs">
      <p>🚀 <strong className="text-white">Selected Works:</strong></p>
      <p>• <span className="text-emerald-300">Nordhem:</span> Minimalist Scandinavian apparel & e-commerce</p>
      <p>• <span className="text-teal-300">FormFlow:</span> Dynamic form & workflow builder with Supabase</p>
      <p>• <span className="text-emerald-400">Mcsteeze Lounge:</span> Hospitality & brand showcase platform</p>
      <p>• <span className="text-amber-300">Pulse Landing:</span> High-conversion SaaS landing experience</p>
    </div>
  ),
  nordhem: (
    <div className="space-y-1 text-xs">
      <p>🛍️ <strong className="text-white">Nordhem — Minimalist E-Commerce</strong></p>
      <p className="text-[#8892a4]">Scandinavian fashion label with lookbooks, catalog filtering & reactive cart.</p>
      <p>🔗 <a href="https://nordhem-blue.vercel.app" target="_blank" rel="noreferrer" className="text-emerald-400 underline">https://nordhem-blue.vercel.app</a></p>
    </div>
  ),
  contact: (
    <div className="space-y-1 text-xs text-[#8892a4]">
      <p>📧 <strong className="text-white">Email:</strong> <a href="mailto:deve.kad.tech@gmail.com" className="text-emerald-400 underline">deve.kad.tech@gmail.com</a></p>
      <p>💼 <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-teal-400 underline">@kaddev</a></p>
      <p>💻 <strong className="text-white">GitHub:</strong> <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-emerald-400 underline">@devkad09</a></p>
    </div>
  ),
  hire: (
    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs space-y-1">
      <p className="text-emerald-400 font-bold">🟢 Status: Available for Technical Writing & Frontend Contracts</p>
      <p className="text-slate-300">Ready to author clean documentation systems, API specifications, and polished React applications.</p>
    </div>
  ),
};

const DevTerminal = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: "whoami", response: COMMANDS["whoami"] },
  ]);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    if (COMMANDS[cleanCmd]) {
      setHistory((prev) => [...prev, { command: cleanCmd, response: COMMANDS[cleanCmd] }]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cleanCmd,
          response: (
            <span className="text-red-400 text-xs">
              Command not found: "{cleanCmd}". Try: <code className="text-white font-mono">whoami</code>, <code className="text-white font-mono">skills</code>, <code className="text-white font-mono">projects</code>, <code className="text-white font-mono">contact</code>, <code className="text-white font-mono">hire</code>, or <code className="text-white font-mono">clear</code>
            </span>
          ),
        },
      ]);
    }
    setInput("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("npx kaddev-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass card-border rounded-2xl overflow-hidden font-mono text-sm shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-[#0c101d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-[#8892a4] font-sans font-semibold ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            kaddev-interactive-shell ~ zsh
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] font-sans text-[#8892a4] hover:text-white transition-colors bg-white/05 px-2.5 py-1 rounded-lg border border-white/10 cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? "Copied npx command!" : "Copy CLI command"}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 bg-[#070a13] space-y-4 max-h-[360px] overflow-y-auto font-mono text-xs">
        <p className="text-[#8892a4]">
          Welcome to <span className="text-emerald-400 font-bold">KadDev Terminal v2.0</span>. Click prompt pills below or type commands!
        </p>

        {/* Command Pill Shortcuts */}
        <div className="flex flex-wrap gap-2 pt-1 font-sans">
          {["whoami", "formgrid", "skills", "projects", "nordhem", "contact", "hire", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-white/05 border border-white/10 text-xs text-[#8892a4] hover:text-emerald-300 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-150 flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 text-emerald-400" /> {cmd}
            </button>
          ))}
        </div>

        {/* Command History */}
        <div className="space-y-3 pt-2">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400">
                <span>❯</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-white/10">{item.response}</div>
            </div>
          ))}
        </div>

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input) runCommand(input);
          }}
          className="flex items-center gap-2 pt-2 text-emerald-400"
        >
          <span>❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'skills', 'projects', 'contact'..."
            className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-[#8892a4]/50"
          />
        </form>
      </div>
    </div>
  );
};

export default DevTerminal;
