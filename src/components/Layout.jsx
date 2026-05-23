import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isFullWidth = isHome || location.pathname === '/game';

  return (
    <div className="min-h-screen flex flex-col bg-brand-deep text-white selection:bg-brand-purple/50 selection:text-white relative">
      
      {/* Dynamic Cyber-Mesh Backdrop (Fixed overlay behind all elements) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1d0b3a]">
        {/* Futuristic Cyber-Dot Matrix stardust coordinate dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(235,200,255,0.07)_1.5px,transparent_1.5px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-90"></div>
        
        {/* Holographic tactile digital film grain overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay"></div>
 
        {/* Ambient floating mesh spotlights pulsing/drifting at custom rates (higher opacity for rich purple aura) */}
        {/* Massive Brand Purple Glow (#7C3AED) centered to paint a luxurious, glowing purple landscape */}
        <div className="absolute top-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-brand-purple/[0.18] blur-[150px] animate-pulse opacity-90" style={{ animationDuration: '10s' }}></div>
        
        {/* Neon Green spotlight (#2fff37) */}
        <div className="absolute top-[10%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-[#2fff37]/[0.05] blur-[130px] animate-float opacity-80"></div>
        
        {/* Neon Pink spotlight (#ff00fc) */}
        <div className="absolute top-[40%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#ff00fc]/[0.05] blur-[140px] animate-float opacity-80" style={{ animationDelay: '-3.5s', animationDuration: '9s' }}></div>
        
        {/* Neon Gold spotlight (#f2a900) */}
        <div className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#f2a900]/[0.04] blur-[120px] animate-float opacity-75" style={{ animationDelay: '-7s', animationDuration: '11s' }}></div>
        
        {/* Second Brand Purple spotlight in bottom corner */}
        <div className="absolute bottom-[-15%] right-[15%] w-[60vw] h-[60vw] rounded-full bg-brand-purple/[0.09] blur-[150px] animate-float opacity-80" style={{ animationDelay: '-10.5s', animationDuration: '13s' }}></div>
      </div>
 
      {/* Main navigation menu */}
      <Navbar />
      
      {/* Page content layers pushed over the background */}
      <main className={`flex-grow pb-16 w-full relative z-10 ${isFullWidth ? '' : 'pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
