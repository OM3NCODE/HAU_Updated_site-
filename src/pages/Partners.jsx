import React from 'react';
import { ExternalLink, Handshake, Mail } from 'lucide-react';
import Button from '../components/Button';

const Partners = () => {
  const partners = [
    { name: "CFC", logo: `${import.meta.env.BASE_URL}assets/partners/cfc.png`, color: "from-[#2fff37]/20 to-[#15803d]/40" },
    { name: "RANDY AI", logo: `${import.meta.env.BASE_URL}assets/partners/randyai.png`, color: "from-[#f2a900]/20 to-[#ea580c]/40" },
    { name: "LFGO", logo: `${import.meta.env.BASE_URL}assets/partners/lfgo.png`, color: "from-[#0d9488]/20 to-[#0f766e]/40" },
    { name: "CLUSTERFUCK", logo: `${import.meta.env.BASE_URL}assets/partners/clusterfuck.png`, color: "from-[#ff00fc]/20 to-[#db2777]/40" },
    { name: "Sir Nasty", logo: `${import.meta.env.BASE_URL}assets/partners/sirnasty.png`, color: "from-[#38bdf8]/20 to-[#0284c7]/40" },
    { name: "WGA", logo: `${import.meta.env.BASE_URL}assets/partners/wga.png`, color: "from-[#2fff37]/20 to-[#16a34a]/40" },
    { name: "Meta Muses", logo: `${import.meta.env.BASE_URL}assets/partners/metamuses.png`, color: "from-[#ff00fc]/20 to-[#c026d3]/40" },
    { name: "GROKLET", logo: `${import.meta.env.BASE_URL}assets/partners/groklet.png`, color: "from-[#00f2fe]/20 to-[#4facfe]/40" },
    { name: "MARS", logo: `${import.meta.env.BASE_URL}assets/partners/mars.png`, color: "from-[#ff9966]/20 to-[#ff5e62]/40" },
    { name: "WEB3 WOMEN'S DAY", logo: `${import.meta.env.BASE_URL}assets/partners/w3wd.png`, color: "from-[#800020]/20 to-[#4a0010]/40" }
  ];

  return (
    <div className="flex flex-col gap-24 py-8 relative">
      {/* Ambient background glows for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ff00fc]/5 blur-[120px] pointer-events-none select-none"></div>
      
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">17+ Collaborators <br/>& Growing.</h1>
        <p className="text-xl text-tint-neutral/80">
          We collaborate, not compete. Building a stronger Web3 ecosystem together.
        </p>
      </section>

      {/* 2. Featured Partners Grid */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <a 
              key={i} 
              href="#" 
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-5 flex items-center gap-5 group hover:border-brand-purple/50 hover:bg-white/[0.04] hover:shadow-[0_15px_45px_rgba(124,58,237,0.15)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Soft card inner-glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-purple/5 blur-[50px] pointer-events-none group-hover:bg-brand-purple/10 transition-all duration-500"></div>

              {/* Squircle logo wrapper */}
              <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 p-0.5 flex items-center justify-center shadow-lg shadow-black/40 transform group-hover:scale-105 group-hover:border-brand-purple/40 transition-all duration-300 overflow-hidden shrink-0">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover rounded-[14px]" />
                ) : (
                  <span className="font-display font-black text-xl text-white">{partner.name[0]}</span>
                )}
              </div>

              {/* Bold custom display typography */}
              <h3 className="text-2xl font-display font-black text-white tracking-wide uppercase">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
        <div className="text-center mt-16 mb-4">
          <p className="text-3xl font-bold text-tint-neutral/80 font-display italic">More to come 🙂</p>
        </div>
      </section>

      {/* 3. Three Pillars with Real Examples */}
      <section className="bg-gradient-to-b from-brand-deep to-brand-purple/10 border-y border-brand-purple/30 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Collaborations with Purpose</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-semantic-info/10 text-semantic-info rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-tint-neutral/80">
                Partnering with platforms and communities that help our members learn about DeFi, security, and market analysis.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-semantic-success/10 text-semantic-success rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Opportunity</h3>
              <p className="text-tint-neutral/80">
                Securing WL spots, cross-community airdrops, and exclusive beta access for Hauwee holders.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-purple/20 text-brand-purple rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-tint-neutral/80">
                Co-hosting Spaces, game nights, and IRL events to merge communities and share vibes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Collaboration CTA */}
      <section className="text-center max-w-2xl mx-auto bg-black/40 p-8 sm:p-12 rounded-3xl border border-brand-purple/20">
        <Handshake className="text-brand-purple mx-auto mb-6" size={48} />
        <h2 className="text-3xl font-bold mb-4">Want to collaborate with HAU?</h2>
        <p className="text-tint-neutral/80 mb-8">
          We are always looking to collaborate with builders, creators, and communities that align with our values. Let's talk.
        </p>
        <Button href="https://twitter.com/highasunicorn" variant="primary" className="text-lg px-8 flex items-center gap-2 mx-auto">
          <Mail size={20} /> DM @highasunicorn
        </Button>
      </section>

    </div>
  );
};

export default Partners;
