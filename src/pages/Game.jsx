import React from 'react';
import { Gamepad2, Clock, Zap } from 'lucide-react';
import Button from '../components/Button';

const Game = () => {
  return (
    <div className="flex flex-col gap-24 pb-8">

      {/* 1. Hero Section with Video Loop Background (Full Width) */}
      <section className="relative w-full overflow-hidden min-h-[90svh] lg:min-h-[85svh] flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-black">

        {/* Background Loop Video */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          >
            <source src="/assets/Game/Webpage game  bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Beautiful overlay with UBP theme color (#0d9488) highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/60 to-[#0d9488]/15 z-10"></div>

          {/* Glow layers */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen blur-[120px] pointer-events-none select-none">
            {/* Teal glow matching UBP */}
            <div className="absolute top-1/4 right-12 w-96 h-96 rounded-full bg-[#0d9488] opacity-40"></div>
            {/* Purple glow */}
            <div className="absolute -bottom-12 left-1/4 w-80 h-80 rounded-full bg-brand-purple opacity-30"></div>
            {/* Orange NFT glow */}
            <div className="absolute -top-12 left-12 w-96 h-96 rounded-full bg-[#ea580c] opacity-25"></div>
          </div>
        </div>

        {/* Hero Content (Centering and constraints) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-center pt-4 sm:pt-6">

          {/* Left panel: Info & Headings */}
          <div className="flex-1 order-2 lg:order-1 flex flex-col gap-6 text-left w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d9488]/15 text-[#0d9488] font-bold rounded-full w-max border border-[#0d9488]/30 backdrop-blur-md shadow-lg shadow-[#0d9488]/5">
              <Gamepad2 size={20} className="animate-pulse" /> PLAY TO EARN
            </div>

            <h1 className="text-[3.2rem] min-[360px]:text-[3.8rem] min-[440px]:text-[4.5rem] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black leading-[1.0] text-white uppercase drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]">
              HAUWEE'S <br className="hidden sm:block" /> LAVA RUN
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-tint-neutral/90 max-w-lg font-body drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-relaxed">
              Play. Dodge. Survive. Earn **$UBP**. A fast-paced, addictive retro-style arcade runner integrated directly within our digital ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button href="https://discord.gg/6Jxar3SCFK" variant="accent" className="w-full sm:w-auto text-center px-10 py-4.5 bg-gradient-to-r from-token-ubp to-[#0d9488] hover:scale-105 border-2 border-token-ubp/50 text-white font-extrabold uppercase shadow-xl shadow-token-ubp/25">
                Play on Discord
              </Button>
              <Button href="https://t.me/HighAsUnicorns/11719" variant="secondary" className="w-full sm:w-auto text-center px-10 py-4.5 border-2 border-white/20 hover:bg-white/10 hover:scale-105">
                Play on Telegram
              </Button>
            </div>
          </div>

          {/* Right panel: Live Gameplay Gif Showcase */}
          <div className="flex-1 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden border-4 border-token-ubp/45 shadow-[0_0_35px_rgba(13,148,136,0.3)] hover:shadow-[0_0_50px_rgba(13,148,136,0.45)] transition-all duration-500 w-full max-w-xl lg:max-w-none transform hover:scale-[1.02]">
              <img
                src="/assets/Game/download.gif"
                alt="Hauwee's Lava Run Gameplay loop"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/85 px-4 py-2 rounded-lg font-mono text-[#2fff37] font-bold flex items-center gap-2 border border-[#2fff37]/35 backdrop-blur-sm shadow-md">
                <Zap size={16} className="animate-bounce" /> LIVE NOW
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Constrained Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-24">

        {/* Play Platforms Buttons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Discord Card */}
          <div className="bg-[#5865F2]/10 border border-[#5865F2]/30 p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-[#5865F2]/20 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(88,101,242,0.15)]">
            <div className="w-20 h-20 bg-[#5865F2] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#5865F2]/30 transform group-hover:-translate-y-2 transition-transform">
              <svg width="40" height="40" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Play on Discord</h2>
            <p className="text-tint-neutral/80 mb-8 max-w-md">Join the server, hop into the game channel, and start running. Best for community game nights and competing for shared pools.</p>
            <Button href="https://discord.gg/6Jxar3SCFK" className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4">Join Discord Server</Button>
          </div>

          {/* Telegram Card */}
          <div id="play-tg" className="bg-[#2AABEE]/10 border border-[#2AABEE]/30 p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-[#2AABEE]/20 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(42,171,238,0.15)]">
            <div className="w-20 h-20 bg-[#2AABEE] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2AABEE]/30 transform group-hover:-translate-y-2 transition-transform">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.36-.99.54-1.41.53-.46-.01-1.34-.26-2-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8-3.46 3.8-1.64 4.59-1.92 5.11-1.93.11 0 .37.03.5.15.11.1.14.24.15.36-.01.1-.01.22-.02.29z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Play on Telegram</h2>
            <p className="text-tint-neutral/80 mb-8 max-w-md">Interact directly with the HAU bot. Perfect for quick sessions, checking scores, and staking from anywhere on the go.</p>
            <Button href="https://t.me/HighAsUnicorns/11719" className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold py-4">Open Telegram Bot</Button>
          </div>
        </section>

        {/* Info Grid (Daily Rewards & UBP Payouts + Schedule) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Daily Rewards & UBP Payouts */}
          <div className="lg:col-span-2 bg-black/20 border border-brand-purple/20 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between gap-8 shadow-2xl">
            {/* Ambient gold glow highlight inside rewards */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#f2a900]/5 blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col gap-2 border-b border-brand-purple/15 pb-4 relative z-10 text-left">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-wide uppercase flex items-center gap-2">
                💰 DAILY REWARDS & UBP PAYOUTS
              </h2>
              <p className="text-tint-neutral/70 text-sm sm:text-base leading-relaxed">
                Our reward system runs on a strict 24-hour reset. Every single day, you have two ways to earn UBP:
              </p>
            </div>

            {/* Two Columns for Pool & Leaderboard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 text-left">

              {/* Pool Card (Brand Green themed) */}
              <div className="bg-[#2fff37]/10 border border-[#2fff37]/20 p-6 rounded-2xl flex flex-col justify-between hover:border-[#2fff37]/60 hover:bg-[#2fff37]/15 transition-all duration-300 hover:shadow-[0_0_25px_rgba(47,255,55,0.15)] shadow-lg">
                <div>
                  <div className="w-12 h-12 bg-[#2fff37]/10 text-[#2fff37] rounded-xl flex items-center justify-center mb-5 border border-[#2fff37]/35 shadow-[0_0_10px_rgba(47,255,55,0.15)]">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">The Daily Objectives</h3>
                  <p className="text-xs text-tint-neutral/70 leading-relaxed mb-4">
                    Finish all of your daily challenges, and you will get an equal cut of a <strong className="text-white">1,000 UBP</strong> community pool.
                  </p>
                  <p className="text-[11px] text-[#2fff37]/90 font-mono italic leading-relaxed bg-[#2fff37]/5 border border-[#2fff37]/20 p-3 rounded-lg">
                    Pro tip: The fewer people who finish their challenges that day, the bigger your slice of the pie!
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2fff37]/15 flex justify-between items-center text-xs">
                  <span className="font-mono uppercase tracking-wider text-tint-neutral/45">Pool Value</span>
                  <span className="font-mono font-bold text-[#2fff37] bg-[#2fff37]/10 border border-[#2fff37]/20 px-2 py-0.5 rounded">1,000 UBP / Day</span>
                </div>
              </div>

              {/* Leaderboard Payouts Card (Brand Yellow/Gold themed) */}
              <div className="bg-[#f2a900]/10 border border-[#f2a900]/25 p-6 rounded-2xl flex flex-col justify-between hover:border-[#f2a900]/65 hover:bg-[#f2a900]/15 transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,169,0,0.15)] shadow-lg">
                <div>
                  <div className="w-12 h-12 bg-[#f2a900]/10 text-[#f2a900] rounded-xl flex items-center justify-center mb-5 border border-[#f2a900]/30 shadow-[0_0_10px_rgba(242,169,0,0.15)]">
                    <span className="text-xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">The Daily Leaderboard</h3>
                  <p className="text-xs text-tint-neutral/70 leading-relaxed mb-4">
                    Think you’re the fastest runner on the internet? Top players take home guaranteed bags every 24 hours:
                  </p>

                  {/* Daily Leaderboard breakdown items (Header Font styled) */}
                  <div className="flex flex-col gap-2.5 mt-4">
                    <div className="flex justify-between items-center p-2.5 rounded bg-white/5 border border-[#f2a900]/15 font-display font-black text-xs sm:text-sm tracking-wide uppercase">
                      <span className="flex items-center gap-1.5 text-white">🥇 1st Place</span>
                      <span className="text-[#2fff37]">500 UBP</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded bg-white/5 border border-[#f2a900]/15 font-display font-black text-xs sm:text-sm tracking-wide uppercase">
                      <span className="flex items-center gap-1.5 text-white">🥈 2nd Place</span>
                      <span className="text-[#f2a900]">200 UBP</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 rounded bg-white/5 border border-[#f2a900]/15 font-display font-black text-xs sm:text-sm tracking-wide uppercase">
                      <span className="flex items-center gap-1.5 text-white">🥉 3rd Place</span>
                      <span className="text-[#f2a900]">200 UBP</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Info Banner */}
            <div className="bg-brand-purple/10 border border-brand-purple/20 p-3 rounded-xl text-center relative z-10 text-xs font-mono text-[#ff00fc] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,0,252,0.05)] w-full">
              <span>💡</span>
              <span className="font-bold tracking-wide uppercase">Note: You will receive your rewards at the end of the week.</span>
            </div>

          </div>

          {/* Game Nights Schedule Column */}
          <div className="lg:col-span-1 bg-brand-purple/10 border border-brand-purple/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full hover:bg-brand-purple/15 transition-all duration-300 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <div className="text-left relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-brand-purple" size={24} />
                <h3 className="text-2xl font-bold text-white uppercase font-display tracking-wide">Game Nights</h3>
              </div>
              <p className="text-sm sm:text-base text-tint-neutral/80 leading-relaxed">
                Join us every Wednesday for community game night in Discord alpha channels.
              </p>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
};

export default Game;
