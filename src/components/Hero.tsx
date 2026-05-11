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
          
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-gradient mb-8 break-words uppercase">
            Building <br />
            <span className="text-gradient-accent text-glow">High-Performance</span> <br />
            Web Solutions.
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I help <span className="text-white font-medium">businesses and startups</span> build scalable, responsive, and user-centric frontend applications that drive real-world results.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto mt-4 sm:mt-0">
            <button 
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto glass hover:bg-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold transition-all duration-1000 flex items-center justify-center gap-2 group"
            >
              View Projects
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </button>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto glass hover:bg-accent hover:text-black text-accent px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black transition-all duration-1000 flex items-center justify-center gap-2"
            >
              Hire Me
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

