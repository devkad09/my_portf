const heroMetrics = [
  { label: "Projects shipped", value: "+20" },
  { label: "Launch goals met", value: "+14" },
  { label: "Focus", value: "Conversion" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="hero-fade" />
      <div className="glow-ring" />

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="hero-badge">Frontend engineering for ambitious teams</div>

            <div className="space-y-6">
              <h1 className="section-heading">
                I craft
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
                  polished digital products
                </span>
                for ambitious brands.
              </h1>
              <p className="section-copy">
                I help startups and product teams bring polished React applications to market with thoughtful UX, accessible interfaces, and reliable frontend performance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">View projects</a>
              <a href="#contact" className="btn-secondary">Talk with me</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroMetrics.map((item) => (
                <div key={item.label} className="glass-panel rounded-[2rem] p-6 text-center">
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-[3rem] border-white/10 p-8 sm:p-10">
              <div className="space-y-6">
                <div className="inline-flex rounded-full bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                  Product-first frontend
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white">Design systems, performance, and launch-ready UI.</h2>
                <p className="text-white/65 leading-relaxed">
                  I partner with product teams to build scalable React experiences that are easy to maintain and delightful for users.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Design systems</p>
                    <p className="mt-3 text-xl font-black text-white">Atomic UI</p>
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Performance</p>
                    <p className="mt-3 text-xl font-black text-white">Fast interactions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-accent-secondary/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
