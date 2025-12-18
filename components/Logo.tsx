
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = true }) => {
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Upper Flourish Decor */}
      <div className="flex items-center gap-1 mb-1 opacity-60">
        <div className="h-[1px] w-6 md:w-10 bg-gradient-to-r from-transparent to-current"></div>
        <span className="text-[10px] md:text-xs">❦</span>
        <div className="h-[1px] w-6 md:w-10 bg-gradient-to-l from-transparent to-current"></div>
      </div>
      
      {/* Main Branding */}
      <h1 className={`logo-font text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase leading-none ${light ? 'text-white' : 'text-black'}`}>
        Skin Graphics
      </h1>
      
      {/* Sub-header with lines */}
      <div className="flex items-center w-full gap-3 mt-1 opacity-80">
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/30' : 'bg-black/30'}`}></div>
        <span className={`text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] whitespace-nowrap ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          Tattoo & Piercing Studio
        </span>
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/30' : 'bg-black/30'}`}></div>
      </div>

      {/* Lower Flourish Decor */}
      <div className="flex items-center gap-1 mt-1 opacity-60 rotate-180">
        <div className="h-[1px] w-6 md:w-10 bg-gradient-to-r from-transparent to-current"></div>
        <span className="text-[10px] md:text-xs">❦</span>
        <div className="h-[1px] w-6 md:w-10 bg-gradient-to-l from-transparent to-current"></div>
      </div>
    </div>
  );
};

export default Logo;