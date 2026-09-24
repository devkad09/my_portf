import { useState } from "react";
import {
  FlaskConical,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
  Zap,
} from "lucide-react";
import { CONFIRMED_TECHNOLOGIES } from "../data/technologies";
import { TechLogo } from "./TechLogo";

export const Playground = () => {
  // Experiment 1: Micro-interaction states
  const [btnState, setBtnState] = useState<"idle" | "loading" | "success">("idle");

  const handleTriggerBtn = () => {
    setBtnState("loading");
    setTimeout(() => {
      setBtnState("success");
      setTimeout(() => setBtnState("idle"), 2000);
    }, 1200);
  };

  // Experiment 2: Real-time Form Validation
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
  const passwordStrength = {
    length: passwordInput.length >= 8,
    hasNumber: /\d/.test(passwordInput),
    hasSpecial: /[^A-Za-z0-9]/.test(passwordInput),
  };
  const strengthScore =
    (passwordStrength.length ? 1 : 0) +
    (passwordStrength.hasNumber ? 1 : 0) +
    (passwordStrength.hasSpecial ? 1 : 0);

  // Experiment 3: Live API Simulation
  const [apiState, setApiState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mockData, setMockData] = useState<Array<{ id: number; name: string; role: string }> | null>(null);

  const handleFetchMockData = (forceError = false) => {
    setApiState("loading");
    setMockData(null);
    setTimeout(() => {
      if (forceError) {
        setApiState("error");
      } else {
        setMockData([
          { id: 1, name: "React 18 Concurrent Features", role: "Frontend" },
          { id: 2, name: "TypeScript Discriminated Unions", role: "Architecture" },
          { id: 3, name: "Supabase Relational Pipeline", role: "Database" },
        ]);
        setApiState("success");
      }
    }, 1000);
  };

  const renderTechTag = (id: string) => {
    const tech = CONFIRMED_TECHNOLOGIES[id];
    if (!tech) return null;
    return (
      <span
        key={id}
        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
      >
        <TechLogo name={id} className="w-3.5 h-3.5 shrink-0" ariaHidden={true} />
        <span>{tech.name}</span>
      </span>
    );
  };

  return (
    <section
      id="playground"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-slate-50/70 border-t border-b border-slate-200/80 scroll-mt-16"
      aria-labelledby="playground-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Experiments</span>
          </div>
          <h2 id="playground-heading" className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Frontend Playground
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Interactive experiments demonstrating practical UI states and frontend architecture.
          </p>
        </div>

        {/* 3 Interactive Experiment Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Experiment 1: Button Micro-Interactions */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-slate-700">
                  Lab 01: State Physics
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  Micro-interactions
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Action Feedback & States
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tactile loading state transitions and accessible confirmation curves.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {renderTechTag("react")}
                {renderTechTag("typescript")}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
              <button
                type="button"
                onClick={handleTriggerBtn}
                disabled={btnState === "loading"}
                className={`w-full h-11 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  btnState === "success"
                    ? "bg-emerald-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {btnState === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing payload...</span>
                  </>
                ) : btnState === "success" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Action Completed!</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Trigger Asynchronous Flow</span>
                  </>
                )}
              </button>

              <p className="text-[11px] font-mono text-slate-500">
                Current status: <strong className="text-slate-800">{btnState}</strong>
              </p>
            </div>
          </div>

          {/* Experiment 2: Real-time Form Validation */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-slate-700">
                  Lab 02: Validation
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  Accessible Form
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Real-Time Input Gatekeeper
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live regex validation, password strength analysis, and instant accessible feedback.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {renderTechTag("react")}
                {renderTechTag("html5")}
              </div>
            </div>

            <div className="space-y-3">
              {/* Email validation */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <label htmlFor="lab-email" className="text-slate-700">Email Format</label>
                  {emailInput && (
                    <span className={isEmailValid ? "text-emerald-600" : "text-amber-600"}>
                      {isEmailValid ? "Valid" : "Incomplete"}
                    </span>
                  )}
                </div>
                <input
                  id="lab-email"
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="type.user@domain.com"
                  className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-200 text-base sm:text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-slate-50"
                />
              </div>

              {/* Password strength */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <label htmlFor="lab-pass" className="text-slate-700">Password Strength</label>
                  <span className="text-slate-500">{strengthScore}/3</span>
                </div>
                <div className="relative">
                  <input
                    id="lab-pass"
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter 8+ chars & symbol"
                    className="w-full px-3.5 py-2.5 pr-11 min-h-[44px] rounded-xl border border-slate-200 text-base sm:text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-slate-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* Strength Meter Bar */}
                <div className="flex gap-1 pt-1">
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strengthScore >= 1 ? "bg-amber-400" : "bg-slate-200"}`} />
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strengthScore >= 2 ? "bg-blue-500" : "bg-slate-200"}`} />
                  <div className={`h-1 flex-1 rounded-full transition-colors ${strengthScore >= 3 ? "bg-emerald-500" : "bg-slate-200"}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Experiment 3: Live API & State Lifecycles */}
          <div className="p-5 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold uppercase text-slate-700">
                  Lab 03: Async State
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  Data Pipeline
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                API Lifecycle Simulator
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Simulate API state lifecycles: loading skeletons, data parsing, and error boundaries.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {renderTechTag("typescript")}
                {renderTechTag("restapi")}
                {renderTechTag("supabase")}
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 min-h-[90px] flex items-center justify-center text-xs font-mono">
                {apiState === "idle" && (
                  <span className="text-slate-400">Press button to query endpoint</span>
                )}
                {apiState === "loading" && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span>Resolving GET /api/v1/modules...</span>
                  </div>
                )}
                {apiState === "error" && (
                  <div className="flex items-center gap-1.5 text-amber-700">
                    <AlertCircle className="w-4 h-4" />
                    <span>HTTP 500: Server simulated failure</span>
                  </div>
                )}
                {apiState === "success" && mockData && (
                  <div className="w-full space-y-1">
                    {mockData.map((d) => (
                      <div key={d.id} className="flex justify-between text-[11px] text-slate-700">
                        <span>{d.name}</span>
                        <span className="text-slate-400 font-normal">{d.role}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleFetchMockData(false)}
                  className="flex-1 min-h-[44px] py-2 rounded-xl bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center"
                >
                  Query Success
                </button>
                <button
                  type="button"
                  onClick={() => handleFetchMockData(true)}
                  className="py-2 px-3.5 min-h-[44px] rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center"
                >
                  Test Error
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
