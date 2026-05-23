import React from 'react';
import { Mic2, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const Team = () => {
  const coreTeam = [
    { name: "Chris", role: "Core Team", countryCodes: ["us", "sg"], xHandle: "@PengWine", image: "/assets/hauwee_hero.png" },
    { name: "Veronika", role: "Core Team", countryCodes: ["gb"], xHandle: "@VeronikaLKLK", image: "/assets/hauwee_hero.png" },
    { name: "Sean", role: "Core Team", countryCodes: ["us"], xHandle: "@cryptoverlordx", image: "/assets/hauwee_hero.png" },
    { name: "Adhish", role: "Core Team", countryCodes: ["in"], xHandle: "@IamAdhish2005", image: "/assets/hauwee_hero.png" },
    { name: "4G", role: "Core Team", countryCodes: ["ng"], xHandle: "@4G_OFWeb3", image: "/assets/hauwee_hero.png" },
    { name: "Shashank", role: "Core Team", countryCodes: ["in"], xHandle: "@shanks_ssk", image: "/assets/hauwee_hero.png" },
    { name: "Lorin", role: "Core Team", countryCodes: ["sg"], xHandle: "@LorinWeb3", image: "/assets/hauwee_hero.png" },
    { name: "Ziggy", role: "Core Team", countryCodes: ["sg"], xHandle: "@ziggy_hau", image: "/assets/hauwee_hero.png" },
  ];

  const TeamCard = ({ member, index }) => {
    // Alternating brand colors: Pink (#ff00fc) and Green (#2fff37)
    const isPink = index % 2 === 0;
    const cardTheme = isPink
      ? {
        bg: "bg-[#ff00fc]/5",
        border: "border-[#ff00fc]/20 hover:border-[#ff00fc]/60",
        shadow: "hover:shadow-[0_15px_30px_rgba(255,0,252,0.15)]",
        roleColor: "text-[#ff00fc]",
      }
      : {
        bg: "bg-[#2fff37]/5",
        border: "border-[#2fff37]/20 hover:border-[#2fff37]/60",
        shadow: "hover:shadow-[0_15px_30px_rgba(47,255,55,0.15)]",
        roleColor: "text-[#2fff37]",
      };

    return (
      <div className={`backdrop-blur-md rounded-3xl overflow-hidden border-2 transition-all duration-500 relative group flex flex-col justify-between ${cardTheme.bg} ${cardTheme.border} ${cardTheme.shadow}`}>
        <div className="aspect-square bg-tint-neutral/5 flex justify-center items-center relative overflow-hidden">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          {member.countryCodes && (
            <div className="absolute top-3 right-3 flex gap-1.5 z-20">
              {member.countryCodes.map((code) => (
                <img
                  key={code}
                  src={`https://flagcdn.com/w40/${code}.png`}
                  srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                  width="24"
                  alt={code.toUpperCase()}
                  className="rounded shadow-md border border-white/20 object-cover w-7 h-[18px]"
                />
              ))}
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col justify-between flex-grow text-left">
          <div>
            <h3 className="font-display font-black text-2xl tracking-wide uppercase text-white mb-1">
              {member.name}
            </h3>
            <p className={`text-xs font-mono font-bold tracking-widest uppercase mb-4 ${cardTheme.roleColor}`}>
              {member.role}
            </p>
          </div>

          {member.xHandle && (
            <a
              href={`https://x.com/${member.xHandle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-tint-neutral/60 hover:text-white transition-colors duration-300 w-max"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              {member.xHandle}
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-24 py-8 relative">
      {/* Background ambient glows for spatial aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ff00fc]/5 blur-[120px] pointer-events-none select-none"></div>

      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto relative z-10">
        <h1 className="text-[3.2rem] min-[360px]:text-[3.8rem] min-[440px]:text-[4.5rem] sm:text-6xl md:text-7xl lg:text-7xl font-display font-black leading-[1.0] uppercase tracking-wide flex flex-col items-center">
          <span className="text-[#2fff37]" style={{ textShadow: '0 0 35px rgba(47,255,55,0.45)' }}>Real People.</span>
          <span className="text-[#ff00fc]" style={{ textShadow: '0 0 35px rgba(255,0,252,0.45)' }}>Real Faces.</span>
        </h1>
        <p className="text-xl text-tint-neutral/80 mt-6">
          12+ members, 4 countries. No anonymous devs. Every team member uses a Hauwee NFT they hold as their profile picture.
        </p>
      </section>

      {/* 2. Core Team Grid */}
      <section className="relative z-10">
        <h2 className="text-2xl font-display font-black uppercase text-white tracking-wide flex items-center gap-3 mb-8">
          <span className="w-8 h-1 bg-brand-purple rounded-full"></span> Core Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {coreTeam.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* 4. Community CTA */}
      <section className="bg-brand-purple/10 border border-brand-purple/30 rounded-3xl p-8 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">"Hau ya doing?"</h2>
          <p className="text-xl text-tint-neutral/80 mb-10 max-w-2xl mx-auto">
            Come meet the team and the community in our Friday Spaces. We care, we listen, we vibe.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center w-full max-w-3xl mx-auto mt-6">
            <Button href="https://x.com/highasunicorn" target="_blank" variant="primary" className="w-full md:w-auto text-lg px-8 py-4 flex items-center gap-2.5 justify-center rounded-2xl hover:scale-105 transition-transform duration-300">
              <Mic2 size={20} /> Join Friday Spaces
            </Button>

            <Button href="https://discord.gg/6Jxar3SCFK" target="_blank" className="w-full md:w-auto text-lg px-8 py-4 flex items-center gap-2.5 justify-center bg-[#5865F2] hover:bg-[#4752C4] border-2 border-[#5865F2]/30 text-white font-extrabold shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl">
              <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Join Discord
            </Button>

            <Button href="https://t.me/highasunicorn" target="_blank" className="w-full md:w-auto text-lg px-8 py-4 flex items-center gap-2.5 justify-center bg-[#2AABEE] hover:bg-[#229ED9] border-2 border-[#2AABEE]/30 text-white font-extrabold shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.36-.99.54-1.41.53-.46-.01-1.34-.26-2-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8-3.46 3.8-1.64 4.59-1.92 5.11-1.93.11 0 .37.03.5.15.11.1.14.24.15.36-.01.1-.01.22-.02.29z" />
              </svg>
              Open Telegram
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
