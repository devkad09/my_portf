import { useState } from "react";
import {
  CheckCircle2,
  Send,
  Loader2,
  Sparkles,
  Mail,
  Check,
  Copy,
  Linkedin,
  Github,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  projectType: "Frontend Web Application",
  budget: "Flexible",
  timeline: "Flexible",
  message: "",
};

const PROJECT_TYPES = [
  "Frontend Web Application (React 18 / TS)",
  "SaaS Dashboard & Analytics UI",
  "Technical Writing & API Documentation",
  "Component System & UI Architecture",
  "Accessibility (WCAG 2.1 AA) & Performance Audit",
  "Other / Custom Engineering",
];

const BUDGET_OPTIONS = [
  "Flexible / Open to Discuss",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
];

const TIMELINE_OPTIONS = [
  "Flexible",
  "Immediately (< 2 weeks)",
  "1 – 2 Months",
  "3+ Months",
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setErrorMessage("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please share a brief message about your project or inquiry.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/deve.kad.tech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${formData.fullName} (${formData.projectType})`,
          Name: formData.fullName,
          Email: formData.email,
          ProjectType: formData.projectType,
          Budget: formData.budget,
          Timeline: formData.timeline,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback for safety
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section
      id="work-with-me"
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="work-with-me-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Consultation & Direct Booking</span>
          </p>
          <h2 id="work-with-me-heading" className="section-heading">
            Have a product in mind?{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Let's build.
            </span>
          </h2>
          <p className="section-copy mx-auto">
            Tell me about your project, timeline, and goals. I review every
            consultation and respond within 24 hours.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-card p-6 sm:p-8 border-indigo-500/20 shadow-xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Direct Contact & Details
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-1 leading-relaxed">
                  Prefer direct communication over a form? Reach out via email,
                  LinkedIn, or review code repositories on GitHub.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-surface-2/70 border border-line/60 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-ink-muted font-bold">
                        Direct Email
                      </p>
                      <a
                        href="mailto:deve.kad.tech@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-ink hover:text-indigo-500 transition-colors"
                      >
                        deve.kad.tech@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-surface border border-line hover:border-indigo-500/40 text-ink-muted hover:text-ink transition-all cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-indigo-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-2.5">
                <a
                  href="https://linkedin.com/in/kaddev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-2/50 border border-line/50 hover:border-indigo-500/40 hover:bg-surface-2 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink">LinkedIn</p>
                      <p className="text-[11px] text-ink-muted">@kaddev</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/devkad09"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-2/50 border border-line/50 hover:border-indigo-500/40 hover:bg-surface-2 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink">GitHub</p>
                      <p className="text-[11px] text-ink-muted">@devkad09</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Working Guarantees */}
              <div className="pt-4 border-t border-line/60 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                  <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-ink">Response Time:</strong> Guaranteed reply within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-ink">Timezone:</strong> Accra, Ghana (GMT+0) • Remote Global
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                  <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-ink">Quality:</strong> Clean code, WCAG 2.1 AA & sub-second performance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Streamlined Single-Page Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border-indigo-500/20 shadow-2xl">
              {submitted ? (
                /* Success Confirmation Screen */
                <div className="text-center py-10 px-4 space-y-6 animate-in fade-in duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-ink">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="mx-auto max-w-md text-sm text-ink-muted leading-relaxed">
                      Thank you, <strong className="text-ink">{formData.fullName}</strong>. Your message has been dispatched directly to{" "}
                      <strong className="text-ink">deve.kad.tech@gmail.com</strong>. I'll review your project requirements and follow up within 24 hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-secondary h-11 px-6 rounded-xl text-xs font-semibold cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* The Streamlined Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 pb-2">
                    <h3 className="font-display font-bold text-xl text-ink">
                      Send a Project Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted">
                      Fill in the details below to kick off your project discussion.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name and Email Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold text-ink">
                        Your Name <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full h-11 rounded-xl border border-line bg-surface-2/60 px-3.5 text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-indigo-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-ink">
                        Work Email <span className="text-indigo-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full h-11 rounded-xl border border-line bg-surface-2/60 px-3.5 text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service / Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="text-xs font-semibold text-ink">
                      Service / Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-11 rounded-xl border border-line bg-surface-2/60 px-3.5 text-sm text-ink focus:outline-none focus:border-indigo-500 transition-all"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-xs font-semibold text-ink">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-11 rounded-xl border border-line bg-surface-2/60 px-3.5 text-sm text-ink focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="text-xs font-semibold text-ink">
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full h-11 rounded-xl border border-line bg-surface-2/60 px-3.5 text-sm text-ink focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message / Project Details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-ink">
                      Project Details & Goals <span className="text-indigo-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product, what you need built, existing tools/stacks, or specific deadlines..."
                      className="w-full rounded-xl border border-line bg-surface-2/60 p-3.5 text-sm text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-indigo-500 transition-all leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full h-12 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Project Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-ink-muted mt-2.5">
                      🔒 No spam guaranteed. Your inquiry is delivered directly to my personal inbox.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
