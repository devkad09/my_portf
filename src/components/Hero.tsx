import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 animate-fade-up relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
              Available for Freelance & Jobs
            </div>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[1] tracking-tight text-foreground mb-8">
              Kelvin Atsu <br />
              <span className="text-accent">Djayouri.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Frontend Developer specializing in building <span className="text-foreground font-medium">high-performance, accessible, and UI/UX-focused</span> web applications that scale.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary/80 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="aspect-square w-full overflow-hidden rounded-3xl bg-secondary border border-border shadow-2xl relative z-10">
                <img
                  src="/assets/profile.jpg"
                  alt="Kelvin Atsu Djayouri"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full -z-10 group-hover:bg-accent/30 transition-colors" />
            </div>
          </div>

        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      </div>
    </section>
  );
};

export default Hero;
