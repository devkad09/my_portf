import DevTerminal from "./DevTerminal";

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-6 bg-white">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      {/* Header */}
      <div className="mb-16 space-y-3">
        <p className="section-eyebrow">
          About Me
        </p>
        <h2 className="section-heading max-w-2xl">
          Technical Writer & <span className="text-[#2563eb]">Software Communicator</span>
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-start">
        {/* LEFT — Bio text */}
        <div className="space-y-8">
          <div className="space-y-5 text-[#475569] leading-relaxed">
            <p className="text-base sm:text-lg">
              I'm a Technical Writer at <strong className="text-[#0f172a]">Formgrid</strong> specializing in developer documentation, API specifications, and component guides. I bridge the gap between complex software architecture and developer clarity.
            </p>
            <p className="text-base sm:text-lg">
              Over 3 years, I've worked across technical documentation systems, component libraries, and React/TypeScript codebases. My sweet spot is distilling sophisticated API concepts and design systems into clear, actionable guides.
            </p>
            <p className="text-base sm:text-lg">
              At Formgrid, I craft developer docs, API specs, and component standards that help teams build better software faster.
            </p>
          </div>

          {/* Quick tags */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Core Competencies & Tools:</p>
            <div className="flex flex-wrap gap-2">
              {["Technical Writing", "Developer Docs", "API Specs", "Markdown", "React", "TypeScript", "Design Systems", "Figma"].map((tech) => (
                <span key={tech} className="tag-gray">{tech}</span>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex items-center gap-4 pt-2">
            <a href="#contact" className="btn-primary text-xs py-3 px-6">
              Work With Me
            </a>
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#2563eb] hover:underline"
            >
              View GitHub Profile →
            </a>
          </div>
        </div>

        {/* RIGHT — Terminal / Interactive Card */}
        <div className="bg-[#0f172a] rounded-3xl p-6 shadow-2xl border border-[#1e293b]">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#334155]">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
            <span className="ml-2 text-xs font-mono text-[#94a3b8]">kaddev-cli — bash</span>
          </div>
          <DevTerminal />
        </div>
      </div>
    </div>
  </section>
);

export default About;
