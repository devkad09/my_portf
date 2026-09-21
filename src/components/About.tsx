import { MapPin, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO, PERSONALITY_DETAILS } from "@/data/portfolioData";
import SectionLabel from "./SectionLabel";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white border-b border-slate-100 scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 items-start">
          {/* Left Column: Natural Portrait Photo */}
          <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/profile.jpg"
                  alt="Kelvin Atsu Djayouri - Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 flex items-center justify-between font-mono text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Accra, Ghana 🇬🇭</span>
              </span>
              <span className="text-slate-400">GMT+0</span>
            </div>

            {/* Quick Personal Snapshot */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white font-mono text-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                CURRENT FOCUS
              </span>
              <p className="text-slate-700 font-sans text-xs leading-relaxed">
                Frontend excellence + active backend study (Python, Node.js, REST APIs & PostgreSQL).
              </p>
            </div>
          </div>

          {/* Right Column: Story & Personality */}
          <div className="space-y-8">
            <div className="space-y-3">
              <SectionLabel number="03" label="ABOUT" />
              <h2
                id="about-heading"
                className="section-heading text-3xl sm:text-5xl"
              >
                A LITTLE ABOUT ME
              </h2>
            </div>

            {/* Exact conversational copy requested by Kelvin */}
            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutCopy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Personality Details: Currently Learning & Next Up */}
            <div className="grid gap-3 sm:grid-cols-2 pt-2 font-mono text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5">
                <span className="font-bold text-slate-900 block text-xs">
                  CURRENTLY LEARNING
                </span>
                <ul className="space-y-1 text-slate-600 font-sans text-xs">
                  {PERSONALITY_DETAILS.currentlyLearning.map((item, idx) => (
                    <li key={idx} className="flex items-baseline gap-1.5">
                      <span className="text-blue-600 font-mono font-bold">&bull;</span>
                      <span className="font-semibold text-slate-800 font-mono text-[11px]">{item.name}:</span>
                      <span className="text-slate-600 text-xs">{item.context}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block text-xs">
                    NEXT UP
                  </span>
                  <p className="text-slate-700 font-sans text-xs leading-relaxed font-medium">
                    {PERSONALITY_DETAILS.nextUp}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/80 font-mono text-[11px] text-slate-500">
                  <span>Aim: Ship clean, dependable software that solves actual problems.</span>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-1.5 hover:underline underline-offset-4 py-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/devkad09</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-1.5 hover:underline underline-offset-4 py-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/kaddev</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
