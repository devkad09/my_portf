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

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
              <p>
                I'm a frontend developer based in Ghana with over two years of hands-on experience building clean, responsive user interfaces. I love taking complex interface challenges and turning them into digital products that feel intuitive, fast, and effortless to navigate.
              </p>
              <p>
                My daily work centers around <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. For me, good frontend engineering is not just about making things look polished on desktop screens; it is about respecting accessibility, ensuring clean semantics, designing fluid mobile layouts, and paying close attention to rendering performance.
              </p>
              <p>
                Alongside building web applications, I work as a Technical Writer at{" "}
                <a
                  href="https://formgrid.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Formgrid.dev</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
                , where I write clear API specifications, component documentation, and integration guides. This has strengthened my ability to read code critically, understand how APIs work under the hood, and communicate technical concepts clearly.
              </p>
              <p>
                Right now, I am actively expanding my skill set into backend development. I am learning how to build RESTful APIs with <strong>Node.js</strong> and <strong>Express</strong>, working with cloud databases like <strong>Supabase</strong>, and understanding authentication patterns. My goal is simple: to become a well-rounded full-stack developer capable of turning an idea into a complete, end-to-end application.
              </p>
            </div>

            {/* Academic Journey */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-slate-600">
              <GraduationCap className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Academic Background:</span>{" "}
                Diploma in Information Technology at <strong>Accra Technical University</strong> (2024–2026), working toward a <strong>BSc in Computer Science (Top-Up)</strong> at <strong>Ghana Communication Technology University (GCTU)</strong> planned for 2027.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
