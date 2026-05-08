import { Monitor, Cpu, Rocket } from "lucide-react";

const services = [
  {
    title: "Responsive Websites",
    description: "I build websites that look and function perfectly on every device, from mobile to desktop.",
    icon: <Monitor className="w-8 h-8 text-accent" />,
  },
  {
    title: "React Web Apps",
    description: "Developing dynamic, scalable, and high-performance web applications using the latest React features.",
    icon: <Cpu className="w-8 h-8 text-accent" />,
  },
  {
    title: "Landing Pages",
    description: "Crafting high-converting landing pages for businesses and startups that drive results.",
    icon: <Rocket className="w-8 h-8 text-accent" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-background border-y border-border">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Services</h2>
          <h3 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
            How I can help <span className="text-accent">your business.</span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I offer a range of frontend development services tailored to help startups and established businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="p-10 bg-secondary/50 border border-border rounded-3xl hover:border-accent hover:bg-secondary transition-all group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-background rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="font-heading text-2xl font-bold text-foreground mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary rounded-[2rem] text-center text-primary-foreground relative overflow-hidden group">
            <div className="relative z-10">
                <h4 className="font-heading text-3xl sm:text-4xl font-bold mb-6 italic">“I build responsive websites, React apps, and landing pages for businesses and startups”</h4>
                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                    Start a Project
                </button>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -ml-20 -mb-20" />
        </div>

      </div>
    </section>
  );
};

export default Services;
