import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    company: "Formgrid",
    quote:
      "Kelvin's technical documentation transformed developer onboarding at Formgrid. His ability to explain intricate API workflows with razor-sharp clarity cut customer support tickets by nearly 40%.",
    avatar: "MC",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Product Lead",
    company: "Connect Analytics",
    quote:
      "Working with Kelvin was a breeze. He delivered comprehensive component documentation and user guides on time, allowing our frontend team to integrate seamless features without friction.",
    avatar: "SJ",
    rating: 5,
  },
  {
    name: "David Osei",
    role: "Founder & CEO",
    company: "Aurora E-Commerce",
    quote:
      "Kelvin possesses a rare combination of technical writing precision and frontend development expertise. Highly recommended for any serious software team.",
    avatar: "DO",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-white border-t border-[#e2e8f0]">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <p className="section-eyebrow justify-center">
            Client & Peer Feedback
          </p>
          <h2 className="section-heading">
            What leaders say about <span className="text-[#2563eb]">my work</span>
          </h2>
        </div>

        {/* Card */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-3xl p-8 sm:p-12 shadow-lg relative space-y-6">
          <Quote className="w-12 h-12 text-[#2563eb]/20 mx-auto" />

          {/* Stars */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
            ))}
          </div>

          <p className="text-lg sm:text-xl font-medium text-[#0f172a] leading-relaxed italic max-w-2xl mx-auto">
            "{t.quote}"
          </p>

          <div className="pt-4 border-t border-[#e2e8f0] inline-block">
            <h4 className="font-bold text-base text-[#0f172a]">{t.name}</h4>
            <p className="text-xs font-semibold text-[#2563eb]">{t.role} · {t.company}</p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl border border-[#e2e8f0] bg-white text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#64748b]">
              {index + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="p-2.5 rounded-xl border border-[#e2e8f0] bg-white text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
