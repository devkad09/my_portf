import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";

const Footer = () => (
  <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/80 py-12 px-4 sm:px-6 relative z-10">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Kelvin Atsu Djayouri"
              className="w-8 h-8 rounded-xl object-cover border border-blue-500/40"
            />
          </div>
          <span className="font-bold text-lg text-white">
            Kad<span className="text-blue-400">Dev</span>
          </span>
          <span className="text-xs text-slate-500 ml-2">© 2026 Kelvin Atsu Djayouri. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/devkad09"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            title="GitHub"
          >
            <GithubLogo className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaddev"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinLogo className="w-5 h-5" />
          </a>
          <a
            href="mailto:deve.kad.tech@gmail.com"
            className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            title="Email"
          >
            <GmailLogo className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
