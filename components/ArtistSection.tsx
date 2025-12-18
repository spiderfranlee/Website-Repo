
import React from 'react';

const ArtistSection: React.FC = () => {
  return (
    <section id="artists" className="py-0 bg-black min-h-[800px] flex items-stretch scroll-mt-32">
      <div className="w-full grid lg:grid-cols-2">
        {/* Left Side: Geometric Pattern Box with Charlie's Image */}
        <div className="relative min-h-[600px] bg-[#222] overflow-hidden flex items-center justify-center">
          {/* Geometric Circle Pattern Background */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #666 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to bottom, black, transparent)',
            }}
          >
            {/* Overlaying a secondary pattern for that overlapping circle look */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/diagmonds-light.png")',
              opacity: 0.1
            }}></div>
          </div>
          
          {/* The Specific Box with Circles (Simulated via SVG Pattern) */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="0" cy="0" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="0" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="0" cy="100" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="48" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circles)" />
            </svg>
          </div>

          {/* Charlie's Image Container */}
          <div className="relative z-10 w-full max-w-md px-8 group">
            <div className="relative border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
               <img 
                src="https://static.wixstatic.com/media/cdf61c_20e8ca0103fe4762b8cf4d54cf3fa0ce~mv2.jpg/v1/crop/x_1260,y_1352,w_1931,h_2476/fill/w_424,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_2672_JPG.jpg" 
                alt="Charlie Azzopardi" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Ornate corner detail */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-red-600"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-red-600"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-black">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-6">Meet the Master</h2>
          <h3 className="text-5xl font-black uppercase tracking-tighter mb-10 leading-none">
            Artistic Purity & <br/>Precision
          </h3>
          
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            <p>
              Born in Malta, Charlie Azzopardi brings over 20 years of international experience to Stillorgan. Having trained at professional schools for international piercing, his focus is always on artistic purity and technical perfection.
            </p>
            <p>
              Every tattoo is a collaboration. Charlie specializes in transforming abstract ideas into concrete visual stories that flow naturally with the body's anatomy.
            </p>
            
            <div className="pt-12 border-t border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-red-600"></div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Services Provided</h4>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-[11px] uppercase tracking-[0.2em] font-black">
                <li className="flex items-center gap-3 group cursor-default">
                  <span className="text-red-600 text-lg">•</span>
                  <span className="group-hover:text-red-600 transition-colors">Custom Tattoos</span>
                </li>
                <li className="flex items-center gap-3 group cursor-default">
                  <span className="text-red-600 text-lg">•</span>
                  <span className="group-hover:text-red-600 transition-colors">Cover Ups</span>
                </li>
                <li className="flex items-center gap-3 group cursor-default">
                  <span className="text-red-600 text-lg">•</span>
                  <span className="group-hover:text-red-600 transition-colors">Body Piercing</span>
                </li>
                <li className="flex items-center gap-3 group cursor-default">
                  <span className="text-red-600 text-lg">•</span>
                  <span className="group-hover:text-red-600 transition-colors">Fine Line Work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
