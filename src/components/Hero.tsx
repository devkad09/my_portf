import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const roles = [
  "UI Builder",
  "Frontend Developer",
  "React Developer",
  "Web Creator",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
        a: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 230, 255, ${p.a})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 230, 255, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-bg" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="mb-12 reveal">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000 animate-pulse-glow"></div>
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-3">
              <img 
                src="/assets/profile.jpg" 
                alt="Kelvin Atsu Djayouri" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="reveal flex flex-col items-center justify-center w-full space-y-4 md:space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-primary/20 mb-2 animate-fade-in shrink-0">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              Available for Freelance
            </span>
          </div>
          
          <h1 className="font-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.1] sm:leading-[0.85] mb-4">
            Creative <br className="xs:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-shimmer">Developer</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80 h-10 mb-10 w-full max-w-2xl mx-auto">
            <span className="opacity-50 hidden xs:inline">—</span>
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent truncate">
              {text}
            </span>
            <span className="w-1 h-6 sm:w-1.5 sm:h-10 bg-primary animate-pulse-glow rounded-full" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all shadow-xl shadow-foreground/10"
            >
              Explore Projects
            </a>
            <div className="flex items-center gap-4 px-6 py-4 rounded-full glass border-white/10">
              <a
                href="https://github.com/devkad09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaddev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full glass border-white/10 text-muted-foreground hover:text-primary transition-all animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
