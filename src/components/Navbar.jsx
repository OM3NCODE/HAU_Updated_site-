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
          <div className="mt-8">
            <Button href="https://launchmynft.io/sol/20352" variant="accent" className="w-full">
              MINT A HAUWEE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
