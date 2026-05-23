import React, { useState, useEffect } from 'react';
import { Repeat, ArrowRight, Lock, Gift, Award, Users, TrendingUp, ChevronRight } from 'lucide-react';

const flywheelSteps = [
  {
    title: 'Hold Hauwee',
    subtitle: 'Step 1',
    icon: <Lock size={20} />,
    color: 'from-nft-orange to-[#ea580c]',
    glow: 'shadow-nft-orange/20',
    activeGlow: 'shadow-[0_0_35px_rgba(234,88,12,0.4)] border-nft-orange/80 bg-nft-orange/5',
    textColor: 'text-nft-orange',
    desc: 'Secure a Sean-original hand-drawn PFP. Holding a Hauwee is your master key to the ecosystem, unlocking dynamic staking pools, high-frequency partner airdrops, and game multipliers.'
  },
  {
    title: 'Play & Get Perks',
    subtitle: 'Step 2',
    icon: <Gift size={20} />,
    color: 'from-token-ubp to-[#0d9488]',
    glow: 'shadow-token-ubp/20',
    activeGlow: 'shadow-[0_0_35px_rgba(13,148,136,0.4)] border-token-ubp/80 bg-token-ubp/5',
    textColor: 'text-token-ubp',
    desc: 'Participate in Friday community events and play Lava Run. Your Hauwee PFPs act as reward multipliers, boosting your $UBP in-game yield and partner token distribution rates.'
  },
  {
    title: 'Earn $UBP',
    subtitle: 'Step 3',
    icon: <Award size={20} />,
    color: 'from-[#2fff37] to-[#15803d]',
    glow: 'shadow-[#2fff37]/20',
    activeGlow: 'shadow-[0_0_35px_rgba(47,255,55,0.4)] border-[#2fff37]/80 bg-[#2fff37]/5',
    textColor: 'text-[#2fff37]',
    desc: 'Amass $UBP tokens with a completely burned LP and 100% community ownership. Stack your holdings by climbing game leaderboards, winning spaces, and completing social quests.'
  },
  {
    title: 'Community Grows',
    subtitle: 'Step 4',
    icon: <Users size={20} />,
    color: 'from-brand-purple to-[#7c3aed]',
    glow: 'shadow-brand-purple/20',
    activeGlow: 'shadow-[0_0_35px_rgba(124,58,237,0.4)] border-brand-purple/80 bg-brand-purple/5',
    textColor: 'text-brand-purple',
    desc: 'Community-Takeover (CTO) energy sweeps across Web3! Highly active gamers, successful Spaces, and organic hype draw degen buyers to the Friday Spaces and token ecosystem.'
  },
  {
    title: 'Value Rises',
    subtitle: 'Step 5',
    icon: <TrendingUp size={20} />,
    color: 'from-[#ff00fc] to-[#db2777]',
    glow: 'shadow-[#ff00fc]/20',
    activeGlow: 'shadow-[0_0_35px_rgba(255,0,252,0.4)] border-[#ff00fc]/80 bg-[#ff00fc]/5',
    textColor: 'text-[#ff00fc]',
    desc: 'As circulation velocity speeds up, organic buying pressure increases floor prices and pumps charts. Staked multipliers earn higher yields, repeating the cycle on a larger scale.'
  }
];

const Flywheel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay loop for flywheel
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flywheelSteps.length);
    }, 2000); // Loop plays at 2 seconds per cycle
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsPlaying(false); // Pause autoplay when user manually interacts
  };

  return (
    <section className="bg-black/25 border-2 border-brand-purple/20 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
      {/* Soft background grid & spots */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col gap-10">
        <div>
          <h2 className="text-4xl font-display font-black mb-3 tracking-wide text-white">THE HAU FLYWHEEL</h2>
          <p className="text-tint-neutral/70 max-w-xl mx-auto text-base">
            A self-reinforcing value loop. Click any node to explore how holding, gaming, and community viral energy fuels long-term ecosystem growth.
          </p>
        </div>

        {/* Interactive Node Graph */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 max-w-5xl mx-auto w-full relative pt-4">
          
          {flywheelSteps.map((item, i) => {
            const isActive = activeStep === i;
            const activeClasses = isActive ? item.activeGlow : 'border-brand-purple/20 bg-brand-deep/30 hover:border-brand-purple/50';

            return (
              <React.Fragment key={i}>
                {/* Step Button Card */}
                <button
                  onClick={() => handleStepClick(i)}
                  className={`flex-1 w-full lg:w-auto p-5 sm:p-6 rounded-2xl border-2 text-center flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer shadow-xl z-10 transform hover:-translate-y-1 ${activeClasses}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 ${isActive ? item.textColor : 'text-tint-neutral/60'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest uppercase text-tint-neutral/45 font-bold">{item.subtitle}</div>
                    <div className={`font-display font-bold text-sm sm:text-base leading-tight mt-1 transition-colors ${isActive ? item.textColor : 'text-tint-neutral/70'}`}>
                      {item.title}
                    </div>
                  </div>
                </button>

                {/* Connecting Arrow */}
                {i < flywheelSteps.length - 1 && (
                  <div className={`rotate-90 lg:rotate-0 flex items-center justify-center shrink-0 z-10 transition-colors duration-300 ${activeStep === i ? flywheelSteps[i + 1].textColor : 'text-brand-purple/30'}`}>
                    <ChevronRight size={24} className="animate-pulse hidden lg:block" />
                    <ArrowRight size={20} className="animate-pulse lg:hidden" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Dynamic Details Narrative Panel */}
        <div className="bg-brand-deep/50 border border-brand-purple/35 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto w-full text-left relative overflow-hidden shadow-2xl transition-all duration-500">
          {/* Dynamic step accent glow */}
          <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${flywheelSteps[activeStep].color}`}></div>

          <div className="flex gap-4 items-start sm:items-center border-b border-brand-purple/10 pb-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${flywheelSteps[activeStep].textColor}`}>
              {flywheelSteps[activeStep].icon}
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-tint-neutral/50 uppercase">{flywheelSteps[activeStep].subtitle} Detail Overview</span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white mt-0.5 uppercase tracking-wide">
                {flywheelSteps[activeStep].title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-tint-neutral/85 leading-relaxed">
            {flywheelSteps[activeStep].desc}
          </p>
        </div>

        {/* Autoplay Loop Controller */}
        <div className="flex justify-center items-center gap-4 mt-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold border border-brand-purple/30 bg-brand-deep/60 hover:bg-brand-purple/20 text-white transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <Repeat size={14} className={isPlaying ? 'animate-spin-slow' : ''} />
            {isPlaying ? 'PAUSE AUTOMATIC LOOP' : 'RESUME AUTOMATIC LOOP'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Flywheel;
