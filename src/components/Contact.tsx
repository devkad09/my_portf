import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Check } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    if (!form.message.trim()) errs.message = "Required";
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-editorial-bg">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-editorial-text mb-8">
              Start a<br />
              <span className="italic text-editorial-accent">Conversation.</span>
            </h2>
            <p className="text-xl text-editorial-muted text-balance mb-12 font-serif italic">
              Available for freelance opportunities and collaborative inquiries.
            </p>

            <div className="space-y-6 pt-12 border-t border-editorial-border">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-serif text-2xl text-editorial-text">Email</span>
                <span className="text-editorial-muted group-hover:text-editorial-accent flex items-center gap-2 transition-colors">
                  deve.kad.tech@gmail.com <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-serif text-2xl text-editorial-text">Socials</span>
                <div className="flex items-center gap-6 text-editorial-muted">
                  <a href="https://github.com/devkad09" className="hover:text-editorial-accent transition-colors">
                    <Github className="w-6 h-6" strokeWidth={1.5} />
                  </a>
                  <a href="https://www.linkedin.com/in/kaddev" className="hover:text-editorial-accent transition-colors">
                    <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="relative border-b border-editorial-border pb-2 focus-within:border-editorial-accent transition-colors">
                <label className="block text-xs uppercase tracking-widest text-editorial-muted mb-2">01. Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent text-xl font-serif text-editorial-text focus:outline-none placeholder:text-editorial-muted/30"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="relative border-b border-editorial-border pb-2 focus-within:border-editorial-accent transition-colors">
                <label className="block text-xs uppercase tracking-widest text-editorial-muted mb-2">02. Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent text-xl font-serif text-editorial-text focus:outline-none placeholder:text-editorial-muted/30"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="relative border-b border-editorial-border pb-2 focus-within:border-editorial-accent transition-colors">
                <label className="block text-xs uppercase tracking-widest text-editorial-muted mb-2">03. Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent text-xl font-serif text-editorial-text focus:outline-none placeholder:text-editorial-muted/30 resize-none h-32"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-serif text-lg text-editorial-white bg-editorial-text overflow-hidden transition-all hover:bg-editorial-accent disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {status === "sending" ? "Sending..." : status === "success" ? <><Check className="w-5 h-5"/> Sent</> : "Submit Inquiry"}
                </span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
