import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="py-24 px-6 md:px-12 bg-secondary/30">
    <div className="container mx-auto max-w-7xl">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4 reveal">Education</h2>
        <h3 className="font-heading text-4xl sm:text-5xl text-foreground mb-6 reveal">
          Academic <span className="text-accent">Background.</span>
        </h3>
        <p className="text-lg text-muted-foreground reveal">
          My formal education in Information Technology provides the theoretical foundation for my technical skills.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto reveal">
        {/* Timeline dot and line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-border" />

        <div className="relative pl-16 md:pl-0 md:text-center">
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />

          <div className="md:mt-12 p-8 rounded-3xl bg-background border border-border hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5 group">
            <div className="mb-4 inline-block p-3 bg-secondary rounded-2xl group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div className="text-accent text-sm font-bold tracking-wider uppercase mb-2">2022 — 2026</div>
            <h4 className="font-heading text-2xl font-bold text-foreground mb-1">
              Accra Technical University
            </h4>
            <p className="text-muted-foreground text-lg">
              BSc Information Technology (IT)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
