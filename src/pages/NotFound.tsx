import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Compass } from "lucide-react";
import BackgroundGrid from "@/components/BackgroundGrid";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User navigated to non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white text-slate-900 p-4 overflow-hidden">
      <BackgroundGrid />

      <div className="relative z-10 max-w-md w-full rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-700">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 inline-block">
            404 • PAGE_NOT_FOUND
          </span>
          <h1 className="font-display font-extrabold text-3xl text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-600">
            The path <code className="text-slate-900 px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200">{location.pathname}</code> does not exist on this portfolio.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="btn-primary w-full h-11 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
