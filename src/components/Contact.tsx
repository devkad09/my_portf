import { useState } from "react";
import {
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage("Please share a brief message (at least 10 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 900));
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0f172a", "#3b82f6", "#10b981", "#cbd5e1"],
        });
      } catch (err) {
        // Fallback silently
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage("Could not submit right now. Please email me directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-slate-50/70 border-t border-slate-200/80 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-start">
          {/* Left Column: Direct channels */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="section-eyebrow">
                <Sparkles className="w-4 h-4" />
                <span>Get In Touch</span>
              </p>
              <h2 id="contact-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
                Have a project in mind?{" "}
                <span className="text-slate-500">
                  Let’s build it.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Available for frontend opportunities and freelance projects. Let's discuss your next build.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 font-mono">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:underline truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="min-w-[40px] min-h-[40px] flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">Location & Zone</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    {PERSONAL_INFO.location} • Global Remote Friendly
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2 pt-2">
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
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 flex items-center gap-2 text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {name}. I have received your message and will reply to <strong className="text-slate-900">{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="btn-secondary text-xs mt-3 min-h-[44px]"
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-display font-bold text-lg text-slate-900">
                    Send a Message
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Typical response: &lt;24 hrs
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setErrorMessage("");
                      setName(e.target.value);
                    }}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setErrorMessage("");
                      setEmail(e.target.value);
                    }}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => {
                      setErrorMessage("");
                      setMessage(e.target.value);
                    }}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-base sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50/50 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary min-h-[44px] h-11 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
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
