import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Check, Mail, MessageSquare } from "lucide-react";

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
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 reveal">
            <h2 className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4">Contact</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              Ready to build something remarkable?
            </h3>
            <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
              Share your project goals and let's create a polished web experience together.
            </p>

            <div className="space-y-5">
              <a href="mailto:deve.kad.tech@gmail.com" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">Email</p>
                  <p className="mt-2 text-white font-bold group-hover:text-accent transition-colors">deve.kad.tech@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/233592921133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:text-black">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">WhatsApp</p>
                  <p className="mt-2 text-white font-bold group-hover:text-accent transition-colors">Chat with me</p>
                </div>
              </a>
              <a href="https://github.com/devkad09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:text-black">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">GitHub</p>
                  <p className="mt-2 text-white font-bold group-hover:text-accent transition-colors">@devkad09</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:text-black">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">LinkedIn</p>
                  <p className="mt-2 text-white font-bold group-hover:text-accent transition-colors">@kaddev</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="glass rounded-[3rem] border border-white/10 p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full glass bg-white/5 border-white/5 rounded-3xl px-6 py-4 text-white font-medium focus:outline-none focus:border-accent transition-all"
                      placeholder="Alex Johnson"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full glass bg-white/5 border-white/5 rounded-3xl px-6 py-4 text-white font-medium focus:outline-none focus:border-accent transition-all"
                      placeholder="alex@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass bg-white/5 border-white/5 rounded-3xl px-6 py-4 text-white font-medium focus:outline-none focus:border-accent transition-all h-44 resize-none"
                    placeholder="Tell me about your project goals..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full glass rounded-3xl border-white/10 bg-white/5 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-accent hover:text-black flex items-center justify-center gap-3"
                >
                  {status === "sending" ? "SENDING..." : status === "success" ? <><Check className="w-4 h-4" /> SENT</> : "SEND MESSAGE"}
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

