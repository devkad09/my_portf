import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed z-40 rounded-2xl w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-800 bg-white hover:bg-slate-50 shadow-md border border-slate-200 transition-all duration-300 cursor-pointer right-4 sm:right-6 bottom-5 sm:bottom-6 pb-safe ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default BackToTop;
