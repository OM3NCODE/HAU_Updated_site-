import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, TrendingUp, BookOpen, Rocket, Users, Copy, Check, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { useNFTStats } from '../hooks/useNFTStats';

// Custom Scroll Reveal Component
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isTitleRevealed, setIsTitleRevealed] = useState(false);
  const { minted, mintPrice, floorPrice, upside, loading } = useNFTStats();

  const [copiedHau, setCopiedHau] = useState(false);
  const [copiedUbp, setCopiedUbp] = useState(false);

  const hauCA = "5pGEypcitpXrwoZryQcDjHMzFyBhedLR4F4YyjmskaXt";
  const ubpCA = "9Aj8gNVqU6do2BaShZpEZiDrp2wf7usRuupFpkwh8ray";

  const copyToClipboard = (e, text, setter) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case they are already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const text1 = "We Care.";
    const text2 = "We Listen.";
    const text3 = "We Vibe. 🦄";


    let i = 0;
    let j = 0;
    let k = 0;

    const typeLine1 = () => {
      const chars = Array.from(text1);
      if (i < chars.length) {
        setLine1(chars.slice(0, i + 1).join(''));
        i++;
        setTimeout(typeLine1, 75);
      } else {
        setTimeout(typeLine2, 150);
      }
    };

    const typeLine2 = () => {
      const chars = Array.from(text2);
      if (j < chars.length) {
        setLine2(chars.slice(0, j + 1).join(''));
        j++;
        setTimeout(typeLine2, 75);
      } else {
        setTimeout(typeLine3, 150);
      }
    };

    const typeLine3 = () => {
      const chars = Array.from(text3);
      if (k < chars.length) {
        setLine3(chars.slice(0, k + 1).join(''));
        k++;
        setTimeout(typeLine3, 75);
      } else {
        // Small premium delay before revealing subtext
        setTimeout(() => {
          setIsTitleRevealed(true);
        }, 400);
      }
    };

    const startTimeout = setTimeout(typeLine1, 300);
    return () => clearTimeout(startTimeout);
  }, []);

  const renderLine1 = () => {
    if (!line1) return <span className="text-white invisible">We <span className="text-[#2fff37]">Care.</span></span>;
    if (line1.length <= 3) return <span className="text-white">{line1}</span>;
    return (
      <>
        <span className="text-white">We </span>
        <span className="text-[#2fff37]" style={{ textShadow: '0 0 25px rgba(47,255,55,0.65)' }}>{line1.slice(3)}</span>
      </>
    );
  };

  const renderLine2 = () => {
    if (!line2) return <span className="text-white invisible">We <span className="text-[#ff00fc]">Listen.</span></span>;
    if (line2.length <= 3) return <span className="text-white">{line2}</span>;
    return (
      <>
        <span className="text-white">We </span>
        <span className="text-[#ff00fc]" style={{ textShadow: '0 0 25px rgba(255,0,252,0.65)' }}>{line2.slice(3)}</span>
      </>
    );
  };

  const renderLine3 = () => {
    if (!line3) return <span className="text-white invisible">We <span className="text-[#f2a900]">Vibe.</span> 🦄</span>;
    if (line3.length <= 3) return <span className="text-white">{line3}</span>;
    if (line3.length <= 8) {
      return (
        <>
          <span className="text-white">We </span>
          <span className="text-[#f2a900]" style={{ textShadow: '0 0 25px rgba(242,169,0,0.65)' }}>{line3.slice(3)}</span>
        </>
      );
    }
    return (
      <>
        <span className="text-white">We </span>
        <span className="text-[#f2a900]" style={{ textShadow: '0 0 25px rgba(242,169,0,0.65)' }}>{line3.slice(3, 8)}</span>
        <span className="text-white">{line3.slice(8)}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-12">

      {/* 1. Hero Section Wrapper with Video Loop Background (Full Width) */}
      <section className="relative w-full overflow-hidden min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-black">

        {/* Background Loop Video */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden flex items-center justify-center">
          <video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover z-0 opacity-45">
            <source src={`${import.meta.env.BASE_URL}assets/Hero_video/Webpage hero bgvideo.webm`} type="video/webm" />
            <source src={`${import.meta.env.BASE_URL}assets/Hero_video/Webpage hero bgvideo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Beautiful smooth cinematic overlay customized with brand colors and reduced dark opacity */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/55 to-[#ff00fc]/10 z-10"></div>

          {/* Glow layers utilizing custom brand colors: #2fff37, #ff00fc, #f2a900 */}
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen blur-[130px] pointer-events-none select-none">
            {/* Pink glow (#ff00fc) in top-right */}
            <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#ff00fc] opacity-40"></div>
            {/* Green glow (#2fff37) in center */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#2fff37] opacity-25"></div>
            {/* Gold glow (#f2a900) in bottom-left */}
            <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[#f2a900] opacity-35"></div>
          </div>
        </div>

        {/* Hero Content Grid (Fully Centered, constrained inside max-w-5xl) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-3 sm:gap-6 lg:gap-8 py-2 sm:py-4 lg:py-6">

          <h1 className="text-[3.2rem] min-[360px]:text-[3.6rem] min-[400px]:text-[4.1rem] min-[480px]:text-[4.8rem] sm:text-7xl md:text-8xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem] font-display font-bold leading-[1.0] sm:leading-[0.85] tracking-tight text-white mb-4 uppercase drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center text-center w-full">
            <span className="block min-h-[1.1em] sm:min-h-[1em] whitespace-nowrap">
              {renderLine1()}
            </span>
            <span className="block min-h-[1.1em] sm:min-h-[1em] whitespace-nowrap">
              {renderLine2()}
            </span>
            <span className="block min-h-[1.1em] sm:min-h-[1em] whitespace-nowrap">
              {renderLine3()}
            </span>
          </h1>

          {/* Subtext and Buttons (Always fully visible on desktop, buttons dynamically scroll-revealed on mobile/tablet inside the same section) */}
          <div className="w-full flex flex-col items-center text-center mt-4">
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-tint-neutral/90 max-w-3xl font-body drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed px-4 transition-all duration-[1200ms] transform ${isTitleRevealed
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-[0.98]'
              }`}>
              Two tokens, one NFT, two chains. The Web3 community that survived 2+ years, 77+ consecutive Spaces, and built something real.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 transition-all duration-1000 delay-[400ms] transform lg:transition-none lg:delay-0 lg:opacity-100 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto lg:mt-6 ${isTitleRevealed
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto mt-6'
              : 'opacity-0 translate-y-8 scale-95 pointer-events-none mt-6'
              }`}>
              <Button href="https://launchmynft.io/sol/20352" variant="accent" className="w-full sm:w-auto text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 bg-emerald-500 hover:bg-emerald-600 border-2 border-emerald-400 text-black shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-transform duration-300">
                Mint a Hauwee
              </Button>
              <Button href="https://twitter.com/highasunicorn" variant="secondary" className="w-full sm:w-auto text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 border-2 border-white/20 hover:bg-white/10 hover:scale-105 transition-transform duration-300">
                Follow us on X
              </Button>
            </div>

            {/* Also Follow Us Section */}
            <div className={`mt-6 sm:mt-8 flex flex-col items-center gap-3 transition-all duration-1000 delay-[600ms] transform lg:transition-none lg:delay-0 lg:opacity-100 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto ${isTitleRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <span className="text-tint-neutral/60 text-sm font-mono uppercase tracking-wider">Also follow us here</span>
              <div className="flex gap-4">
                <a
                  href="https://discord.gg/6Jxar3SCFK"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-brand-purple/20 text-tint-neutral hover:text-[#2fff37] hover:border-[#2fff37]/60 hover:bg-black/60 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(47,255,55,0.4)]"
                  aria-label="Discord"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/HighAsUnicorns"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-brand-purple/20 text-tint-neutral hover:text-[#f2a900] hover:border-[#f2a900]/60 hover:bg-black/60 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,169,0,0.4)]"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21a.28.28 0 0 0-.22-.04c-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.15-.22-1.71-.4-.69-.23-1.24-.35-1.19-.74.03-.2.28-.4.76-.6 2.97-1.29 4.96-2.15 5.97-2.58 2.88-1.21 3.48-1.42 3.87-1.43.09 0 .28.02.4.12.1.09.13.21.14.3.01.06.01.17 0 .23z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className={`text-xs sm:text-sm text-tint-neutral/60 font-mono transition-all duration-1000 delay-[700ms] transform lg:transition-none lg:delay-0 lg:opacity-100 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto lg:mt-4 ${isTitleRevealed
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto mt-4'
              : 'opacity-0 translate-y-8 scale-95 pointer-events-none mt-4'
              }`}>
              Looking for <a href="https://shithappens.com" className="underline hover:text-white transition-colors">shithappens.com</a>?
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator (Mobile Only) */}
        <div className={`absolute bottom-6 left-0 right-0 w-full flex md:hidden flex-col items-center justify-center gap-1 animate-bounce z-20 transition-opacity duration-1000 delay-[800ms] px-4 text-center ${isTitleRevealed ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[#2fff37] text-xs sm:text-sm font-display uppercase tracking-[0.2em]" style={{ textShadow: '0 0 10px rgba(47,255,55,0.4)' }}>Scroll to check out more</span>
          <ChevronDown className="text-[#2fff37] w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'drop-shadow(0 0 5px rgba(47,255,55,0.4))' }} />
        </div>
      </section>

      {/* Rest of the Page Content (Constrained to max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-24 pb-8">

        {/* 2. Ecosystem Cards */}
        <RevealOnScroll>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Tokens Card ($HAU & $UBP) */}
            <Link to="/tokens" className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-black/40 border-2 border-[#2fff37]/20 hover:border-[#2fff37]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(47,255,55,0.25)] flex flex-col justify-between min-h-[300px]">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#2fff37]/10 blur-[60px] pointer-events-none transition-all duration-500 group-hover:bg-[#2fff37]/20"></div>
              <div>
                <h3 className="text-[#2fff37] font-display text-3xl mb-3 flex items-center justify-between tracking-wide" style={{ textShadow: '0 0 15px rgba(47,255,55,0.4)' }}>
                  Tokens <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </h3>
                <p className="text-xl font-body font-bold mb-4 text-white">$HAU and $UBP</p>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed mb-4">The Community Token ($HAU) and the Game Token ($UBP). Together they power the ecosystem.</p>
              </div>
              <div className="mt-auto space-y-3">
                {/* HAU CA */}
                <button
                  onClick={(e) => copyToClipboard(e, hauCA, setCopiedHau)}
                  className="w-full flex items-center justify-between bg-black/40 p-3 rounded-xl border border-[#2fff37]/20 hover:border-[#2fff37] transition-colors"
                >
                  <span className="font-mono text-xs truncate mr-2 text-tint-neutral">HAU: {hauCA}</span>
                  {copiedHau ? <Check size={16} className="text-semantic-success flex-shrink-0" /> : <Copy size={16} className="text-[#2fff37] flex-shrink-0" />}
                </button>

                {/* UBP CA */}
                <button
                  onClick={(e) => copyToClipboard(e, ubpCA, setCopiedUbp)}
                  className="w-full flex items-center justify-between bg-black/40 p-3 rounded-xl border border-[#ff00fc]/20 hover:border-[#ff00fc] transition-colors"
                >
                  <span className="font-mono text-xs truncate mr-2 text-tint-neutral">UBP: {ubpCA}</span>
                  {copiedUbp ? <Check size={16} className="text-semantic-success flex-shrink-0" /> : <Copy size={16} className="text-[#ff00fc] flex-shrink-0" />}
                </button>
                <div className="mt-4 text-[#2fff37] font-mono text-xs tracking-wider uppercase opacity-75">Learn More &rarr;</div>
              </div>
            </Link>

            {/* Game Card */}
            <Link to="/game" className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-black/40 border-2 border-[#ff00fc]/20 hover:border-[#ff00fc]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(255,0,252,0.25)] flex flex-col justify-between min-h-[300px]">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ff00fc]/10 blur-[60px] pointer-events-none transition-all duration-500 group-hover:bg-[#ff00fc]/20"></div>
              <div>
                <h3 className="text-[#ff00fc] font-display text-3xl mb-3 flex items-center justify-between tracking-wide" style={{ textShadow: '0 0 15px rgba(255,0,252,0.4)' }}>
                  Game <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </h3>
                <p className="text-xl font-body font-bold mb-4 text-white">Hauwee's Lava Run</p>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed">Play to earn in the HAU ecosystem. Dodge the lava and collect points!</p>
              </div>
              <div className="mt-6 text-[#ff00fc] font-mono text-xs tracking-wider uppercase opacity-75">Play Now &rarr;</div>
            </Link>

            {/* Hauwee NFT Card (Gold) */}
            <Link to="/nfts" className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-black/40 border-2 border-[#f2a900]/20 hover:border-[#f2a900]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(242,169,0,0.25)] flex flex-col justify-between min-h-[300px]">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#f2a900]/10 blur-[60px] pointer-events-none transition-all duration-500 group-hover:bg-[#f2a900]/20"></div>
              <div>
                <h3 className="text-[#f2a900] font-display text-3xl mb-3 flex items-center justify-between tracking-wide" style={{ textShadow: '0 0 15px rgba(242,169,0,0.4)' }}>
                  HAUWEE NFT Collection <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </h3>
                <p className="text-xl font-body font-bold mb-4 text-white">The Access Key</p>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed">1,111 hand-drawn PFPs. Unlocks airdrops,prizes, IRL event,discord roles and more </p>
              </div>
              <div className="mt-6 text-[#f2a900] font-mono text-xs tracking-wider uppercase opacity-75">Learn More &rarr;</div>
            </Link>

          </section>
        </RevealOnScroll>

        {/* 3. Shill Math Banner */}
        <RevealOnScroll>
          <section className="bg-gradient-to-r from-[#ff00fc]/35 via-brand-purple/40 to-[#2fff37]/35 p-1 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">

            {/* Cyberpunk Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none rounded-[22px] z-10"></div>

            {/* Soft Purple Ambient Radial Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/20 blur-[90px] pointer-events-none"></div>

            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
              <TrendingUp size={160} />
            </div>

            <div className="bg-[#080313]/90 backdrop-blur-md rounded-[22px] p-8 sm:p-12 text-center flex flex-col items-center relative z-10 border border-white/5">
              <div className="inline-block px-4 py-1.5 bg-[#f2a900]/10 text-[#f2a900] font-mono font-bold rounded-full text-xs mb-6 border border-[#f2a900]/30 tracking-widest uppercase">
                ARBITRAGE OPPORTUNITY
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-4 tracking-tight leading-none text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                MINT AT <span className="text-[#f2a900]" style={{ textShadow: '0 0 15px rgba(242,169,0,0.4)' }}>{loading ? "..." : `${mintPrice.toFixed(2)} SOL`}</span>
                <span className="text-white/40 mx-4 sm:mx-6 font-sans font-light">&rarr;</span>
                FLOOR AT <span className="text-[#2fff37]" style={{ textShadow: '0 0 15px rgba(47,255,55,0.4)' }}>{loading ? "..." : `${floorPrice.toFixed(3)} SOL`}</span>
              </h2>

              <p className={`text-2xl sm:text-3xl font-display font-black mb-8 animate-pulse ${upside >= 0 ? 'text-[#2fff37]' : 'text-[#ff0033]'}`} style={{ textShadow: upside >= 0 ? '0 0 20px rgba(47,255,55,0.6)' : '0 0 20px rgba(255,0,51,0.6)' }}>
                {loading ? "CALCULATING..." : `${upside > 0 ? '+' : ''}${upside.toFixed(1)}% IMMEDIATE UPSIDE`}
              </p>

              <Button href="https://launchmynft.io/sol/20352" variant="accent" className="text-lg px-12 py-4.5 bg-gradient-to-r from-[#f2a900] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f2a900] border-2 border-[#f2a900]/50 text-black font-extrabold shadow-xl shadow-[#f2a900]/25 rounded-full hover:scale-105 transition-transform duration-300 uppercase tracking-wider font-display">
                Mint Now on LMNFT
              </Button>
            </div>
          </section>
        </RevealOnScroll>

        {/* 4. Live Stats Bar */}
        <RevealOnScroll>
          <section className="bg-black/30 backdrop-blur-md border border-brand-purple/20 rounded-3xl py-10 px-6 sm:px-12 shadow-[0_15px_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 items-center text-center divide-y-0 divide-x-0 md:divide-x md:divide-brand-purple/20">

              <div className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl font-display font-black text-[#f2a900] mb-2" style={{ textShadow: '0 0 15px rgba(242,169,0,0.5)' }}>77+</div>
                <div className="text-xs font-mono font-medium text-tint-neutral/70 uppercase tracking-widest px-2">Spaces Done</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl font-display font-black text-[#2fff37] mb-2" style={{ textShadow: '0 0 15px rgba(47,255,55,0.5)' }}>{loading ? "..." : minted}</div>
                <div className="text-xs font-mono font-medium text-tint-neutral/70 uppercase tracking-widest px-2">Minted</div>
              </div>

              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <div className="text-4xl sm:text-5xl font-display font-black text-[#ff00fc] mb-2" style={{ textShadow: '0 0 15px rgba(255,0,252,0.5)' }}>17+</div>
                <div className="text-xs font-mono font-medium text-tint-neutral/70 uppercase tracking-widest px-2">Partners</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl font-display font-black text-brand-purple mb-2" style={{ textShadow: '0 0 15px rgba(124,58,237,0.5)' }}>2+</div>
                <div className="text-xs font-mono font-medium text-tint-neutral/70 uppercase tracking-widest px-2">Years Building</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl font-display font-black text-[#f2a900] mb-2" style={{ textShadow: '0 0 15px rgba(242,169,0,0.5)' }}>4</div>
                <div className="text-xs font-mono font-medium text-tint-neutral/70 uppercase tracking-widest px-2">Countries</div>
              </div>

            </div>
          </section>
        </RevealOnScroll>

        {/* 5. Three Pillars */}
        <RevealOnScroll>
          <section className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-display font-black mb-6 text-white">
              WHAT GETS YOU <span className="text-[#ff00fc]" style={{ textShadow: '0 0 20px rgba(255,0,252,0.5)' }}>HIGH?</span>
            </h2>
            <p className="text-lg font-body text-tint-neutral/80 mb-12 max-w-2xl mx-auto">Our movement stands firmly on three core pillars that drive everything we build.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

              {/* Pillar 1 */}
              <div className="bg-black/30 border-2 border-[#2fff37]/15 rounded-3xl p-8 hover:border-[#2fff37]/60 hover:shadow-[0_15px_30px_rgba(47,255,55,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center">
                <div className="w-auto px-6 h-16 bg-[#2fff37]/10 border-2 border-[#2fff37]/30 text-[#2fff37] rounded-full flex items-center justify-center font-display font-black text-3xl shadow-[0_0_15px_rgba(47,255,55,0.25)] mb-6 gap-3">
                  <BookOpen size={28} className="drop-shadow-[0_0_10px_rgba(47,255,55,0.5)]" /> 1
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">Education</h3>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed">Sourcing the sharpest insights to navigate Web3 spaces safely and grow profitably together.</p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-black/30 border-2 border-[#ff00fc]/15 rounded-3xl p-8 hover:border-[#ff00fc]/60 hover:shadow-[0_15px_30px_rgba(255,0,252,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center">
                <div className="w-auto px-6 h-16 bg-[#ff00fc]/10 border-2 border-[#ff00fc]/30 text-[#ff00fc] rounded-full flex items-center justify-center font-display font-black text-3xl shadow-[0_0_15px_rgba(255,0,252,0.25)] mb-6 gap-3">
                  <Rocket size={28} className="drop-shadow-[0_0_10px_rgba(255,0,252,0.5)]" /> 2
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">Opportunity</h3>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed">Fostering utility, high-upside airdrops, multiplier models, and trait allocations.</p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-black/30 border-2 border-[#f2a900]/15 rounded-3xl p-8 hover:border-[#f2a900]/60 hover:shadow-[0_15px_30px_rgba(242,169,0,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center">
                <div className="w-auto px-6 h-16 bg-[#f2a900]/10 border-2 border-[#f2a900]/30 text-[#f2a900] rounded-full flex items-center justify-center font-display font-black text-3xl shadow-[0_0_15px_rgba(242,169,0,0.25)] mb-6 gap-3">
                  <Users size={28} className="drop-shadow-[0_0_10px_rgba(242,169,0,0.5)]" /> 3
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">Community</h3>
                <p className="text-tint-neutral/70 font-body text-sm leading-relaxed">A tight-knit, ironclad family that vibes together through all waves of the Web3 landscape.</p>
              </div>

            </div>
          </section>
        </RevealOnScroll>

        {/* 6. Game Teaser */}
        <RevealOnScroll>
          <section className="flex flex-col md:flex-row gap-12 items-center bg-black/45 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-brand-purple/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">

            {/* Visual glow indicators */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#ff00fc]/5 blur-[85px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#2fff37]/5 blur-[85px] pointer-events-none"></div>

            {/* Glowing Retro Screen Video */}
            <div className="flex-1 order-2 md:order-1 relative rounded-2xl overflow-hidden border-4 border-[#080313] group shadow-[0_0_35px_rgba(124,58,237,0.35)] hover:shadow-[0_0_50px_rgba(255,0,252,0.45)] transition-all duration-500 aspect-video bg-black flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              >
                <source src={`${import.meta.env.BASE_URL}assets/Game/Webpage game  bgvideo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Link to="/game" className="bg-[#ff00fc] text-white rounded-full p-5 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-[0_0_25px_rgba(255,0,252,0.85)] hover:bg-[#ff00fc]/85">
                  <Play fill="currentColor" size={36} />
                </Link>
              </div>
            </div>

            {/* Game Info Panel */}
            <div className="flex-1 order-1 md:order-2 flex flex-col items-start gap-6 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-[#ff00fc]/15 text-[#ff00fc] font-mono font-bold rounded-full text-xs border border-[#ff00fc]/30 tracking-widest uppercase">
                PLAY TO EARN
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white mb-2 leading-none">
                HAUWEE'S LAVA RUN
              </h2>

              <p className="text-lg font-body text-tint-neutral/80 leading-relaxed">
                Play. Dodge. Survive. Earn $UBP. A fast-paced, addictive retro-style arcade runner integrated directly within our digital ecosystem.
              </p>

              <Button to="/game" className="text-lg px-8 py-3.5 bg-gradient-to-r from-[#ff00fc] to-brand-purple text-white font-extrabold border-2 border-[#ff00fc]/50 hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#ff00fc]/20 rounded-xl">
                Learn More
              </Button>
            </div>
          </section>
        </RevealOnScroll>

        {/* 7. Partner Marquee */}
        <RevealOnScroll>
          <section className="bg-black/35 backdrop-blur-md rounded-3xl py-8 px-4 border border-brand-purple/20 relative overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.08)_inset]">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold text-tint-neutral/50 uppercase tracking-[0.2em] relative z-10">Trusted By 17+ Ecosystem Collaborators</span>
            </div>
            <div className="flex space-x-16 animate-marquee whitespace-nowrap opacity-80 relative z-10 items-center">
              {[
                { name: 'CFC', logo: `${import.meta.env.BASE_URL}assets/partners/cfc.png` },
                { name: 'RANDY AI', logo: `${import.meta.env.BASE_URL}assets/partners/randyai.png` },
                { name: 'LFGO', logo: `${import.meta.env.BASE_URL}assets/partners/lfgo.png` },
                { name: 'CLUSTERFUCK', logo: `${import.meta.env.BASE_URL}assets/partners/clusterfuck.png` },
                { name: 'Sir Nasty', logo: `${import.meta.env.BASE_URL}assets/partners/sirnasty.png` },
                { name: 'WGA', logo: `${import.meta.env.BASE_URL}assets/partners/wga.png` },
                { name: 'Meta Muses', logo: `${import.meta.env.BASE_URL}assets/partners/metamuses.png` },
                { name: 'GROKLET', logo: `${import.meta.env.BASE_URL}assets/partners/groklet.png` },
                { name: 'MARS', logo: `${import.meta.env.BASE_URL}assets/partners/mars.png` },
                { name: "WEB3 WOMEN'S DAY", logo: `${import.meta.env.BASE_URL}assets/partners/w3wd.png` },
                { name: 'More to come 🙂', logo: null },
                // Duplicated to create seamless loop
                { name: 'CFC', logo: `${import.meta.env.BASE_URL}assets/partners/cfc.png` },
                { name: 'RANDY AI', logo: `${import.meta.env.BASE_URL}assets/partners/randyai.png` },
                { name: 'LFGO', logo: `${import.meta.env.BASE_URL}assets/partners/lfgo.png` },
                { name: 'CLUSTERFUCK', logo: `${import.meta.env.BASE_URL}assets/partners/clusterfuck.png` },
                { name: 'Sir Nasty', logo: `${import.meta.env.BASE_URL}assets/partners/sirnasty.png` },
                { name: 'WGA', logo: `${import.meta.env.BASE_URL}assets/partners/wga.png` },
                { name: 'Meta Muses', logo: `${import.meta.env.BASE_URL}assets/partners/metamuses.png` },
                { name: 'GROKLET', logo: `${import.meta.env.BASE_URL}assets/partners/groklet.png` },
                { name: 'MARS', logo: `${import.meta.env.BASE_URL}assets/partners/mars.png` },
                { name: "WEB3 WOMEN'S DAY", logo: `${import.meta.env.BASE_URL}assets/partners/w3wd.png` },
                { name: 'More to come 🙂', logo: null }
              ].map((partner, i) => {
                // Dynamic retro color cycle matching the brand scheme
                const colors = [
                  'text-[#2fff37] drop-shadow-[0_0_8px_rgba(47,255,55,0.3)]',
                  'text-[#ff00fc] drop-shadow-[0_0_8px_rgba(255,0,252,0.3)]',
                  'text-[#f2a900] drop-shadow-[0_0_8px_rgba(242,169,0,0.3)]',
                  'text-brand-purple drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]',
                  'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]'
                ];
                const colorClass = colors[i % colors.length];

                return (
                  <div key={i} className="flex items-center gap-4 transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
                    {partner.logo && (
                      <img src={partner.logo} alt={partner.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-purple/50 shadow-[0_0_15px_rgba(124,58,237,0.3)] shrink-0" />
                    )}
                    <span className={`text-4xl font-display font-black tracking-wider ${colorClass}`}>
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </RevealOnScroll>

      </div>
    </div>
  );
};

export default Home;
