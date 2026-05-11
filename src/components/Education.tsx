import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 reveal">
            <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Academic Path</h2>
            <h3 className="font-heading text-5xl lg:text-7xl font-black text-gradient leading-tight mb-8">
              FOUNDATION <br />
              & GROWTH.
            </h3>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              My formal education in Information Technology provides the structural backbone for my creative and technical pursuits.
            </p>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full opacity-50" />
              <div className="relative glass p-12 rounded-[3rem] border-white/10 hover:border-accent/30 transition-all duration-700">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="w-10 h-10 text-accent" />
                  </div>
                  <div>
                    <div className="text-accent text-xs font-black tracking-widest uppercase mb-2">2022 — 2026</div>
                    <h4 className="font-heading text-3xl lg:text-4xl font-black text-white mb-4">
                      Accra Technical University
                    </h4>
                    <p className="text-white/60 text-xl font-light mb-6 leading-relaxed">
                      Bachelor of Science in Information Technology (IT)
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Software Eng.", "Data Structures", "Networking", "Web Tech"].map(tag => (
                        <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-3 py-1 border border-white/5 rounded-full">
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

