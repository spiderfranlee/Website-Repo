
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 lg:px-12 ${
        isScrolled 
          ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-12">
          <a href="#" className="transform transition-transform hover:scale-[1.02]">
            <Logo className="items-start" />
          </a>
          
          {/* Main Nav Columns */}
          <nav className="hidden xl:flex items-start gap-12 border-l border-white/10 pl-12">
            <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#work" className="hover:text-red-600 transition-colors">Work</a>
              <a href="#artists" className="hover:text-red-600 transition-colors">Artists</a>
              <a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a>
            </div>

            <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#piercing" className="hover:text-red-600 transition-colors">Piercing</a>
              <a href="#the-studio" className="hover:text-red-600 transition-colors">The Studio</a>
              <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
            </div>
          </nav>
        </div>

        {/* Center: Specialized Services */}
        <div className="hidden 2xl:flex items-center gap-16 border-x border-white/5 px-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white transition-colors">Custom Tattoos</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white transition-colors">Body Piercing</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white transition-colors">Cover Ups</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/80 group-hover:text-white transition-colors">Fine Line Work</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-8">
          <a 
            href="#quote-form" 
            className="hidden md:block text-[10px] font-black uppercase tracking-[0.25em] hover:text-red-600 transition-colors relative group"
          >
            Request a Quote
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a 
            href="#contact-section" 
            className="text-[10px] font-black uppercase tracking-[0.3em] bg-transparent hover:bg-white hover:text-black transition-all border border-white/20 px-10 py-3.5 rounded-full shadow-lg"
          >
            Contact
          </a>
          
          <button className="xl:hidden p-2 text-white/60 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
