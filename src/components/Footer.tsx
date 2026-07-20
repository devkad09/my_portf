import { GithubLogo, LinkedinLogo, GmailLogo } from "./SocialLogos";

const Footer = () => (
  <footer className="bg-white border-t border-[#e2e8f0] py-12 px-4 sm:px-6">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-xs">
            K
          </div>
          <span className="font-bold text-lg text-[#0f172a]">
            Kad<span className="text-[#2563eb]">Dev</span>
          </span>
          <span className="text-xs text-[#64748b] ml-2">© 2026 Kelvin Atsu Djayouri. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="text-[#64748b] hover:text-[#0f172a] transition-colors" title="GitHub">
            <GithubLogo className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="text-[#64748b] hover:text-[#2563eb] transition-colors" title="LinkedIn">
            <LinkedinLogo className="w-5 h-5" />
          </a>
          <a href="mailto:deve.kad.tech@gmail.com" className="text-[#64748b] hover:text-[#ea4335] transition-colors" title="Email">
            <GmailLogo className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
