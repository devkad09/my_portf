import { useState, FormEvent } from "react";
import { Mail, Phone, Github, Linkedin, Send, Loader2, CheckCircle2, XCircle, Copy, Check } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

// ✏️ CONFIGURE THESE — shown after successful form submission
const SUCCESS_HEADING = "Message sent successfully! 🎉";
const REPLY_TIME_HINT = "I typically respond within 24–48 hours.";
const CONFIRMATION_MESSAGE = "Thanks for reaching out! Your message has been received.";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const confirmationText = `${CONFIRMATION_MESSAGE} ${REPLY_TIME_HINT}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(confirmationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio Contact from ${form.name.trim()}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 reveal">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12 reveal" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="reveal space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out —
              I'd love to hear from you!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "deve.kad.tech@gmail.com", href: "mailto:deve.kad.tech@gmail.com" },
                { icon: Phone, label: "0592921133", href: "tel:0592921133" },
                { icon: Github, label: "github.com/devkad09", href: "https://github.com/devkad09" },
                { icon: Linkedin, label: "linkedin.com/in/kaddev", href: "https://www.linkedin.com/in/kaddev" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal space-y-4">
            {status === "success" && (
              <div className="rounded-lg bg-primary/10 p-4 space-y-2">
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {SUCCESS_HEADING}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {CONFIRMATION_MESSAGE}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed italic">
                  ⏱ {REPLY_TIME_HINT}
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy confirmation"}
                </button>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                {errorMsg}
              </div>
            )}

            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                {field === "message" ? (
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={form[field]}
                    disabled={isSending}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm disabled:opacity-50"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={form[field]}
                    disabled={isSending}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm disabled:opacity-50"
                  />
                )}
                {errors[field] && (
                  <p className="text-destructive text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
