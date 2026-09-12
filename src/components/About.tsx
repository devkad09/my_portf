import {
  Sparkles,
  MapPin,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Code2,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-slate-50/60 border-t border-b border-slate-200/80"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Column: Portrait & Details */}
          <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-2.5 shadow-sm">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 relative group">
                <img
                  src="/profile.jpg"
                  alt={`${PERSONAL_INFO.name} - Frontend Developer`}
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.02] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-0.5">
                  <p className="font-display font-bold text-lg">{PERSONAL_INFO.name}</p>
                  <p className="text-xs text-slate-200 font-mono">Frontend Developer</p>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 pt-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Standard Card */}
            <div className="mt-4 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col xxs:flex-row xxs:items-center justify-between gap-1.5 text-xs font-mono">
              <span className="text-slate-600 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Development Standard:</span>
              </span>
              <span className="text-slate-900 font-semibold">
                Responsive & Accessible
              </span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="section-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>About Me</span>
              </p>
              <h2 id="about-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
                Passionate about frontend craft.{" "}
                <span className="text-slate-500">
                  Actively expanding into full-stack.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-600">
              <p>
                I’m a frontend developer specializing in building clean, accessible, and high-performance interfaces with <strong className="text-slate-900 font-semibold">React</strong>, <strong className="text-slate-900 font-semibold">TypeScript</strong>, and <strong className="text-slate-900 font-semibold">Tailwind CSS</strong>.
              </p>
              <p>
                Currently documenting developer APIs at{" "}
                <a
                  href="https://formgrid.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Formgrid.dev</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
                , while actively learning <strong className="text-slate-900 font-semibold">Node.js</strong> and <strong className="text-slate-900 font-semibold">Supabase</strong> to grow into full-stack development.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[11px] font-mono text-slate-500 block">Core Focus</span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5 block">Frontend & UX</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[11px] font-mono text-slate-500 block">Writing & Docs</span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5 block">Formgrid.dev</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[11px] font-mono text-slate-500 block">Education</span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5 block">Diploma in IT, ATU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
