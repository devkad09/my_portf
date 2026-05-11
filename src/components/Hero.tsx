const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-accent-secondary/10 blur-[120px] rounded-full animate-float pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.3em] text-accent uppercase glass rounded-full">
            Available for Freelance & Jobs
          </span>
          
          <h1 className="font-heading text-7xl sm:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gradient mb-8">
            CREATING <br />
            <span className="text-gradient-accent">DIGITAL</span> <br />
            MAGNIFICENCE.
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I'm <span className="text-white font-medium">Kelvin Atsu Djayouri</span>, a Frontend Developer crafting high-performance, immersive web experiences that redefine boundaries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glass hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-2 group"
            >
              Selected Works
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </button>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/70 hover:text-white px-8 py-5 rounded-full font-bold transition-all flex items-center gap-2"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-float">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
};

export default Hero;

