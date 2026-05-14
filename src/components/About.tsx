const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        STORY.
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto">

          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Professional Summary</h2>
              <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-gradient leading-tight">
                ENGINEERING <br />
                THE WEB.
              </h3>
            </div>

            <p className="text-xl text-white/60 leading-relaxed font-light">
              I am a <span className="text-white font-medium">Frontend Developer</span> with a strong foundation in modern web technologies. I hold a <span className="text-accent font-medium">Diploma in Information Technology</span> from Accra Technical University and am currently pursuing my Top-Up degree.
            </p>

            <p className="text-lg text-white/40 leading-relaxed font-light">
              My expertise lies in building responsive, scalable, and high-fidelity user interfaces. Using HTML, CSS, JavaScript, and React, I transform complex requirements into clean, maintainable, and highly functional real-world applications.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-sm font-bold text-white mb-2 tracking-widest uppercase">Education</div>
                <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">Accra Technical University (IT Diploma)</p>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-2 tracking-widest uppercase">Core Stack</div>
                <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">HTML, CSS, JS, React, Responsive UI</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
