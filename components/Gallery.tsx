
import React from 'react';

export const galleryImages = [
  "https://static.wixstatic.com/media/cdf61c_cfca67f3e99748b4b0c192f5e73f07cf~mv2.jpg/v1/fill/w_616,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdf61c_cfca67f3e99748b4b0c192f5e73f07cf~mv2.jpg",
  "https://static.wixstatic.com/media/cdf61c_2a07a0c4191d4b1290ebfa0a890e67ce~mv2_d_3072_4608_s_4_2.jpg/v1/fill/w_411,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_2a07a0c4191d4b1290ebfa0a890e67ce~mv2_d_3072_4608_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_7602489aa52a4bbdaa260feabb78dff3~mv2.jpg/v1/fill/w_458,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_7602489aa52a4bbdaa260feabb78dff3~mv2.jpg",
  "https://static.wixstatic.com/media/cdf61c_b71df1c0e6db441e9661ea017285e139~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_924,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdf61c_b71df1c0e6db441e9661ea017285e139~mv2_d_4608_3072_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_8f69bd5961094113bf22a9e32e3e2f45~mv2_d_3072_4608_s_4_2.jpg/v1/fill/w_411,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_8f69bd5961094113bf22a9e32e3e2f45~mv2_d_3072_4608_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_5b665dad07c143d28124ee2018036ac9~mv2_d_3072_4608_s_4_2.jpg/v1/fill/w_411,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_5b665dad07c143d28124ee2018036ac9~mv2_d_3072_4608_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_1a5ec155703c45159ba5f1bce5551c66~mv2_d_1564_1564_s_2.jpg/v1/fill/w_616,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdf61c_1a5ec155703c45159ba5f1bce5551c66~mv2_d_1564_1564_s_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_0596e5d4345d4efe9f2278d1c61f8f82~mv2_d_1564_1564_s_2.jpg/v1/fill/w_616,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdf61c_0596e5d4345d4efe9f2278d1c61f8f82~mv2_d_1564_1564_s_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_1d47bbe10a144fc7ba1acbda42c605aa~mv2_d_3456_4608_s_4_2.jpg/v1/fill/w_462,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_1d47bbe10a144fc7ba1acbda42c605aa~mv2_d_3456_4608_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_a6c00cad31e74a0aa79a1180a35c48bb~mv2.jpg/v1/fill/w_347,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_a6c00cad31e74a0aa79a1180a35c48bb~mv2.jpg",
  "https://static.wixstatic.com/media/cdf61c_76afafe98f1049d98a39bf81e4029ff6~mv2_d_4608_3072_s_4_2.jpg/v1/fill/w_924,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cdf61c_76afafe98f1049d98a39bf81e4029ff6~mv2_d_4608_3072_s_4_2.jpg",
  "https://static.wixstatic.com/media/cdf61c_521caf004d5b40a8be4bdbe263dd21f9~mv2_d_3072_4608_s_4_2.jpg/v1/fill/w_411,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cdf61c_521caf004d5b40a8be4bdbe263dd21f9~mv2_d_3072_4608_s_4_2.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section id="work" className="py-24 px-8 lg:px-24 bg-black">
      <div id="gallery" className="scroll-mt-32 flex flex-col md:flex-row items-end justify-between mb-16 border-l-2 border-red-600 pl-8">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-4">The Portfolio</h2>
          <h3 className="text-4xl font-black uppercase tracking-tighter">Art Gallery</h3>
        </div>
        <p className="max-w-xs text-gray-500 text-xs font-bold uppercase tracking-widest mt-4 md:mt-0">
          A selection of our finest custom works across tattoos and body piercings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {galleryImages.map((img, i) => (
          <div key={i} className="overflow-hidden group aspect-[3/4] bg-zinc-900">
            <img 
              src={img} 
              alt={`Gallery item ${i}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="px-12 py-4 border border-white/20 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Explore Full Archive
        </button>
      </div>
    </section>
  );
};

export default Gallery;
