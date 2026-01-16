
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
        </div>
      </div>
    </section>
  );
};

export default About;