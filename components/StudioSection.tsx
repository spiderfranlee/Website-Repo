
import React from 'react';

const studioImages = [
  "https://static.wixstatic.com/media/cdf61c_c96a886ae9af4426866b62fa2af7bd5f~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_502,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_c96a886ae9af4426866b62fa2af7bd5f~mv2_d_6016_4016_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_927ee543586c44adb9664067ac02d6c6~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_1184,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_927ee543586c44adb9664067ac02d6c6~mv2_d_4608_3072_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_d776859552d34be28caf83b210a0e87a~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_502,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_d776859552d34be28caf83b210a0e87a~mv2_d_6016_4016_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_3e45b408f9cf44679f7bff0f98705c3e~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_1184,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_3e45b408f9cf44679f7bff0f98705c3e~mv2_d_4608_3072_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_9e1d489aeee548d384e06c5ccc003685~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_502,h_326,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf61c_9e1d489aeee548d384e06c5ccc003685~mv2_d_6016_4016_s_4_2.jpg"
];

const StudioSection: React.FC = () => {
  return (
    <section id="the-studio" className="py-24 px-8 lg:px-24 bg-black scroll-mt-32">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-4">Our Environment</h2>
        <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">The Studio</h3>
        <div className="w-12 h-[2px] bg-white/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studioImages.map((src, index) => (
          <div 
            key={index} 
            className={`overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 aspect-[4/3] group shadow-2xl ${
              index === 1 ? 'lg:col-span-1 md:col-span-2 lg:row-span-1' : ''
            }`}
          >
            <img 
              src={src} 
              alt={`Studio interior ${index + 1}`} 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioSection;
