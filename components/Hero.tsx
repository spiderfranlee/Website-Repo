
import React, { useState, useEffect } from 'react';
import { galleryImages } from './Gallery.tsx';
import ShowreelModal from './ShowreelModal.tsx';

const showreelImages = [
  "https://static.wixstatic.com/media/da8de275022143b583863b84eca02538.jpg/v1/fill/w_1226,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/da8de275022143b583863b84eca02538.jpg",
  "https://static.wixstatic.com/media/cdf61c_518d60c578e442d1a79318eac9982466~mv2_d_1920_1283_s_2.jpg/v1/fill/w_1226,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_518d60c578e442d1a79318eac9982466~mv2_d_1920_1283_s_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_2583d0666e9240d38150153f148bb19a~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1226,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_2583d0666e9240d38150153f148bb19a~mv2_d_1920_1280_s_2.jpg"
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  useEffect(() => {
    // Expose openShowreel to window for registry compliance
    (window as any).openShowreel = () => setIsShowreelOpen(true);

    const showreelTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showreelImages.length);
    }, 5000);
    
    const galleryTimer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => {
      clearInterval(showreelTimer);
      clearInterval(galleryTimer);
      delete (window as any).openShowreel;
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col justify-center lg:justify-between px-8 lg:px-24 py-32 overflow-hidden bg-black">
        {/* Background Showreel Slider */}
        <div className="absolute inset-0 z-0">
          {showreelImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-60' : 'opacity-0'}`}
            >
              <img 
                src={img} 
                alt={`Showreel ${idx}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-2xl mb-12 lg:mb-0 lg:pt-32">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
            Custom Tattoo Designs.<br/>
            Telling Your Story.
          </h2>
          
          <div className="flex flex-col gap-4">
            <a href="#quote-form" className="group flex flex-col items-start gap-2">
              <span className="text-lg font-bold hover:text-red-600 transition-colors uppercase tracking-widest">Request a Quote</span>
              <div className="w-12 h-[2px] bg-white group-hover:w-20 group-hover:bg-red-600 transition-all duration-300"></div>
            </a>
          </div>
        </div>

        {/* Play Showreel Box */}
        <div className="relative z-20 self-end w-full max-w-[580px]">
          <button 
            onClick={() => setIsShowreelOpen(true)}
            className="w-full glass px-8 py-8 md:px-10 md:py-10 flex items-center justify-between group cursor-pointer transition-all hover:bg-white/10 rounded-[2rem] shadow-2xl text-left"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-white translate-x-[1px]" viewBox="0 0 24 24">
                  <path d="M7 6v12l10-6z"/>
                </svg>
              </div>
              <span className="text-2xl md:text-3xl font-bold tracking-tight">Play Showreel</span>
            </div>
            <div className="hidden sm:block w-32 md:w-36 h-20 md:h-24 bg-zinc-800 rounded-xl overflow-hidden relative border border-white/20 shadow-xl group-hover:border-white/40 transition-colors">
              {/* Gallery cycling thumbnail */}
              <img 
                src={galleryImages[galleryIndex]} 
                alt="Gallery Cycle Thumbnail" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="text-[10px] font-black uppercase text-white tracking-[0.1em] drop-shadow-lg">GALLERY</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      <ShowreelModal 
        isOpen={isShowreelOpen} 
        onClose={() => setIsShowreelOpen(false)} 
      />
    </>
  );
};

export default Hero;
