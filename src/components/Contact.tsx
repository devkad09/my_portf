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
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start a project? I'm available for freelance work and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="lg:col-span-4 space-y-4 reveal">
            {[
              { icon: Mail, label: "Email", value: "deve.kad.tech@gmail.com", href: "mailto:deve.kad.tech@gmail.com" },
              { icon: Phone, label: "Phone", value: "0592921133", href: "tel:0592921133" },
              { icon: Github, label: "GitHub", value: "devkad09", href: "https://github.com/devkad09" },
              { icon: Linkedin, label: "LinkedIn", value: "kaddev", href: "https://www.linkedin.com/in/kaddev" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card group p-6 block hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.label}</p>
                    <p className="font-bold text-sm truncate max-w-[180px] sm:max-w-none">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8 reveal">
            <form onSubmit={handleSubmit} className="bento-card p-8 md:p-10 space-y-6">
              {status === "success" && (
                <div className="rounded-2xl bg-primary/10 p-6 space-y-2 border border-primary/20 animate-fade-in">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    {SUCCESS_HEADING}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {CONFIRMATION_MESSAGE}
                  </p>
                  <p className="text-muted-foreground text-xs italic opacity-70">
                    ⏱ {REPLY_TIME_HINT}
                  </p>
                </div>
              )}
              
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 rounded-2xl bg-destructive/10 text-destructive text-sm font-bold border border-destructive/20 animate-shake">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(["name", "email"] as const).map((field) => (
                  <div key={field} className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={field === "name" ? "John Doe" : "john@example.com"}
                      value={form[field]}
                      disabled={isSending}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all text-sm disabled:opacity-50"
                    />
                    {errors[field] && (
                      <p className="text-destructive text-[10px] font-bold mt-1 pl-1">{errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  disabled={isSending}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none text-sm disabled:opacity-50"
                />
                {errors.message && (
                  <p className="text-destructive text-[10px] font-bold mt-1 pl-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
