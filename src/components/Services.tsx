import { Code, Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    title: "Responsive Websites",
    desc: "High-performance websites built for mobile-first audiences with polished UI and fast loading experiences.",
    icon: Smartphone,
    gradient: "from-[#22d3ee] to-[#7c3aed]"
  },
  {
    title: "React Applications",
    desc: "Scalable single-page apps architected with modern React patterns, clean state management, and smooth transitions.",
    icon: Code,
    gradient: "from-[#a855f7] to-[#ec4899]"
  },
  {
    title: "Design Systems",
    desc: "Reusable UI systems and component libraries designed for consistency, accessibility, and long-term maintainability.",
    icon: Palette,
    gradient: "from-[#fbbf24] to-[#fb7185]"
  },
  {
    title: "Frontend Engineering",
    desc: "Performance-first engineering, thorough testing, and polished interactions for modern production applications.",
    icon: Globe,
    gradient: "from-[#10b981] to-[#22d3ee]"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24 reveal">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">What I build</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Digital products created to move fast and scale.
            </h3>
          </div>
          <p className="text-white/40 text-lg max-w-xl leading-relaxed font-light">
            A modern frontend partner for agencies, founders, and product teams who need clear interfaces, reliable performance, and a polished launch-ready experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl`} />
              <div className="relative z-10 flex flex-col h-full gap-8">
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl shadow-black/20 transition-transform duration-500 group-hover:scale-105`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-black text-white mb-4">{service.title}</h4>
                  <p className="text-white/50 leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.32em] text-white/30">Full-stack frontend</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

