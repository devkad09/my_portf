import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => (
  <section id="education" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
    <div className="glow-violet w-[400px] h-[400px] -left-40 top-0 opacity-15 absolute pointer-events-none" />

    <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
        {/* Left */}
        <div className="space-y-6 reveal">
          <p className="section-eyebrow mb-2">
            <span className="w-5 h-px bg-violet-400 rounded-full" />
            Academic background
          </p>
          <h2 className="section-heading">
            Foundation &{" "}
            <span className="grad-violet-cyan">continuous growth</span>
          </h2>
          <p className="section-copy">
            My background in Information Technology, combined with hands-on frontend development, has shaped my approach to building scalable, user-focused digital products.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Self-taught", "Project-based", "Always learning"].map((t) => (
              <span key={t} className="tag-violet">{t}</span>
            ))}
          </div>
        </div>

        {/* Right — card */}
        <div className="reveal">
          <div className="glass card-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Background glow decoration */}
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-violet-500/10 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-[0_8px_25px_-8px_rgba(139,92,246,0.6)]">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <span className="tag-violet mb-3 inline-flex">2022 — Present</span>
                  <h3 className="font-heading font-bold text-xl text-white">Accra Technical University</h3>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-white">Diploma in Information Technology</p>
                  <p className="text-sm text-[#8892a4]">Currently pursuing Top-Up Degree</p>
                </div>

                <div className="line-sep my-2" />

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BookOpen, label: "Software Eng." },
                    { icon: BookOpen, label: "Data Structures" },
                    { icon: BookOpen, label: "Networking" },
                    { icon: BookOpen, label: "Web Tech" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-xl bg-white/03 border border-white/06 px-3 py-2.5">
                      <Icon className="h-3.5 w-3.5 text-violet-400 flex-shrink-0" />
                      <span className="text-[11px] font-medium text-[#8892a4]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom achievement */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/08 p-4">
              <Award className="h-5 w-5 text-amber-400 flex-shrink-0" />
              <p className="text-sm text-[#8892a4]">
                Supplemented with <span className="text-amber-300 font-medium">self-directed learning</span> in modern web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
