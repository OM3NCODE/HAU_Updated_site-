import React, { useState } from 'react';
import { TrendingUp, Gift, Users, Star, Lock, Sparkles, Info, Eye, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import { useNFTStats } from '../hooks/useNFTStats';

// Curated Showcase NFT Data
const nftData = [
  // Super Rare
  {
    id: "272",
    name: "Hauwee #272",
    type: "Super Rare",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Super_rare/272.png`,
    traitLabel: "Rainbow Pengwine Bottle",
    traitType: "Horn",
    desc: "A legendary PFP showing off the ultra-rare Rainbow Pengwine Bottle trait. Instantly recognizable and highly valuable."
  },
  {
    id: "241",
    name: "Hauwee #241",
    type: "Super Rare",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Super_rare/241.png`,
    traitLabel: "Unicorn Fart Horn",
    traitType: "Horn Trait",
    desc: "An elite combination styled with the legendary, glowing Unicorn Fart Horn. One of the crown jewels of the collection."
  },
  {
    id: "237",
    name: "Hauwee #237",
    type: "Super Rare",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Super_rare/237.png`,
    traitLabel: "Cactus Horn",
    traitType: "Horn Trait",
    desc: "An exceptionally unique digital artwork displaying the sharp and highly sought-after Cactus Horn trait."
  },
  // Community Collab
  {
    id: "76",
    name: "Hauwee #76",
    type: "Community Collab",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Community_Collab/76.png`,
    traitLabel: "$LFGO & $VAI",
    traitType: "Collab Edition",
    desc: "Celebrating HAU's close integrations and crossover partner communities."
  },
  {
    id: "253",
    name: "Hauwee #253",
    type: "Community Collab",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Community_Collab/253.png`,
    traitLabel: "CFC",
    traitType: "Collab Edition",
    desc: "Custom-tailored crossover blending community culture with partner aesthetics."
  },
  {
    id: "493",
    name: "Hauwee #493",
    type: "Community Collab",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Community_Collab/493.png`,
    traitLabel: "Clusterfuck",
    traitType: "Collab Edition",
    desc: "A special edition built side-by-side with our dedicated Web3 ecosystem partners."
  },
  {
    id: "416",
    name: "Hauwee #416",
    type: "Community Collab",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Community_Collab/416.png`,
    traitLabel: "TouchGrass & WGA",
    traitType: "Collab Edition",
    desc: "A collaborative community takeover piece built in solidarity with the core HAU family."
  },
  {
    id: "458",
    name: "Hauwee #458",
    type: "Community Collab",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Community_Collab/458.png`,
    traitLabel: "BASC & Pengwine",
    traitType: "Collab Edition",
    desc: "Bridging the gaps and highlighting major collaborative initiatives on Solana."
  },
  // Common
  {
    id: "33",
    name: "Hauwee #33",
    type: "Common",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Common/33.png`,
    desc: "A classic representation of the hand-drawn Sean base styles that laid the ecosystem foundations."
  },
  {
    id: "419",
    name: "Hauwee #419",
    type: "Common",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Common/419.png`,
    desc: "Featuring standard, well-balanced daily lines and colors canonical to the PFP collection."
  },
  {
    id: "445",
    name: "Hauwee #445",
    type: "Common",
    img: `${import.meta.env.BASE_URL}assets/NFTs/Common/445.png`,

  }
];

const NFTs = () => {
  const { minted, total, mintPrice, floorPrice, loading, percentage, upside } = useNFTStats();
  const [activeFilter, setActiveFilter] = useState('All');

  const benefits = [
    { icon: <Star />, title: "Trait Prizes", desc: "Hold specific traits? Win SOL, tokens, and IRL prizes." },
    { icon: <Gift />, title: "Airdrops", desc: "Regular $UBP and partner token airdrops for holders." },
    {
      icon: <Lock />,
      title: "NFT Staking",
      desc: "Stake your Hauwees to earn exclusive rewards and yield partner tokens.",
      badge: "Coming Soon"
    },
    { icon: <Users />, title: "Discord Roles", desc: "Exclusive channels, alpha, and early access to drops." },
    { icon: <TrendingUp />, title: "IRL Events", desc: "VIP access to HAU meetups around the world." },
  ];

  const filteredNFTs = nftData.filter(nft =>
    activeFilter === 'All' ? true : nft.type === activeFilter
  );

  return (
    <div className="flex flex-col gap-24 py-8">

      {/* 1. Header & Mint Progress */}
      <section className="text-center max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">The Hauwee Collection</h1>
          <p className="text-xl text-tint-neutral/80">
            1,111 hand-drawn by <a href="https://x.com/cryptoverlordx" target="_blank" rel="noopener noreferrer" className="text-nft-orange hover:underline font-bold">Sean (@cryptoverlordx)</a>. 150 unique traits. <br className="hidden sm:block" /> Each one is your key to the HAU ecosystem.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative group/counter w-full">
          {/* Peeking NFT 1 */}
          <div className="absolute top-[-85px] left-[-30px] sm:top-[-115px] sm:left-[-40px] w-28 h-28 sm:w-36 sm:h-36 z-0 pointer-events-none select-none transition-all duration-500 ease-out origin-bottom-right rotate-[-15deg] translate-x-3 translate-y-4 opacity-90 group-hover/counter:translate-x-0 group-hover/counter:translate-y-0 group-hover/counter:rotate-[-5deg] group-hover/counter:opacity-100">
            <img 
              src={`${import.meta.env.BASE_URL}assets/NFTs/BG NFT 1.png`} 
              alt="Peeking NFT 1" 
              className="w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(124,58,237,0.4)]"
            />
          </div>

          <div className="bg-black/20 p-8 rounded-3xl border border-brand-purple/20 relative z-10 backdrop-blur-md">
            <div className="flex justify-between items-end mb-4">
              <div className="text-left">
                <span className="text-sm font-bold text-nft-orange uppercase tracking-wider block mb-1">Mint Progress</span>
                <span className="text-4xl font-display font-bold">{minted} <span className="text-2xl text-tint-neutral/50">/ {total}</span></span>
              </div>
              <div className="text-right text-tint-neutral/80 font-bold text-xl">
                {percentage.toFixed(1)}%
              </div>
            </div>
            <div className="h-6 w-full bg-brand-deep rounded-full overflow-hidden border border-brand-purple/30 mb-6 relative">
              {loading && <div className="absolute inset-0 bg-white/5 z-10 animate-pulse"></div>}
              <div
                className="h-full bg-gradient-to-r from-brand-purple to-nft-orange rounded-full relative transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(100, percentage)}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-brand-purple/20 border-t border-brand-purple/20 pt-6 relative">
              {loading && <div className="absolute inset-0 bg-brand-dark/50 flex items-center justify-center backdrop-blur-[2px] z-10 rounded-b-3xl">
                <span className="text-sm font-bold text-brand-purple animate-pulse">Loading live data...</span>
              </div>}
              <div>
                <div className="text-xs text-tint-neutral/60 uppercase mb-1">Mint Price</div>
                <div className="font-mono text-xl font-bold text-white">{mintPrice.toFixed(2)} SOL</div>
              </div>
              <div>
                <div className="text-xs text-tint-neutral/60 uppercase mb-1">Floor Price</div>
                <div className="font-mono text-xl font-bold text-white">{floorPrice.toFixed(3)} SOL</div>
              </div>
              <div>
                <div className="text-xs text-tint-neutral/60 uppercase mb-1">Upside</div>
                <div className={`font-mono text-xl font-bold ${upside >= 0 ? 'text-semantic-success' : 'text-semantic-error'}`}>
                  {upside > 0 ? '+' : ''}{upside.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-tint-neutral/60 uppercase mb-1">Remaining</div>
                <div className="font-mono text-xl font-bold text-nft-orange">{Math.max(0, total - minted)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mint CTA Block */}
      <div className="relative group/mint max-w-4xl mx-auto w-full">
        {/* Peeking NFT 2 */}
        <div className="absolute top-[-85px] right-[-30px] sm:top-[-115px] sm:right-[-40px] w-28 h-28 sm:w-36 sm:h-36 z-0 pointer-events-none select-none transition-all duration-500 ease-out origin-bottom-left rotate-[15deg] -translate-x-3 translate-y-4 opacity-90 group-hover/mint:translate-x-0 group-hover/mint:translate-y-0 group-hover/mint:rotate-[5deg] group-hover/mint:opacity-100">
          <img 
            src={`${import.meta.env.BASE_URL}assets/NFTs/BG NFT 2.png`} 
            alt="Peeking NFT 2" 
            className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(242,169,0,0.5)]"
          />
        </div>

        <section className="bg-gradient-to-r from-nft-orange/20 to-brand-purple/20 rounded-3xl p-8 sm:p-16 border border-nft-orange/30 text-center shadow-2xl shadow-nft-orange/10 relative z-10 backdrop-blur-md">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Mint is <span className="text-nft-orange">CHEAPER</span> than floor.<br />Do the math.</h2>
          <p className="text-2xl mb-10 max-w-2xl mx-auto text-tint-neutral/90">
            Secondaries sell at 0.3-0.45 SOL. That's up to 105% upside instantly. Why buy on ME when you can mint fresh?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button href="https://launchmynft.io/sol/20352" variant="accent" className="text-xl px-12 py-5 font-bold">
              Mint on LaunchMyNFT
            </Button>
            <Button href="https://magiceden.io/marketplace/hauwees" variant="secondary" className="text-xl px-12 py-5 font-bold bg-brand-deep/50">
              Browse on Magic Eden
            </Button>
          </div>
        </section>
      </div>

      {/* 3. NFT Showcase Gallery */}
      <section className="flex flex-col gap-10">

        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-brand-purple/20 pb-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">Showcase & Traits</h2>
            <p className="text-tint-neutral/70">Explore hand-drawn rarities, community collabs, and signature items.</p>
          </div>
          <Button href="https://magiceden.io/marketplace/hauwees" variant="tertiary" className="font-bold flex items-center gap-2 bg-brand-deep/30 text-white border border-brand-purple/30 hover:bg-brand-purple/20">
            <ExternalLink size={16} /> View Marketplace
          </Button>
        </div>

        {/* Informative Rarity system caption container */}
        <div className="bg-black/35 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-brand-purple/20 relative overflow-hidden flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#f2a900]/10 blur-[60px] pointer-events-none"></div>

          <div className="w-14 h-14 rounded-2xl bg-[#f2a900]/10 text-[#f2a900] border border-[#f2a900]/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,169,0,0.15)]">
            <Info size={28} className="drop-shadow-[0_0_8px_rgba(242,169,0,0.5)]" />
          </div>

          <div className="flex-1 flex flex-col gap-3">
            <h4 className="text-xl font-bold text-white">
              Understanding Hauwee Rarity Systems
            </h4>
            <p className="text-sm sm:text-base text-tint-neutral/80 leading-relaxed">
              Every single Hauwee is dynamically composed of 150+ hand-drawn traits across categories like background, face type, apparel, and horns. Each trait layer contains items ranging from <span className="text-tint-neutral font-semibold">Common</span> to <span className="text-[#ff00fc] font-semibold">Super Rare</span>.
            </p>
            <div className="text-xs sm:text-sm text-[#f2a900] font-mono mt-1 border-t border-brand-purple/10 pt-3 flex flex-wrap items-center gap-y-2 gap-x-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <strong>Example (Horn Trait):</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white">Cross Cross = Common</span>
              <span className="text-white/40">&rarr;</span>
              <span className="px-2 py-0.5 rounded bg-[#ff00fc]/10 border border-[#ff00fc]/35 text-[#ff00fc] shadow-[0_0_8px_rgba(255,0,252,0.1)] font-semibold">Unicorn Fart / Cactus Horn = Super Rare</span>
            </div>
            <p className="text-xs text-tint-neutral/50 font-mono mt-1">
              * Real-time rarity percentages are computed dynamically based on the total minted supply. You can explore exact rarity distribution scores and filter traits under the <strong className="text-white">"Traits"</strong> tab directly on Magic Eden.
            </p>
          </div>
        </div>

        {/* Tabs Filter */}
        <div className="flex justify-center sm:justify-start">
          <div className="inline-flex p-1.5 bg-black/40 rounded-full border border-brand-purple/20 gap-1.5">
            {['All', 'Super Rare', 'Community Collab', 'Common'].map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-brand-purple to-[#ff00fc] text-white shadow-[0_0_15px_rgba(124,58,237,0.35)] scale-105'
                    : 'text-tint-neutral/70 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredNFTs.map((nft) => {
            let cardStyle = "border-brand-purple/20 hover:border-brand-purple/60 hover:shadow-[0_10px_25px_rgba(124,58,237,0.15)]";
            let pillStyle = "bg-white/10 text-white border-white/15";
            let badgeText = nft.type;

            if (nft.type === "Super Rare") {
              cardStyle = "border-[#f2a900]/30 hover:border-[#f2a900]/70 hover:shadow-[0_12px_30px_rgba(242,169,0,0.25)] bg-gradient-to-b from-black/20 to-[#f2a900]/5";
              pillStyle = "bg-[#f2a900]/10 text-[#f2a900] border-[#f2a900]/30 shadow-[0_0_10px_rgba(242,169,0,0.15)]";
            } else if (nft.type === "Community Collab") {
              cardStyle = "border-[#2fff37]/30 hover:border-[#2fff37]/70 hover:shadow-[0_12px_30px_rgba(47,255,55,0.25)] bg-gradient-to-b from-black/20 to-[#2fff37]/5";
              pillStyle = "bg-[#2fff37]/10 text-[#2fff37] border-[#2fff37]/30 shadow-[0_0_10px_rgba(47,255,55,0.15)]";
            }

            return (
              <div
                key={nft.id}
                className={`bg-brand-deep rounded-2xl overflow-hidden border transition-all duration-500 group flex flex-col ${cardStyle}`}
              >
                {/* NFT Image Container */}
                <div className="aspect-square bg-tint-neutral/5 p-4 flex justify-center items-center relative overflow-hidden shrink-0 border-b border-brand-purple/10">
                  <img
                    src={nft.img}
                    alt={nft.name}
                    className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500 rounded-xl"
                  />

                  {/* Category Pill Tag */}
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider border backdrop-blur-md ${pillStyle}`}>
                    {badgeText}
                  </span>

                  {/* ID Tag */}
                  <div className="absolute top-3 right-3 bg-black/75 text-xs font-mono font-bold px-2.5 py-1 rounded text-white backdrop-blur-md border border-brand-purple/20">
                    #{nft.id}
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={`https://magiceden.io/marketplace/hauwee?search=%22${nft.id}%22`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#ff00fc] to-brand-purple hover:scale-105 text-white font-extrabold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform"
                    >
                      <Eye size={16} /> View Traits
                    </a>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff00fc] transition-colors">
                      {nft.name}
                    </h3>

                    {/* Specialized details based on NFT category */}
                    {nft.type === "Super Rare" && (
                      <>
                        <div className="mb-2.5 bg-[#f2a900]/10 border border-[#f2a900]/25 rounded-lg p-2.5 flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-[#f2a900]/80 uppercase tracking-widest block font-bold">
                            Trait: {nft.traitType}
                          </span>
                          <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                            <Sparkles size={14} className="text-[#f2a900] animate-bounce" /> {nft.traitLabel}
                          </span>
                        </div>
                        <p className="text-xs text-tint-neutral/70 font-body leading-relaxed">
                          {nft.desc}
                        </p>
                      </>
                    )}

                    {nft.type === "Community Collab" && (
                      <>
                        <div className="mb-2 text-xs text-tint-neutral/60 font-mono flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                          <span>Collab Partner: {nft.traitLabel}</span>
                        </div>
                        <p className="text-xs text-tint-neutral/70 font-body leading-relaxed">
                          {nft.desc}
                        </p>
                      </>
                    )}

                    {nft.type === "Common" && (
                      <div className="h-4"></div>
                    )}
                  </div>

                  <a
                    href={`https://magiceden.io/marketplace/hauwee?search=%22${nft.id}%22`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-nft-orange uppercase tracking-wider font-bold hover:underline inline-flex items-center gap-1 group-hover:text-white transition-colors"
                  >
                    View on Magic Eden &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Holder Benefits */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Holder Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`relative overflow-hidden p-8 rounded-2xl transition-all duration-300 ${benefit.badge
                ? 'bg-black/30 border-2 border-[#ff00fc]/35 hover:border-[#ff00fc]/75 shadow-[0_0_20px_rgba(255,0,252,0.15)] hover:shadow-[0_0_30px_rgba(255,0,252,0.3)]'
                : 'bg-black/20 border border-brand-purple/20 hover:border-brand-purple hover:bg-brand-purple/10'
                }`}
            >
              {benefit.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#ff00fc]/10 text-[#ff00fc] border border-[#ff00fc]/30 uppercase tracking-widest animate-pulse shadow-[0_0_10px_rgba(255,0,252,0.2)]">
                    {benefit.badge}
                  </span>
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${benefit.badge
                ? 'bg-[#ff00fc]/20 text-[#ff00fc] shadow-[0_0_15px_rgba(255,0,252,0.2)]'
                : 'bg-brand-purple/20 text-brand-purple'
                }`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-tint-neutral/70">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default NFTs;
