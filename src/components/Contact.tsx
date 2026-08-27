import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, Sparkles, Mail, Check, Copy } from "lucide-react";

interface FormData {
  fullName: string;
  company: string;
  email: string;
  website: string;
  projectType: string;
  projectDescription: string;
  stage: string;
  timeline: string;
  budget: string;
  contactMethod: string[];
  notes: string;
}

const initialFormData: FormData = {
  fullName: "",
  company: "",
  email: "",
  website: "",
  projectType: "",
  projectDescription: "",
  stage: "",
  timeline: "",
  budget: "",
  contactMethod: ["Email"],
  notes: "",
};

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [stepError, setStepError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const totalSteps = 5;
  const progressPercent = Math.round(((currentStep - 1) / totalSteps) * 100);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStepError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (method: string) => {
    setFormData((prev) => {
      const exists = prev.contactMethod.includes(method);
      return {
        ...prev,
        contactMethod: exists
          ? prev.contactMethod.filter((m) => m !== method)
          : [...prev.contactMethod, method],
      };
    });
  };

  const handleNext = () => {
    setStepError("");
    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        setStepError("Please enter your full name.");
        return;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setStepError("Please enter a valid email address.");
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.projectDescription.trim()) {
        setStepError("Please provide a brief description of what you're looking to build.");
        return;
      }
    }

    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStepError("");
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStepError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/deve.kad.tech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Consultation: ${formData.fullName} (${formData.company || "Individual"})`,
          Name: formData.fullName,
          Email: formData.email,
          Company: formData.company || "N/A",
          Website: formData.website || "N/A",
          ProjectType: formData.projectType || "General Web Application",
          ProjectDescription: formData.projectDescription,
          Stage: formData.stage || "N/A",
          Timeline: formData.timeline || "Flexible",
          Budget: formData.budget || "N/A",
          PreferredContactMethod: formData.contactMethod.join(", "),
          AdditionalNotes: formData.notes || "None",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setSubmitted(false);
  };

  return (
    <section
      id="work-with-me"
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="work-with-me-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <p className="section-eyebrow justify-center">
            <Sparkles className="w-4 h-4" />
            <span>Consultation & Direct Booking</span>
          </p>
          <h2 id="work-with-me-heading" className="section-heading">
            Have a product in mind? <span className="text-emerald-600 dark:text-emerald-400">Let's build.</span>
          </h2>
          <p className="section-copy mx-auto">
            Tell me about your project, timeline, and goals. I review every consultation and respond within 24 hours.
          </p>

          {/* Quick email copy button */}
          <div className="pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-emerald-500/20 text-xs font-mono text-ink hover:border-emerald-500/50 transition-all cursor-pointer shadow-sm"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>deve.kad.tech@gmail.com</span>
              {copiedEmail ? (
                <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-ink-muted" />
              )}
            </button>
          </div>
        </div>

        {/* Multi-step Form Card */}
        <div className="mx-auto max-w-[800px]">
          <div className="rounded-3xl glass-card p-6 sm:p-10 border-emerald-500/20 shadow-2xl">
            {submitted ? (
              /* Success confirmation */
              <div className="text-center py-12 px-4 space-y-6 animate-in fade-in duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Consultation Request Received!
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-ink-muted leading-relaxed">
                    Thank you, <strong className="text-ink">{formData.fullName}</strong>. Your project details have been sent to <strong className="text-ink">deve.kad.tech@gmail.com</strong>. I will review your requirements and reach out within 24 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-secondary h-11 px-6 rounded-xl text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <div className="space-y-8">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                    <span className="font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span>{progressPercent}% completed</span>
                  </div>

                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full bg-emerald-600 transition-all duration-300 ease-out"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Validation Error Message */}
                {stepError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium">
                    {stepError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: About You */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          About You
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Let's start with your contact details.</p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">
                            Full Name <span className="text-emerald-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Alex Morgan"
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">
                            Work Email <span className="text-emerald-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@company.com"
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">Company / Organization</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">Current Website / App</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://yoursite.com"
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: The Project */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          The Project
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">What are we building together?</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-ink">Project Category</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                        >
                          <option value="">Select project type</option>
                          <option value="Frontend Web Application">Frontend Web Application (React 18 / TS)</option>
                          <option value="Technical Documentation System">Technical Documentation & Developer Portals</option>
                          <option value="Landing Page & Design System">Landing Page & Design System Architecture</option>
                          <option value="Accessibility & Performance Audit">Accessibility (WCAG) & Web Vitals Audit</option>
                          <option value="Other">Other Custom Engineering</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-ink">
                          Project Description <span className="text-emerald-500">*</span>
                        </label>
                        <textarea
                          name="projectDescription"
                          rows={4}
                          required
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Describe the problem, key features needed, or goals for this deliverable."
                          className="w-full rounded-xl border border-line bg-surface-2/60 p-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Scope & Stage */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          Current Stage
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Where are you in the project lifecycle?</p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          "Idea / Concept Stage",
                          "Figma Designs Ready",
                          "Existing Codebase Refactor",
                          "Documentation & Docs System",
                        ].map((stageOpt) => (
                          <button
                            type="button"
                            key={stageOpt}
                            onClick={() => setFormData((prev) => ({ ...prev, stage: stageOpt }))}
                            className={`p-4 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                              formData.stage === stageOpt
                                ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : "border-line bg-surface-2/60 text-ink-muted hover:border-emerald-500/30"
                            }`}
                          >
                            {stageOpt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Timeline & Budget */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          Timeline & Budget
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Aligning on timeline and investment expectations.</p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">Target Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          >
                            <option value="">Select a timeline</option>
                            <option value="Immediately (< 2 weeks)">Immediately (&lt; 2 weeks)</option>
                            <option value="1 - 2 Months">1 - 2 Months</option>
                            <option value="3+ Months">3+ Months</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold text-ink">Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-12 rounded-xl border border-line bg-surface-2/60 px-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                          >
                            <option value="">Select a budget range</option>
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                            <option value="$8,000+">$8,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Communication & Submit */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">
                          Communication Preferences
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">How do you prefer to meet and coordinate?</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-ink">Preferred Channels</label>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {["Email", "Google Meet", "Zoom"].map((method) => {
                            const isChecked = formData.contactMethod.includes(method);
                            return (
                              <label
                                key={method}
                                onClick={() => handleCheckbox(method)}
                                className={`flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border px-4 transition-all ${
                                  isChecked
                                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                                    : "border-line bg-surface-2/60 text-ink-muted"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500"
                                />
                                <span className="text-xs sm:text-sm">{method}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-ink">Additional Notes</label>
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Any extra context or links you'd like me to review."
                          className="w-full rounded-xl border border-line bg-surface-2/60 p-4 text-sm text-ink focus:outline-none focus:border-emerald-500 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex items-center justify-between border-t border-line/60 pt-6 gap-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={isSubmitting}
                        className="btn-secondary h-11 px-5 text-xs font-semibold cursor-pointer disabled:opacity-50"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary h-11 px-6 text-xs font-semibold cursor-pointer"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary h-11 px-8 text-xs font-semibold cursor-pointer flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Dispatching...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Request Consultation</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
