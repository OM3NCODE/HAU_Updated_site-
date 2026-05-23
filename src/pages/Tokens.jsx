import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Button from '../components/Button';

const Tokens = () => {
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
    <div className="flex flex-col gap-24 py-8">

      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Two Tokens.<br />One Ecosystem.</h1>
        <p className="text-xl text-tint-neutral/80">
          $HAU is community. $UBP is degen. <br />
          Together they power the High As Unicorn experience.
        </p>
      </section>

      {/* 2. Token Cards Side-by-Side */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* $HAU Card */}
        <div className="bg-brand-purple/5 border-2 border-brand-purple/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold text-token-hau mb-2">$HAU</h2>
                <p className="text-lg text-white font-medium">The Community Token</p>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-brand-purple overflow-hidden flex items-center justify-center bg-nft-orange shadow-lg shadow-brand-purple/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/hauwee_unicorn_avatar.png" 
                  alt="Hauwee Icon" 
                  className="w-full h-full object-cover scale-105" 
                />
              </div>
            </div>

            <p className="text-tint-neutral/80 mb-8 min-h-[100px]">
              The original community token. Solana + Bitcoin Rune #1934. 1 billion supply. Team gets paid in $HAU. Holders are family. 77+ weeks of Friday Spaces. Survived the bear market. Still building.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <div className="text-sm text-tint-neutral/60 uppercase tracking-wider mb-2">Contract Address</div>
                <button
                  onClick={() => copyToClipboard(hauCA, setCopiedHau)}
                  className="w-full flex items-center justify-between bg-black/40 p-4 rounded-xl border border-brand-purple/20 hover:border-brand-purple transition-colors"
                >
                  <span className="font-mono text-sm truncate mr-4 text-tint-neutral">{hauCA}</span>
                  {copiedHau ? <Check className="text-semantic-success flex-shrink-0" /> : <Copy className="text-brand-purple flex-shrink-0" />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-brand-purple/10">
                  <div className="text-xs text-tint-neutral/60 uppercase mb-1">Supply</div>
                  <div className="font-bold text-lg">1 Billion</div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-brand-purple/10">
                  <div className="text-xs text-tint-neutral/60 uppercase mb-1">Chain</div>
                  <div className="font-bold text-lg">SOL + BTC</div>
                </div>
              </div>
            </div>

            <Button href="https://dexscreener.com/solana/bwjwwtwwqi4bjowqrwy4uvrqa232yhh7ykqpmbfdcajv" variant="primary" className="w-full text-lg py-4">
              Trade $HAU
            </Button>
            <p className="text-center text-sm text-tint-neutral/60 mt-4">
              Also see <a href="https://shithappens.com" className="underline hover:text-token-hau">shithappens.com</a>
            </p>
          </div>
        </div>

        {/* $UBP Card */}
        <div className="bg-token-ubp/5 border-2 border-token-ubp/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-token-ubp/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold text-token-ubp mb-2">$UBP</h2>
                <p className="text-lg text-white font-medium">The Game Token</p>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-token-ubp overflow-hidden flex items-center justify-center bg-black/40 shadow-lg shadow-token-ubp/25 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/ubp_logo.jpg" 
                  alt="UBP Icon" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            <p className="text-tint-neutral/80 mb-8 min-h-[100px]">
              Unicorn Butt Plug. Yes, you read that right. The degen meme token in the HAU ecosystem. Earn it by playing Hauwee's Lava Run. Earn it by shilling through BAST. LP burned — nobody can rug.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <div className="text-sm text-tint-neutral/60 uppercase tracking-wider mb-2">Contract Address</div>
                <button
                  onClick={() => copyToClipboard(ubpCA, setCopiedUbp)}
                  className="w-full flex items-center justify-between bg-black/40 p-4 rounded-xl border border-token-ubp/20 hover:border-token-ubp transition-colors"
                >
                  <span className="font-mono text-sm truncate mr-4 text-tint-neutral">{ubpCA}</span>
                  {copiedUbp ? <Check className="text-semantic-success flex-shrink-0" /> : <Copy className="text-token-ubp flex-shrink-0" />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-token-ubp/10">
                  <div className="text-xs text-tint-neutral/60 uppercase mb-1">Origin</div>
                  <div className="font-bold text-lg">Pump.fun CTO</div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-token-ubp/10">
                  <div className="text-xs text-tint-neutral/60 uppercase mb-1">LP Status</div>
                  <div className="font-bold text-lg text-semantic-success">Burned 🔥</div>
                </div>
              </div>
            </div>

            <Button href="https://dexscreener.com/solana/2gcdhrn1hrgtwrbc8abkndcpm4vm2cu3fjkcxdax2tep" className="w-full text-lg py-4 bg-token-ubp text-white hover:bg-token-ubp/80">
              Trade $UBP
            </Button>
            <p className="text-center text-sm text-tint-neutral/60 mt-4 opacity-0">Spacer</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Tokens;
