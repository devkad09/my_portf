import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SectionLabel from "./SectionLabel";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-white border-b border-slate-100 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel number="06" label="LET'S TALK" />
          <h2 id="contact-heading" className="section-heading text-3xl sm:text-5xl">
            LET’S BUILD SOMETHING.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            Have an idea, project, opportunity, or just want to talk tech?
          </p>
        </div>

        {/* Contact Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/90 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-slate-500 font-bold tracking-wider">
                Direct Email
              </span>
              <p className="font-mono text-lg sm:text-2xl font-bold text-slate-900 break-all">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-primary font-mono text-xs font-bold tracking-wider"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary font-mono text-xs font-bold tracking-wider"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Row: [GITHUB] & [LINKEDIN] */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-600">
            <span>Connect on professional networks:</span>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-900 transition-colors shadow-2xs font-bold tracking-wider"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-900 transition-colors shadow-2xs font-bold tracking-wider"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
