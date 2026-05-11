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
      
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-[50vw] h-[50vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 reveal">
            <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Get in Touch</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-gradient leading-tight mb-8">
              START A <br />
              CONVERSATION.
            </h3>
            <p className="text-white/40 text-lg leading-relaxed font-light mb-12">
              Have a magnificent idea? Let's bring it to life with precision and purpose.
            </p>

            <div className="space-y-6">
              <a href="mailto:deve.kad.tech@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">Email</div>
                  <div className="text-white font-bold group-hover:text-accent transition-colors">deve.kad.tech@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">LinkedIn</div>
                  <div className="text-white font-bold group-hover:text-accent transition-colors">@kaddev</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="glass p-6 md:p-12 rounded-[3rem] border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all text-white font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all text-white font-medium"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-widest uppercase text-white/30 ml-2">Project Brief</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full glass bg-white/5 border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-all text-white font-medium h-40 resize-none"
                    placeholder="Tell me about your magnificent project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full glass hover:bg-accent hover:text-black text-white font-black py-5 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group uppercase tracking-[0.2em] text-xs"
                >
                  {status === "sending" ? "TRANSMITTING..." : status === "success" ? <><Check className="w-4 h-4"/> SENT</> : "SEND MESSAGE"}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

