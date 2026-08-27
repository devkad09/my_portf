import DevTerminal from "./DevTerminal";

const About = () => (
  <section id="about" className="py-24 px-4 sm:px-6 relative">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      {/* Section Header */}
      <div className="mb-16 text-center space-y-4">
        <p className="section-eyebrow justify-center">
          About Me
        </p>
        <h2 className="section-heading">
          Frontend Developer & <span className="text-blue-600 dark:text-blue-400">Technical Writer</span>
        </h2>
        <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
          Building responsive, accessible web applications and authoring developer documentation systems.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* LEFT — Bio text & Aligned Picture Card */}
        <div className="space-y-6">
          {/* Profile & About Intro Card */}
          <div className="bento-card p-6 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-500/30 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm" title="Online" />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">Kelvin Atsu Djayouri</h3>
                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer | Technical Writer</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ghana · Remote Ready · Formgrid.dev</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                Technical Writer at <a href="https://formgrid.dev" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline hover:no-underline">Formgrid.dev</a> and freelance frontend engineer with 3+ years of experience.
              </p>
            </div>
          </div>

          {/* Narrative Bio */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I have 3+ years of professional experience developing responsive, high-performance web applications and creating clear technical documentation. Experienced in React, TypeScript, JavaScript, Tailwind CSS, REST APIs, and modern frontend practices.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              At <a href="https://formgrid.dev" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline hover:no-underline">Formgrid.dev</a>, I build and maintain modern component libraries, develop clean reusable components, and create clear technical documentation for developer workflows.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              I have a strong background in reusable component systems, accessible interfaces (tested with axe DevTools for WCAG 2.1 AA compliance), and data-driven dashboards with a focus on maintainable solutions and user experience.
            </p>
          </div>

          {/* Quick tags */}
          <div className="space-y-3 pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Core Competencies & Tools:</p>
            <div className="flex flex-wrap gap-2">
              {["React 18", "TypeScript", "JavaScript", "Tailwind CSS", "Context API", "Recharts", "Node.js", "REST APIs", "Technical Writing", "Component Libraries", "WCAG 2.1", "Figma", "Microsoft Office"].map((tech) => (
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
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
            >
              View GitHub Profile →
            </a>
          </div>
        </div>

        {/* RIGHT — Terminal / Interactive Card */}
        <div className="rounded-3xl shadow-xl border border-slate-200 bg-slate-950 overflow-hidden dark:border-slate-800 dark:shadow-2xl sticky top-28">
          <DevTerminal />
        </div>
      </div>
    </div>
  </section>
);

export default About;
