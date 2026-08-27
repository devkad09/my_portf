import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";
import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <p className="section-eyebrow justify-center">
            Let's Connect
          </p>
          <h2 className="section-heading">
            Get in touch & <span className="text-blue-400">collaborate</span>
          </h2>
          <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
            Have a technical writing project, documentation inquiry, or engineering opportunity? Drop me a message below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* LEFT — Info & Brand Links */}
          <div className="bento-card space-y-8">
            <div>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white">Contact Information</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Reach out via email, LinkedIn, or GitHub. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:deve.kad.tech@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:bg-red-50/50 transition-all group dark:bg-slate-950/60 dark:border-slate-800/80 dark:hover:border-red-500/40 dark:hover:bg-slate-950"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400">
                  <GmailLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors dark:text-white dark:group-hover:text-red-400">deve.kad.tech@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kaddev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group dark:bg-slate-950/60 dark:border-slate-800/80 dark:hover:border-blue-500/40 dark:hover:bg-slate-950"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                  <LinkedinLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn Profile</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">linkedin.com/in/kaddev</p>
                </div>
              </a>

              <a
                href="https://github.com/devkad09"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all group dark:bg-slate-950/60 dark:border-slate-800/80 dark:hover:border-slate-600 dark:hover:bg-slate-950"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <GithubLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">GitHub Organization</p>
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-300">github.com/devkad09</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="bento-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-sm dark:bg-emerald-950/80 dark:border-emerald-500/40 dark:text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your inquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs py-2.5 px-5 mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Project Category / Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Technical Documentation / API Specifications"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Message Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, deliverables, or timeline..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm py-4 cursor-pointer"
                >
                  {loading ? "Sending Message..." : <>Send Message <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
