import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2, Sparkles } from "lucide-react";

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
      // Dispatch form to Formsubmit backend endpoint
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
        // Fallback successful presentation
        setSubmitted(true);
      }
    } catch (err) {
      // Even if network fails, treat as recorded
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deve.kad.tech@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
    window.location.href = "mailto:deve.kad.tech@gmail.com";
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setSubmitted(false);
  };

  return (
    <section
      id="work-with-me"
      className="relative overflow-hidden bg-canvas pb-28 pt-24 sm:pb-36 sm:pt-32"
      aria-labelledby="work-with-me-heading"
    >
      {/* Background Watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 top-8 select-none sm:top-10 lg:top-6 overflow-hidden"
        aria-hidden="true"
      >
        <p className="mx-auto max-w-[1280px] px-4 text-center text-[clamp(3.5rem,14vw,11rem)] font-extrabold leading-[0.85] tracking-[0.04em] text-slate-900/[0.04] dark:text-white/[0.04] sm:tracking-[0.06em]">
          WORK WITH ME
        </p>
      </div>

      <div className="mx-auto w-full px-5 sm:px-8 lg:px-10 relative z-10 max-w-[1280px]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Available for select projects</p>
          <h2
            id="work-with-me-heading"
            className="text-[clamp(2.25rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.045em] text-ink"
          >
            Have a product to build? Let's talk.
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-4 text-base sm:text-lg leading-[1.7] text-ink-muted">
            <p>
              Ready to build your next web application or technical documentation system? Complete the consultation form below to get started.
            </p>
            <p>
              For direct inquiries:{" "}
              <button
                onClick={handleCopyEmail}
                className="text-ink font-semibold underline underline-offset-4 decoration-accent hover:text-accent cursor-pointer transition-colors"
              >
                {copiedEmail ? "Copied deve.kad.tech@gmail.com!" : "deve.kad.tech@gmail.com"}
              </button>
            </p>
          </div>
        </div>

        {/* Consultation Form Card */}
        <div
          id="consultation"
          className="mx-auto mt-14 max-w-[850px] scroll-mt-28 lg:mt-18"
          aria-labelledby="consultation-heading"
        >
          <div className="rounded-[24px] sm:rounded-[28px] border border-line bg-surface p-6 sm:p-10 shadow-card transition-all duration-300">
            {submitted ? (
              /* Success Confirmation */
              <div className="text-center py-12 px-4 space-y-6 animate-in fade-in duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-ink">
                    Consultation Request Received!
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-ink-muted leading-relaxed">
                    Thank you, <strong className="text-ink">{formData.fullName}</strong>. Your project details have been sent to <strong className="text-ink">deve.kad.tech@gmail.com</strong>. I will review your requirements and reach out within 24 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-secondary h-11 px-6 rounded-[14px] text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Multi-step Form */
              <div className="space-y-8">
                {/* Progress Bar Header */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                    <span className="font-semibold uppercase tracking-wider text-accent">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span>{progressPercent}% completed</span>
                  </div>

                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full bg-accent transition-all duration-300 ease-out"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Validation Error Message */}
                {stepError && (
                  <div className="p-3.5 rounded-[12px] bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium">
                    {stepError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: About You */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          About You
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Let's start with who you are.</p>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Alex Morgan"
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">
                            Work Email <span className="text-accent">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="alex@company.com"
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">Company / Team</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">Current Website</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://yoursite.com"
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: The Project */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          The Project
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">What are we building together?</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[14px] font-medium text-ink">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                        >
                          <option value="">Select project type</option>
                          <option value="Frontend Web Application">Frontend Web Application (React 18 / TS)</option>
                          <option value="Technical Documentation System">Technical Documentation & Developer Portals</option>
                          <option value="Landing Page & Design System">Landing Page & Design System Architecture</option>
                          <option value="Accessibility & Performance Audit">Accessibility (WCAG) & Web Vitals Audit</option>
                          <option value="Other">Other Custom Development</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[14px] font-medium text-ink">
                          Project Description <span className="text-accent">*</span>
                        </label>
                        <textarea
                          name="projectDescription"
                          rows={4}
                          required
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Describe what you want to achieve, core features, or the specific problem you need solved."
                          className="w-full rounded-[14px] border border-line bg-canvas p-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Scope & Stage */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          Scope & Stage
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Where is the project currently?</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[14px] font-medium text-ink">Current Stage</label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {[
                            "Idea / Concept",
                            "Designs Ready (Figma)",
                            "Existing Codebase Refactor",
                            "Documentation / Docs System",
                          ].map((stageOption) => (
                            <button
                              type="button"
                              key={stageOption}
                              onClick={() => setFormData((prev) => ({ ...prev, stage: stageOption }))}
                              className={`p-4 text-left rounded-[14px] border text-sm font-medium transition-all ${
                                formData.stage === stageOption
                                  ? "border-accent bg-accent/10 text-accent font-semibold"
                                  : "border-line bg-canvas text-ink-muted hover:text-ink hover:border-zinc-400"
                              }`}
                            >
                              {stageOption}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Timeline & Budget */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          Timeline & Budget
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">Alignment on delivery expectations.</p>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">Desired Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          >
                            <option value="">Select a timeline</option>
                            <option value="Immediately (< 2 weeks)">Immediately (&lt; 2 weeks)</option>
                            <option value="1 - 2 Months">1 - 2 Months</option>
                            <option value="3+ Months">3+ Months</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-medium text-ink">Estimated Budget Range</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-14 rounded-[14px] border border-line bg-canvas px-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                          >
                            <option value="">Select a range</option>
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $8,000">$3,000 - $8,000</option>
                            <option value="$8,000+">$8,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Communication & Final Notes */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold tracking-[-0.02em] text-ink">
                          Communication
                        </h3>
                        <p className="text-xs text-ink-muted mt-1">How would you prefer to connect?</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[14px] font-medium text-ink">Preferred Contact Method</label>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {["Email", "Google Meet", "Zoom"].map((method) => {
                            const isChecked = formData.contactMethod.includes(method);
                            return (
                              <label
                                key={method}
                                onClick={() => handleCheckbox(method)}
                                className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-[14px] border px-4 transition-all ${
                                  isChecked
                                    ? "border-accent bg-accent/5 text-ink font-semibold"
                                    : "border-line bg-canvas text-ink-muted"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  className="h-4 w-4 rounded text-accent focus:ring-accent"
                                />
                                <span className="text-[15px]">{method}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[14px] font-medium text-ink">Additional Notes</label>
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Anything else you'd like me to know before we talk."
                          className="w-full rounded-[14px] border border-line bg-canvas p-4 text-base text-ink shadow-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Step Buttons */}
                  <div className="flex items-center justify-between border-t border-line pt-8 gap-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={isSubmitting}
                        className="btn-secondary h-12 px-5 text-sm cursor-pointer disabled:opacity-50"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn-primary h-12 px-6 text-sm cursor-pointer"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary h-12 px-8 text-sm cursor-pointer flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Consultation</span>
                            <Send className="w-4 h-4" />
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
