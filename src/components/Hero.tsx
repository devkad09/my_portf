import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 animate-fade-up">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight text-editorial-text mb-8">
              Crafting Digital<br />
              <span className="italic text-editorial-accent">Experiences.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-editorial-muted text-balance mb-8">
              I am a Frontend Engineer specializing in high-performance, accessible, and beautifully architected web applications.
            </p>
            
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 text-editorial-text font-medium group transition-all"
            >
              <span>Explore Portfolio</span>
              <span className="p-3 rounded-full border border-editorial-border group-hover:bg-editorial-text group-hover:text-editorial-white transition-colors">
                <ArrowDownRight className="w-4 h-4" />
              </span>
            </a>
          </div>

        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-1/3 h-[60vh] bg-editorial-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-1/4 h-[40vh] bg-[#d2c9b8]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      </div>
    </section>
  );
};

export default Hero;
