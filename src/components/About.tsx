import { Code, Palette, Zap, Rocket, Heart } from "lucide-react";

const traits = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Writing maintainable, well-structured code that scales.",
    delay: "0s",
  },
  {
    icon: Palette,
    title: "Creative Design",
    desc: "Crafting visually compelling interfaces with attention to detail.",
    delay: "0.2s",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "Quickly adapting to new technologies and frameworks.",
    delay: "0.4s",
  },
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16 reveal" />

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Profile Sidebar */}
        <div className="lg:w-1/3 space-y-8 reveal flex-shrink-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-48 h-48 rounded-2xl bg-secondary border-2 border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center text-5xl font-heading font-bold text-primary shadow-xl shadow-primary/5">
              KD
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold font-heading">Kelvin Atsu Djayouri</h3>
              <p className="text-primary font-medium mt-1">Frontend Engineer</p>
            </div>
          </div>

          <div className="grid gap-4">
            {traits.map((t) => (
              <div
                key={t.title}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <t.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading font-semibold text-sm mb-1">{t.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Content - Approx 200 words */}
        <div className="flex-1 reveal space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p>
              I am a dedicated <strong>Frontend Engineer</strong> and Information Technology  student at <strong>Accra Technical University</strong>, 
              driven by a passion for creating seamless digital experiences. My journey in tech is defined by a 
              commitment to blending aesthetic design with technical excellence, ensuring that every interface 
              I build is both intuitive and high-performing.
            </p>
            
            <p>
              Currently, at <strong>Formgrid.dev</strong>, I focus on defining technical documentation standards 
              and crafting modular interface components. This role has sharpened my expertise in building scalable 
              systems using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. 
              I believe that great software is a form of communication it should be as readable to developers 
              as it is accessible to users.
            </p>

            <p>
              Beyond technical skills, I am a firm advocate for the <em>"Invisibly Great Design"</em> philosophy—where 
              complexity is handled behind the scenes to provide a frictionless user experience. Whether re-engineering 
              legacy platforms or exploring the latest in web performance, I strive to push the boundaries of what’s 
              possible in the browser.
            </p>

            <p>
              My ultimate goal is to build products that make a meaningful impact, empowering local communities 
              through technology while contributing to the global developer ecosystem.
            </p>
          </div>

          <div className="pt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
