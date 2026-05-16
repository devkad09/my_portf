const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 md:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.16),transparent_24%)] pointer-events-none" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-accent shadow-[0_20px_80px_-60px_rgba(124,58,237,0.4)]">
              Creative frontend for bold brands
            </span>

            <div className="space-y-6">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight text-white">
                I build <span className="text-gradient-accent">bold digital experiences</span> that launch products faster.
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-white/65 leading-relaxed font-light">
                From product landing pages to scalable React applications, I help startups and teams translate their ideas into polished, high-performing web experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                View Work
              </button>
              <button
                type="button"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
              >
                Start a Project
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "+20" },
                { label: "Launches", value: "+14" },
                { label: "Focused on", value: "Conversion" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-3xl px-5 py-5 border border-white/10">
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-[2.5rem] border border-white/10 p-8 shadow-[0_40px_120px_-60px_rgba(124,58,237,0.65)]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-sky-400/50 px-4 py-2 text-xs uppercase tracking-[0.29em] text-black font-black shadow-lg shadow-accent/20">
                  Growth-driven frontend
                </div>
                <h2 className="text-4xl font-black leading-tight text-white">
                  Modern products need sharp, reliable interfaces.
                </h2>
                <p className="text-white/60 leading-relaxed">
                  I combine product thinking with frontend craftsmanship to create experiences that feel premium, perform fast, and stay easy to maintain.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Design systems", value: "Atomic UI" },
                    { title: "Performance", value: "< 250ms" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{item.title}</p>
                      <p className="mt-3 text-xl font-black text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-accent-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

