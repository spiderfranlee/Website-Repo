
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="studio" className="py-24 lg:py-32 px-8 lg:px-24 bg-zinc-950 relative scroll-mt-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Image Column */}
        <div className="relative grid grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-8 mt-12 lg:mt-24">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1000" 
                alt="Tattoo artist at work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-zinc-900 p-6 lg:p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="text-4xl lg:text-5xl font-black text-white mb-1">20+</div>
              <div className="text-[10px] lg:text-xs uppercase tracking-widest text-red-600 font-bold">Years Experience</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=1000" 
                alt="Tattoo studio interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80&w=1000" 
                alt="Tattoo machine" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col justify-center pt-12 lg:pt-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-red-600"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600">Established Excellence</h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight tracking-tighter">
            Welcome to our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Tattoo Studio!</span>
          </h3>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-light">
            Established and owned by Charlie Azzopardi, Skin Graphics provides a wide range of tattoo and body piercing services. We focus on creative custom tattoos and high-quality body piercing to ensure your vision is realized with the utmost care and professionalism.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="border-l border-white/10 pl-6">
              <div className="text-4xl font-black mb-2 text-white">50k+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Custom Designs</div>
            </div>
            <div className="border-l border-white/10 pl-6">
              <div className="text-4xl font-black mb-2 text-white">100%</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Sterile & Safe</div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600 group-hover:w-full transition-all duration-500 -z-10 opacity-10"></div>
            <h4 className="text-xl font-bold uppercase mb-3 tracking-tight text-white">Open on the Hill in Stillorgan</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              The Stillorgan shopping district is easily accessible with plenty of parking space available. We are located in a historic and lively area, making your visit comfortable and convenient.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;