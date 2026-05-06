import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="py-24 bg-card/50">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
        <span className="text-primary">Education</span>
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal" />

      <div className="relative max-w-2xl mx-auto reveal">
        {/* Timeline dot and line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

        <div className="relative pl-16 md:pl-0 md:text-center">
          <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <GraduationCap className="w-3.5 h-3.5 text-primary-foreground" />
          </div>

          <div className="md:mt-8 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
            <span className="text-primary text-sm font-semibold">2022 — 2026</span>
            <h3 className="font-heading text-xl font-bold mt-1">
              Accra Technical University
            </h3>
            <p className="text-muted-foreground mt-1">
              BSc Information Technology (IT)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
