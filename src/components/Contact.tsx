import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Check, Mail, MessageSquare } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 md:px-12 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="animate-fade-up">
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Contact</h2>
            <h3 className="font-heading text-5xl sm:text-6xl text-foreground mb-8">
              Let’s work <span className="text-accent">together.</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-md mb-12 leading-relaxed">
              I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:deve.kad.tech@gmail.com" 
                className="flex items-center gap-4 p-5 bg-background border border-border rounded-2xl hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all group max-w-sm"
              >
                <div className="p-3 bg-secondary rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-semibold text-foreground truncate" title="deve.kad.tech@gmail.com">
                    deve.kad.tech@gmail.com
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://wa.me/233000000000" 
                  className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-2xl hover:border-accent transition-all group text-center"
                >
                  <MessageSquare className="w-6 h-6 mb-2 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-bold">WhatsApp</span>
                </a>
                <a 
                  href="https://github.com/devkad09" 
                  className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-2xl hover:border-accent transition-all group text-center"
                >
                  <Github className="w-6 h-6 mb-2 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-bold">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/kaddev" 
                  className="flex flex-col items-center justify-center p-6 bg-background border border-border rounded-2xl hover:border-accent transition-all group text-center"
                >
                  <Linkedin className="w-6 h-6 mb-2 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-sm font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background p-10 rounded-[2.5rem] border border-border shadow-sm animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-widest">Your Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-foreground resize-none h-40"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-primary-foreground font-bold py-5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                {status === "sending" ? "Sending..." : status === "success" ? <><Check className="w-5 h-5"/> Message Sent</> : "Send Message"}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
