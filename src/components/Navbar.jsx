import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'NFTs', path: '/nfts' },
    { name: 'Tokens', path: '/tokens' },
    { name: 'Game', path: '/game' },
    { name: 'Team', path: '/team' },
    { name: 'Collaborators', path: '/partners' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-brand-deep/80 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 sm:gap-2.5 group transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className={`rounded-full border-2 border-brand-purple overflow-hidden flex items-center justify-center bg-nft-orange shadow-xl hover:scale-105 transition-all duration-300 flex-shrink-0 ${scrolled ? 'w-8 h-8' : 'w-10 h-10 sm:w-11 sm:h-11 border-2 sm:border-4'}`}>
              <img 
                src={`${import.meta.env.BASE_URL}assets/hauwee_unicorn_avatar.png`} 
                alt="Unicorn Icon" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform" 
              />
            </div>
            <img 
              src={`${import.meta.env.BASE_URL}assets/HAU%20Logo.png`} 
              alt="HIGH AS UNICORN" 
              className={`h-auto object-contain transition-all duration-300 flex-shrink-0 max-w-[120px] min-[360px]:max-w-[150px] min-[400px]:max-w-[180px] sm:max-w-none ${scrolled ? 'h-[16px] sm:h-[20px]' : 'h-[22px] sm:h-6 md:h-7.5'}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-body font-medium transition-colors hover:text-brand-purple ${location.pathname === link.path ? 'text-brand-purple' : 'text-tint-neutral'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button href="https://launchmynft.io/sol/20352" variant="accent">
              MINT A HAUWEE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-purple transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-brand-deep/95 backdrop-blur-lg z-40 transition-transform duration-300 pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6 items-center text-2xl font-display font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`${location.pathname === link.path ? 'text-brand-purple' : 'text-white'} hover:text-brand-purple transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 w-full">
            <Button href="https://launchmynft.io/sol/20352" variant="accent" className="w-full">
              MINT A HAUWEE
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-8 mt-6">
            <a href="https://twitter.com/highasunicorn" aria-label="Twitter" className="text-tint-neutral hover:text-[#ff00fc] hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://discord.gg/6Jxar3SCFK" aria-label="Discord" className="text-tint-neutral hover:text-[#2fff37] hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" /></svg>
            </a>
            <a href="https://t.me/HighAsUnicorns" aria-label="Telegram" className="text-tint-neutral hover:text-[#f2a900] hover:scale-110 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.15-.06-.21a.28.28 0 0 0-.22-.04c-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.15-.22-1.71-.4-.69-.23-1.24-.35-1.19-.74.03-.2.28-.4.76-.6 2.97-1.29 4.96-2.15 5.97-2.58 2.88-1.21 3.48-1.42 3.87-1.43.09 0 .28.02.4.12.1.09.13.21.14.3.01.06.01.17 0 .23z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
