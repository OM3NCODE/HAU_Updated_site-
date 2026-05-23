import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const Footer = () => {
  const [copiedHau, setCopiedHau] = useState(false);
  const [copiedUbp, setCopiedUbp] = useState(false);

  const hauCA = "5pGEypcitpXrwoZryQcDjHMzFyBhedLR4F4YyjmskaXt";
  const ubpCA = "9Aj8gNVqU6do2BaShZpEZiDrp2wf7usRuupFpkwh8ray";

  const copyToClipboard = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <footer className="relative z-10 bg-brand-dark text-tint-neutral py-10 border-t border-brand-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Links & Socials */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 sm:gap-2.5 self-start group/logo">
              <div className="rounded-full border-2 border-brand-purple overflow-hidden flex items-center justify-center bg-nft-orange shadow-lg w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover/logo:scale-105">
                <img
                  src={assetUrl('/assets/hauwee_unicorn_avatar.png')}
                  alt="Unicorn Icon"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <img
                src={assetUrl('/assets/HAU%20Logo.png')}
                alt="HIGH AS UNICORN"
                className="w-full max-w-[170px] sm:max-w-[200px] md:max-w-[240px] h-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
              />
            </div>
            <p className="italic text-tint-neutral/80">"Hau ya doing?" We Care. We Listen. We Vibe.</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://twitter.com/highasunicorn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 px-4 gap-2 rounded-full bg-black/40 border border-brand-purple/20 text-tint-neutral hover:text-[#ff00fc] hover:border-[#ff00fc]/60 hover:bg-black/60 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,252,0.4)]"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="https://discord.gg/6Jxar3SCFK"
                className="flex items-center justify-center h-10 px-4 gap-2 rounded-full bg-black/40 border border-brand-purple/20 text-tint-neutral hover:text-[#2fff37] hover:border-[#2fff37]/60 hover:bg-black/60 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(47,255,55,0.4)]"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                </svg>
                <span className="text-sm font-bold">Discord</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center h-10 px-4 gap-2 rounded-full bg-black/40 border border-brand-purple/20 text-tint-neutral hover:text-[#f2a900] hover:border-[#f2a900]/60 hover:bg-black/60 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,169,0,0.4)]"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21a.28.28 0 0 0-.22-.04c-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.15-.22-1.71-.4-.69-.23-1.24-.35-1.19-.74.03-.2.28-.4.76-.6 2.97-1.29 4.96-2.15 5.97-2.58 2.88-1.21 3.48-1.42 3.87-1.43.09 0 .28.02.4.12.1.09.13.21.14.3.01.06.01.17 0 .23z" />
                </svg>
                <span className="text-sm font-bold">Telegram</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Link to="/nfts" className="hover:text-brand-purple transition-colors">NFTs</Link>
              <Link to="/tokens" className="hover:text-brand-purple transition-colors">Tokens</Link>
              <Link to="/game" className="hover:text-brand-purple transition-colors">Game</Link>
              <Link to="/team" className="hover:text-brand-purple transition-colors">Team</Link>
            </div>
          </div>

          {/* Column 2: Contract Addresses */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-white">Contracts</h3>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#2fff37]">$HAU CA</span>
              <button
                onClick={() => copyToClipboard(hauCA, setCopiedHau)}
                className="group flex items-center justify-between bg-black/40 p-3.5 rounded-xl border border-[#2fff37]/20 hover:border-[#2fff37]/60 hover:bg-black/60 transition-colors w-full text-left"
              >
                <span className="font-mono text-xs sm:text-sm truncate mr-2">{hauCA}</span>
                {copiedHau ? <Check size={16} className="text-[#2fff37] flex-shrink-0" /> : <Copy size={16} className="text-[#2fff37] group-hover:text-white transition-colors flex-shrink-0" />}
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#ff00fc]">$UBP CA</span>
              <button
                onClick={() => copyToClipboard(ubpCA, setCopiedUbp)}
                className="group flex items-center justify-between bg-black/40 p-3.5 rounded-xl border border-[#ff00fc]/20 hover:border-[#ff00fc]/60 hover:bg-black/60 transition-colors w-full text-left"
              >
                <span className="font-mono text-xs sm:text-sm truncate mr-2">{ubpCA}</span>
                {copiedUbp ? <Check size={16} className="text-[#ff00fc] flex-shrink-0" /> : <Copy size={16} className="text-[#ff00fc] group-hover:text-white transition-colors flex-shrink-0" />}
              </button>
            </div>
          </div>

          {/* Column 3: Spaces & Extra Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-xl text-white">Community</h3>
            <div className="bg-brand-purple/10 border border-brand-purple/30 p-4 rounded-lg">
              <h4 className="font-bold text-brand-light mb-1">Friday Spaces</h4>
              <p className="text-sm text-tint-neutral/80">Join us every Friday for updates, alpha, and vibes.</p>
              <a href="https://x.com/highasunicorn" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-brand-purple hover:text-white transition-colors font-bold">Set Reminder →</a>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <a href="https://highasunicorn.meme" className="hover:text-brand-purple transition-colors">highasunicorn.meme</a>
              <a href="https://shithappens.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">shithappens.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-purple/20 text-center">
          <p className="text-xs sm:text-sm text-tint-neutral/45 font-mono">
            &copy; {new Date().getFullYear()} High As Unicorn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
