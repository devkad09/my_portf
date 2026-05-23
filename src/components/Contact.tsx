import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const contactLinks = [
  { label: "Email", value: "deve.kad.tech@gmail.com", icon: Mail, href: "mailto:deve.kad.tech@gmail.com", accent: "violet" },
  { label: "WhatsApp", value: "Chat with me", icon: MessageSquare, href: "https://wa.me/233592921133", accent: "emerald" },
  { label: "GitHub", value: "@devkad09", icon: Github, href: "https://github.com/devkad09", accent: "gray" },
  { label: "LinkedIn", value: "@kaddev", icon: Linkedin, href: "https://www.linkedin.com/in/kaddev", accent: "cyan" },
];

const iconBg: Record<string, string> = {
  violet: "from-violet-500 to-purple-600",
  emerald: "from-emerald-400 to-teal-500",
  gray: "from-gray-600 to-gray-800",
  cyan: "from-cyan-400 to-blue-500",
};

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
    <section id="contact" className="py-24 md:py-36 px-4 sm:px-6 overflow-hidden relative">
      {/* Background glows */}
      <div className="glow-violet w-[500px] h-[500px] -left-40 bottom-0 opacity-20 absolute pointer-events-none" />
      <div className="glow-cyan w-[400px] h-[400px] right-0 top-0 opacity-15 absolute pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <p className="section-eyebrow justify-center mb-4">
            <span className="w-5 h-px bg-violet-400 rounded-full" />
            Contact
            <span className="w-5 h-px bg-violet-400 rounded-full" />
          </p>
          <h2 className="section-heading">
            Let's build something{" "}
            <span className="grad-violet-cyan">great together</span>
          </h2>
          <p className="section-copy mx-auto max-w-xl mt-4">
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start reveal">
          {/* LEFT — contact links */}
          <div className="space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass card-border rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg[item.accent]} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4]">{item.label}</p>
                  <p className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors duration-200 truncate mt-0.5">{item.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#8892a4] group-hover:text-violet-400 transition-all duration-200 opacity-0 group-hover:opacity-100 flex-shrink-0" />
              </a>
            ))}

            {/* "Let's talk" blurb */}
            <div className="glass rounded-xl p-5 mt-6 border border-violet-500/15">
              <p className="text-sm text-[#8892a4] leading-relaxed">
                I'm currently <span className="text-emerald-400 font-medium">open to new opportunities</span> — full-time, contract, or freelance. Let's build something together.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="glass card-border rounded-2xl p-7 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4]">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                    placeholder="Alex Johnson"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4]">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                    placeholder="alex@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-[#8892a4]">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input h-40 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending..." : status === "success" ? "✅ Message sent!" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400 font-medium text-center">
                  ⚠️ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
