import { useState } from "react";
import {
  Sparkles,
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-slate-50/70 border-t border-slate-200/80 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Centered Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <p className="section-eyebrow">
              <Sparkles className="w-4 h-4" />
              <span>Get In Touch</span>
            </p>
          </div>
          <h2 id="contact-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Have a project in mind?{" "}
            <span className="text-slate-500">
              Let’s build it.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have a project, inquiry, or question? Reach out directly via email or connect with me on GitHub and LinkedIn.
          </p>
        </div>

        {/* Contact Hub Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
          {/* Main Email Block */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Direct Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 hover:underline truncate block font-mono"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-primary min-h-[44px] h-11 px-5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[44px] h-11 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Details Row: Location & Response Time */}
          <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase">Location & Zone</p>
                <p className="font-semibold text-slate-900 truncate">
                  {PERSONAL_INFO.location} • Global Remote Friendly
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase">Typical Response</p>
                <p className="font-semibold text-slate-900">
                  Replies within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
            <p className="text-xs font-mono text-slate-500 uppercase">Social Profiles</p>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 flex items-center gap-2 text-xs font-semibold shadow-2xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 flex items-center gap-2 text-xs font-semibold shadow-2xs transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
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
