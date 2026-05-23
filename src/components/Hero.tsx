import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Frontend Engineer",
  "React Developer",
  "UI/UX Craftsman",
  "Product Builder",
];

const metrics = [
  { value: "20+", label: "Projects Shipped", accent: "violet" },
  { value: "3+", label: "Years Building", accent: "cyan" },
  { value: "100%", label: "Remote Ready", accent: "emerald" },
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background glows */}
      <div className="glow-violet w-[500px] h-[500px] -top-40 -left-40 opacity-60 animate-pulse-glow" />
      <div className="glow-cyan w-[400px] h-[400px] top-1/3 -right-32 opacity-40 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="glow-emerald w-[300px] h-[300px] bottom-0 left-1/3 opacity-30" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] items-center">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Available badge */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[11px] font-semibold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for new projects
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
                Hi, I'm{" "}
                <span className="grad-violet-cyan">KAD</span>
                <br />
                <span className="text-[#8892a4] text-3xl sm:text-4xl lg:text-5xl font-medium">
                  I'm a{" "}
                  <span className="text-white typewriter">{displayed}</span>
                </span>
              </h1>
            </div>

            <p className="section-copy max-w-xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
              I craft high-performance React applications with pixel-perfect UIs, silky animations, and code that scales. Turning ambitious ideas into digital products people love.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <a href="#projects" className="btn-primary">
                <Sparkles className="w-4 h-4" /> View my work
              </a>
              <a href="#contact" className="btn-outline">
                Let's talk
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              {[
                { icon: Github, href: "https://github.com/devkad09", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kaddev", label: "LinkedIn" },
                { icon: Mail, href: "mailto:deve.kad.tech@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 text-[#8892a4] transition hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <div className="h-px w-8 bg-white/15" />
              <span className="text-[11px] font-medium text-[#8892a4] tracking-wide">Follow along</span>
            </div>
          </div>

          {/* RIGHT — stat cards + decoration */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {/* Rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full border border-dashed border-violet-500/15 animate-spin-slow" />
            </div>

            {/* Main card */}
            <div className="glass card-border rounded-3xl p-8 space-y-6 animate-float">
              {/* Code-like display */}
              <div className="rounded-xl bg-black/40 border border-white/05 p-5 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[#8892a4] text-[10px]">profile.tsx</span>
                </div>
                <p><span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> = {"{"}</p>
                <p className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">'KAD'</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">'Frontend Eng.'</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">stack</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'TS'</span>],</p>
                <p className="pl-4"><span className="text-emerald-400">available</span>: <span className="text-cyan-400">true</span>,</p>
                <p>{"}"}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl bg-white/03 border border-white/06 p-3 text-center">
                    <p className={`font-heading font-bold text-xl ${
                      m.accent === "violet" ? "grad-violet" :
                      m.accent === "cyan" ? "grad-violet-cyan" : "grad-cyan-emerald"
                    }`}>{m.value}</p>
                    <p className="text-[9px] font-medium text-[#8892a4] uppercase tracking-widest mt-1 leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -right-4 tag-violet animate-float" style={{ animationDelay: "0.5s" }}>
              ⚡ React 18
            </div>
            <div className="absolute -bottom-4 -left-4 tag-cyan animate-float" style={{ animationDelay: "1s" }}>
              🎯 TypeScript
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#8892a4] hover:text-violet-400 transition-colors duration-300 group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-violet-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
