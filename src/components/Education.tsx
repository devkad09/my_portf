import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 reveal">
            <p className="section-title">Academic path</p>
            <h2 className="section-heading">Foundation and growth.</h2>
            <p className="section-copy mt-6">
              My formal education in Information Technology provides the structural backbone for my creative and technical pursuits.
            </p>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-accent/10 blur-3xl opacity-50" />
              <div className="glass-panel relative rounded-[3rem] border-white/10 p-8 md:p-12 transition-all duration-700 hover:border-accent/30">
                <div className="flex flex-col gap-8 md:flex-row items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-accent shadow-lg shadow-accent/10 transition-transform duration-500">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-accent">2022 — Present</p>
                    <h3 className="mt-4 text-3xl font-black text-white">Accra Technical University</h3>
                    <div className="mt-5 space-y-3">
                      <p className="text-white/80 text-xl font-medium">Diploma in Information Technology</p>
                      <p className="text-white/50 text-base">Currently pursuing Top-Up Degree</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {["Software Eng.", "Data Structures", "Networking", "Web Tech"].map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

