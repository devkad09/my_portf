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
  <section id="about" className="py-20 md:py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 reveal">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
          Building Digital <span className="text-primary">Masterpieces</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
          I combine technical precision with creative flair to build interfaces that don't just work—they inspire.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Profile Visual */}
        <div className="md:col-span-5 reveal">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bento-card group aspect-square p-4">
              <img 
                src="/assets/profile.jpg" 
                alt="Kelvin Atsu Djayouri" 
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Based in</p>
                <p className="text-lg font-bold">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Traits & Narrative */}
        <div className="md:col-span-7 space-y-10">
          <div className="grid sm:grid-cols-2 gap-4 reveal">
            {traits.map((t) => (
              <div
                key={t.title}
                className="bento-card group p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">{t.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
            <div className="bento-card group p-6 bg-primary/5 border-primary/20 sm:col-span-2 md:col-span-1 flex flex-col justify-center items-center text-center">
              <Heart className="w-8 h-8 text-primary mb-3 animate-pulse" />
              <p className="font-bold">Passionate about User Experience</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed reveal">
            <p>
              As a <strong>Frontend Engineer</strong>, I focus on the intersection of design and development. 
              My work at <strong>Formgrid.dev</strong> and my studies at <strong>Accra Technical University</strong> 
              have taught me that the best user experiences are those that feel effortless.
            </p>
            <p>
              I specialize in <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, 
              always aiming for code that is as elegant as the UI it powers. My philosophy is simple: 
              <em> build with purpose, design with empathy.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
