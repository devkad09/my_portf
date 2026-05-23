const highlights = [
  { emoji: "⚡", label: "Performance", desc: "Sub-second load times" },
  { emoji: "♿", label: "Accessibility", desc: "WCAG 2.1 compliant" },
  { emoji: "📱", label: "Responsive", desc: "Every screen, flawless" },
  { emoji: "🔥", label: "Modern Stack", desc: "React 18 + TypeScript" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
      <div className="glow-violet w-[600px] h-[400px] -right-60 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none absolute" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <p className="section-eyebrow mb-4">
            <span className="w-5 h-px bg-violet-400 rounded-full" />
            About me
          </p>
          <h2 className="section-heading max-w-2xl">
            Building for the{" "}
            <span className="grad-violet-cyan">intersection</span>
            {" "}of design & engineering
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] items-start">
          {/* LEFT — text */}
          <div className="space-y-8 reveal">
            <div className="space-y-5">
              <p className="section-copy text-base">
                I'm a frontend engineer based in Ghana with a passion for building products that feel as good as they look. I bridge the gap between beautiful design and robust engineering—every pixel intentional, every interaction deliberate.
              </p>
              <p className="section-copy text-base">
                Over 3 years, I've partnered with founders, agencies, and product teams to ship React applications that are fast, accessible, and genuinely delightful to use. My sweet spot is turning complex problems into elegant digital experiences.
              </p>
              <p className="section-copy text-base">
                When I'm not coding, I'm studying design systems, exploring new frontend patterns, or contributing to the broader dev community.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Tailwind CSS", "Figma", "MongoDB"].map((tech) => (
                <span key={tech} className="tag-gray">{tech}</span>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#contact" className="btn-primary text-sm">
                Work with me
              </a>
              <a
                href="https://github.com/devkad09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#8892a4] hover:text-violet-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* RIGHT — cards */}
          <div className="space-y-4 reveal">
            {/* Large stat */}
            <div className="glass card-border rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-heading font-bold text-4xl grad-violet-cyan">3+</p>
                  <p className="text-[11px] font-medium text-[#8892a4] uppercase tracking-widest mt-2">Years experience</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-4xl grad-cyan-emerald">20+</p>
                  <p className="text-[11px] font-medium text-[#8892a4] uppercase tracking-widest mt-2">Projects shipped</p>
                </div>
              </div>
              <div className="mt-6 line-sep" />
              <p className="mt-5 text-sm text-[#8892a4] leading-relaxed">
                Focused on <span className="text-violet-300 font-medium">conversion-driven UIs</span>, scalable architecture, and shipping on time.
              </p>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass rounded-xl p-4 transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-500/05 cursor-default"
                >
                  <span className="text-2xl">{h.emoji}</span>
                  <p className="mt-2 font-semibold text-white text-sm">{h.label}</p>
                  <p className="text-[11px] text-[#8892a4] mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
