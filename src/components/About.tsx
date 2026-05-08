const About = () => (
  <section id="about" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
    <div className="container mx-auto max-w-7xl">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

        <div className="lg:col-span-5 animate-fade-up">
          <div className="relative group">
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-secondary">
              <img
                src="/assets/profile.jpg"
                alt="Kelvin Atsu Djayouri"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10 animate-pulse" />
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">About Me</h2>
          <h3 className="font-heading text-4xl sm:text-5xl text-foreground mb-8 leading-tight">
            Building the next generation of <span className="text-accent">digital experiences.</span>
          </h3>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a dedicated <span className="text-foreground font-medium">Frontend Developer</span> with a strong foundation in Information Technology, holding a <span className="text-foreground font-medium">Diploma from ATU</span>. My journey in tech is driven by a passion for creating clean, intuitive, and high-performance user interfaces.
            </p>
            <p>
              With a background in IT, I bring a holistic approach to web development, ensuring that every project is not only visually stunning but also technically sound, scalable, and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
            <div className="p-6 bg-secondary rounded-2xl border border-border hover:border-accent/50 transition-colors">
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">Technical Excellence</h4>
              <p className="text-muted-foreground text-sm">Focused on clean code and robust architecture using React and TypeScript.</p>
            </div>
            <div className="p-6 bg-secondary rounded-2xl border border-border hover:border-accent/50 transition-colors">
              <h4 className="font-heading text-xl font-bold text-foreground mb-2">User-Centric Design</h4>
              <p className="text-muted-foreground text-sm">Prioritizing user experience and accessibility in every line of code.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
