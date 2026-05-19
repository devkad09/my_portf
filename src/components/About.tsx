const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] items-start">
          <div className="space-y-8">
            <p className="section-title">Professional summary</p>
            <h2 className="section-heading">
              Designing polished web products with performance, clarity, and conversion in mind.
            </h2>
            <p className="section-copy">
              I’m a frontend engineer who turns strategic ideas into beautiful web interfaces. I blend strong UX thinking with React, TypeScript, and Tailwind to build products that feel premium and keep users engaged.
            </p>
            <p className="section-copy">
              Whether it’s a startup landing page, an internal dashboard, or a scalable web app, I help teams launch digital experiences that are fast, responsive, and easy to evolve.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[3rem] p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Experience</p>
                  <p className="mt-4 text-4xl font-black text-white">3+ Years</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">Key tool</p>
                  <p className="mt-4 text-4xl font-black text-white">React</p>
                </div>
              </div>
              <p className="mt-8 text-white/65 leading-relaxed">
                I focus on clean architecture, accessible UI, and performant builds across every product I ship.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[2rem] p-6 text-center">
                <p className="text-3xl font-black text-white">20+</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">Projects shipped</p>
              </div>
              <div className="glass-panel rounded-[2rem] p-6 text-center">
                <p className="text-3xl font-black text-white">100%</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">Remote friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
