const About = () => (
  <section id="about" className="py-24 px-6 md:px-12 bg-editorial-white">
    <div className="container mx-auto max-w-7xl">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        <div className="lg:col-span-5">
          <div className="relative mb-12 group mx-auto max-w-sm lg:max-w-md lg:mx-0">
            <div className="aspect-[4/5] w-full overflow-hidden bg-editorial-border">
              <img 
                src="/assets/profile.jpg" 
                alt="Kelvin Atsu" 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-1/2 h-1/2 bg-editorial-accent/10 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-editorial-text mb-6">
            The Philosophy<br />
            <span className="italic text-editorial-accent">of Design.</span>
          </h2>
          <div className="w-16 h-[1px] bg-editorial-text/20 mb-8" />
          <p className="text-xl text-editorial-muted font-serif italic">
            "Build with purpose,<br />design with empathy."
          </p>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-7 font-sans text-editorial-text text-lg leading-relaxed">
          <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:-mt-1 first-letter:text-editorial-accent">
            My work exists at the intersection of aesthetic beauty and technical precision. Based in Accra, Ghana, I have dedicated my career to crafting user interfaces that feel effortless to navigate while maintaining robust, scalable underlying architecture.
          </p>
          
          <p className="mb-12">
            Currently engineering experiences at Formgrid.dev, I specialize in React, TypeScript, and modern CSS architectures. I believe that a truly premium digital experience is not just about how it looks, but how it responds to the human touch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 pt-12 border-t border-editorial-border">
            
            <div>
              <span className="block text-xs uppercase tracking-widest text-editorial-accent mb-2">01. Architecture</span>
              <h3 className="font-serif text-xl text-editorial-text mb-2">Clean Code</h3>
              <p className="text-editorial-muted text-sm text-balance">
                Building scalable, maintainable systems that stand the test of time and technical debt.
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-widest text-editorial-accent mb-2">02. Aesthetics</span>
              <h3 className="font-serif text-xl text-editorial-text mb-2">Creative Design</h3>
              <p className="text-editorial-muted text-sm text-balance">
                Translating complex requirements into simple, elegant, and compelling visual interfaces.
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-widest text-editorial-accent mb-2">03. Adaptability</span>
              <h3 className="font-serif text-xl text-editorial-text mb-2">Continuous Learning</h3>
              <p className="text-editorial-muted text-sm text-balance">
                Rapidly assimilating new paradigms and technologies to stay at the cutting edge.
              </p>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-widest text-editorial-accent mb-2">04. Empathy</span>
              <h3 className="font-serif text-xl text-editorial-text mb-2">User-Centric Focus</h3>
              <p className="text-editorial-muted text-sm text-balance">
                Always prioritizing the human element in every interaction and state change.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
