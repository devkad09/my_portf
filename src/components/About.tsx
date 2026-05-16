const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        INSPIRE.
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.75fr] items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Professional Summary</h2>
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Designing polished web products with performance, clarity, and conversion in mind.
              </h3>
            </div>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
              I’m a frontend engineer who turns strategic ideas into beautiful web interfaces. I blend strong UX thinking with React, TypeScript, and Tailwind to build products that feel premium and keep users engaged.
            </p>

            <p className="text-lg text-white/40 leading-relaxed font-light">
              Whether it’s a startup landing page, an internal dashboard, or a scalable web app, I help teams launch reliable digital experiences that are fast, responsive, and easy to evolve.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-[2.5rem] border border-white/10 p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">Experience</p>
                  <p className="mt-4 text-4xl font-black text-white">3+ Years</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">Tools</p>
                  <p className="mt-4 text-4xl font-black text-white">React</p>
                </div>
              </div>
              <p className="mt-8 text-white/50 leading-relaxed">
                I focus on clean architecture, accessible UI, and performant builds across every project.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-[2rem] border border-white/10 p-6 text-center">
                <p className="text-3xl font-black text-white">20+</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Projects shipped</p>
              </div>
              <div className="glass rounded-[2rem] border border-white/10 p-6 text-center">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">Remote friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
