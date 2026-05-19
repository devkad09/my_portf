import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden relative">
      <div className="absolute -bottom-24 -left-24 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 reveal">
            <p className="section-title">Contact</p>
            <h2 className="section-heading">Ready to build something remarkable?</h2>
            <p className="section-copy mt-6">
              Share your project goals and let's create a polished web experience together.
            </p>

            <div className="mt-12 space-y-5">
              {[
                { label: "Email", value: "deve.kad.tech@gmail.com", icon: Mail, href: "mailto:deve.kad.tech@gmail.com" },
                { label: "WhatsApp", value: "Chat with me", icon: MessageSquare, href: "https://wa.me/233592921133" },
                { label: "GitHub", value: "@devkad09", icon: Github, href: "https://github.com/devkad09" },
                { label: "LinkedIn", value: "@kaddev", icon: Linkedin, href: "https://www.linkedin.com/in/kaddev" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 transition hover:border-accent hover:bg-accent/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-accent transition group-hover:bg-accent group-hover:text-black">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-white/40">{item.label}</p>
                    <p className="mt-2 text-white font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="glass-panel rounded-[3rem] p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                      placeholder="Alex Johnson"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                      placeholder="alex@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.35em] uppercase text-white/40">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent h-44 resize-none"
                    placeholder="Tell me about your project goals..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-gradient-to-r from-accent to-accent-secondary px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5"
                >
                  {status === "sending" ? "SENDING..." : status === "success" ? "SENT" : "SEND MESSAGE"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-6 text-sm text-emerald-300">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="mt-6 text-sm text-rose-300">Something went wrong. Please try again later.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

