import { Code, Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Crafting high-performance, scalable web applications using the latest modern frameworks.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "UI/UX Design",
    desc: "Creating intuitive and visually stunning user interfaces that prioritize user experience.",
    icon: Palette,
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Mobile Optimization",
    desc: "Ensuring your digital products look and perform flawlessly across all mobile devices.",
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-400"
  },
  {
    title: "Performance SEO",
    desc: "Optimizing your web applications for maximum speed and search engine visibility.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-400"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-[0.4em] text-accent uppercase mb-4">Expertise</h2>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
              SERVICES <br />
              & SOLUTIONS.
            </h3>
          </div>
          <p className="text-white/40 text-lg max-w-sm leading-relaxed font-light">
            I build responsive websites, React applications, and modern UI for businesses and startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div 
              key={service.title}
              className="group relative p-8 md:p-12 bg-secondary/30 backdrop-blur-md rounded-[3rem] border border-white/5 overflow-hidden transition-all duration-1000 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-white/40 leading-relaxed font-light">
                  {service.desc}
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Core Service</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
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

