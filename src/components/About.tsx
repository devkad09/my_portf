import DevTerminal from "./DevTerminal";

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-6 relative">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="mb-16 space-y-3">
        <p className="section-eyebrow">
          About Me
        </p>
        <h2 className="section-heading max-w-2xl">
          Technical Writer & <span className="grad-violet-cyan">Software Communicator</span>
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-start">
        {/* LEFT — Bio text */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-lg">
            <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 shadow-md shadow-blue-500/20">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-full h-full rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Kelvin Atsu Djayouri</h3>
              <p className="text-xs text-blue-400 font-semibold">Technical Writer & Developer Advocate</p>
              <p className="text-xs text-slate-400 mt-0.5">Accra, Ghana · Remote Worldwide</p>
            </div>
          </div>

          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p className="text-base sm:text-lg">
              I'm a Technical Writer at <strong className="text-white font-semibold">Formgrid</strong> specializing in developer documentation, API specifications, and component guides. I bridge the gap between complex software architecture and developer clarity.
            </p>
            <p className="text-base sm:text-lg text-slate-400">
              Over 3 years, I've worked across technical documentation systems, component libraries, and React/TypeScript codebases. My sweet spot is distilling sophisticated API concepts and design systems into clear, actionable guides.
            </p>
            <p className="text-base sm:text-lg text-slate-400">
              At Formgrid, I craft developer docs, API specs, and component standards that help teams build better software faster.
            </p>
          </div>

          {/* Quick tags */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Competencies & Tools:</p>
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
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline"
            >
              View GitHub Profile →
            </a>
          </div>
        </div>

        {/* RIGHT — Terminal / Interactive Card */}
        <div className="bg-slate-950/90 rounded-3xl p-6 shadow-2xl border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">kaddev-cli — zsh</span>
          </div>
          <DevTerminal />
        </div>
      </div>
    </div>
  </section>
);

export default About;
