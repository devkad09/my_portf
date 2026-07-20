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
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <p className="section-eyebrow justify-center">
            Let's Connect
          </p>
          <h2 className="section-heading">
            Get in touch & <span className="text-[#2563eb]">collaborate</span>
          </h2>
          <p className="section-copy mx-auto max-w-xl text-base sm:text-lg">
            Have a technical writing project, documentation inquiry, or engineering opportunity? Drop me a message below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          {/* LEFT — Info & Brand Links */}
          <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-md space-y-8">
            <div>
              <h3 className="font-bold text-2xl text-[#0f172a]">Contact Information</h3>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Reach out via email, LinkedIn, or GitHub. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:deve.kad.tech@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#bfdbfe] hover:bg-[#eff6ff] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#ea4335]">
                  <GmailLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748b] uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#2563eb]">deve.kad.tech@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kaddev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#bfdbfe] hover:bg-[#eff6ff] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0a66c2]">
                  <LinkedinLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748b] uppercase tracking-wider">LinkedIn Profile</p>
                  <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#2563eb]">linkedin.com/in/kaddev</p>
                </div>
              </a>

              <a
                href="https://github.com/devkad09"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#bfdbfe] hover:bg-[#eff6ff] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0f172a]">
                  <GithubLogo className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#64748b] uppercase tracking-wider">GitHub Organization</p>
                  <p className="text-sm font-semibold text-[#0f172a] group-hover:text-[#2563eb]">github.com/devkad09</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mx-auto text-[#166534]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-2xl text-[#0f172a]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#475569]">
                  Thank you for reaching out. I'll review your inquiry and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs py-2.5 px-5 mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334155]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334155]">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334155]">Project Category / Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Technical Documentation / API Specifications"
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#334155]">Message Details</label>
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
                  className="btn-primary w-full justify-center text-sm py-4"
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
