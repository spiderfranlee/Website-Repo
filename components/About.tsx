
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="studio" className="py-24 px-8 lg:px-24 bg-black relative scroll-mt-32">
      {/* Background Grayscale Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=2000" 
          alt="Hands with tattoo machine" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-20 relative z-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-4">Established Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-8">Welcome to our <br/>Tattoo Studio!</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Established and owned by Charlie Azzopardi, Skin Graphics provides a wide range of tattoo and body piercing services. We focus on creative custom tattoos and high-quality body piercing to ensure your vision is realized with the utmost care and professionalism.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">20+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">50k+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Custom Designs</div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white/5 p-10 border-l-4 border-red-600">
            <h4 className="text-2xl font-bold uppercase mb-4 tracking-tight">Open on the Hill in Stillorgan</h4>
            <p className="text-gray-400 leading-relaxed">
              The Stillorgan shopping district is easily accessible with plenty of parking space available. We are located in a historic and lively area, making your visit comfortable and convenient.
            </p>
          </div>
          
          {/* Enhanced Festive Holiday Notice */}
          <div className="relative group h-96 border border-white/20 overflow-hidden bg-zinc-900/50 rounded-3xl shadow-2xl">
            {/* Festive Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=1000" 
                alt="Christmas Tree with warm lights" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Snow Animation Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-50">
              <div className="absolute inset-0 snow-effect"></div>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
              <div className="w-6 h-6 border border-white/50 flex items-center justify-center bg-red-600/20 backdrop-blur-sm">
                 <span className="text-[10px]">❄</span>
              </div>
              <h5 className="text-xl font-black tracking-tight text-white drop-shadow-lg uppercase">Holiday Notice</h5>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 z-20">
              <div className="glass p-8 rounded-2xl border border-white/10 text-center space-y-4 max-w-sm w-full">
                <p className="text-white font-black text-3xl uppercase tracking-tighter leading-none">
                  SHUTDOWN PERIOD
                </p>
                <div className="h-[2px] w-16 bg-red-600 mx-auto"></div>
                <p className="text-gray-200 font-bold text-base leading-relaxed">
                  From 23rd December 2025 <br/>
                  till 4th January 2026.
                </p>
                <div className="pt-4 space-y-1">
                  <p className="text-red-500 font-black text-[11px] uppercase tracking-[0.3em]">
                    Season Greeting
                  </p>
                  <p className="text-white/40 font-black text-[9px] uppercase tracking-[0.2em]">
                    For your support
                  </p>
                </div>
              </div>
            </div>

            {/* Warm Inner Glow on Hover */}
            <div className="absolute inset-0 border-[16px] border-white/0 group-hover:border-red-600/5 transition-all duration-700 pointer-events-none rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
