
import React, { useState } from 'react';

interface PriceItemProps {
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
  notice?: string;
}

const PriceItem: React.FC<PriceItemProps> = ({ name, price, description, notice }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass group overflow-hidden transition-all duration-500 rounded-2xl border border-white/5 hover:border-red-600/30">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 flex items-center justify-between cursor-pointer"
      >
        <div className="flex flex-col">
          <h4 className="text-sm font-black uppercase tracking-widest text-white group-hover:text-red-600 transition-colors">{name}</h4>
          <span className="text-xl font-black text-white mt-1">{price}</span>
        </div>
        <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${isExpanded ? 'bg-red-600 border-red-600 rotate-180' : 'group-hover:border-red-600'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-8 space-y-4">
          <div className="w-full h-[1px] bg-gradient-to-r from-red-600/50 to-transparent mb-4"></div>
          <p className="text-xs leading-relaxed text-gray-400 font-medium italic">
            {description}
          </p>
          {notice && (
            <p className="text-[10px] font-black uppercase tracking-widest text-red-600">
              {notice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const PiercingPriceList: React.FC = () => {
  const [isFullListOpen, setIsFullListOpen] = useState(false);

  const earPiercings = [
    { name: "Ear Lobes (Pair - Gold)", price: "€30 - €35", description: "All Prices include jewelry that is appropriate for initial healing. Ear lobe piercings can be done with a needle or a specialized piercer tool." },
    { name: "Helix / Forward Helix", price: "€30 - €35", description: "The Helix, Forward Helix & Anti Helix or Snug takes longer to heal than the ear lobe and is better pierced with a needle." },
    { name: "Tragus / Rook / Conch", price: "€30 - €35", description: "These piercings have greater individuality than the pinna. Tragus piercings are among the most popular of the three." },
    { name: "Industrial Piercing", price: "€60.00", description: "Typically found in the upper cartilage of the ear, made up of two piercings connected with a bar. Healing takes 3-4 weeks to six months." }
  ];

  const facialPiercings = [
    { name: "Nostril / Nose", price: "€30 - €35", description: "Nostrils should not be pierced with a gun ever! It is best pierced with an anesthetic and a needle. Healing time is around 6 weeks." },
    { name: "Septum Piercing", price: "€40.00", description: "Placed through the cartilage wall in the middle of the nose. This piercing has drastically increased in popularity. Healing takes 6 to 9 months." },
    { name: "Eyebrow Piercing", price: "€35 - €40", description: "Used to good aesthetic effect. Can be pierced with a BCR or Barbell. Usual time for retaining the piercing is 6 months to 2 years." },
    { name: "Bridge Piercing", price: "€40.00", description: "A kind of facial piercing done horizontally in the bridge region of the nose between the eyes." }
  ];

  const oralPiercings = [
    { name: "Lip (Monroe / Madonna)", price: "€35 - €40", description: "Horizontal upper lip piercing placed through the skin. Swelling will occur for 2 to 3 weeks." },
    { name: "Labret / Snake Bites", price: "€35 - €60", description: "Centered on the lower part of the lip. Snake Bites are a pair of horizontal lower lip piercings." },
    { name: "Tongue Piercing", price: "€45.00", description: "Increasingly popular for aesthetic reasons. Pierced with a barbell long enough to accommodate initial swelling." },
    { name: "Smiley Piercing", price: "€50.00", description: "A lip frenulum piercing through the upper lip frenulum. Visible when the wearer smiles." }
  ];

  const genitalPiercings = [
    { name: "Clitorial Hood (F)", price: "€120.00", description: "A brilliant piercing that heals quickly in 2 to 6 weeks. Can be done vertically or horizontally.", notice: "Strictly over 18s only." },
    { name: "Prince Albert (M)", price: "€120.00", description: "Sported by the man himself... heals well in approximately 4 weeks. Interesting jewelry can be worn.", notice: "Strictly over 18s only." },
    { name: "Inner / Outer Labia", price: "€120.00", description: "Mainly aesthetic. Heals very quickly (1 to 2 weeks for inner). Comfort should be carefully considered.", notice: "Strictly over 18s only." },
    { name: "Frenum / Hafada", price: "€120.00", description: "A good 'starter' genital piercing. Easily pierced and not painful with anesthetic.", notice: "Strictly over 18s only." }
  ];

  return (
    <section id="piercing" className="py-24 px-8 lg:px-24 bg-black relative scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-red-600">The Pricing Guide</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Body Piercing Guide</h3>
          </div>
          <button 
            onClick={() => setIsFullListOpen(!isFullListOpen)}
            className="mt-8 md:mt-0 px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all rounded-full shadow-xl"
          >
            {isFullListOpen ? 'Hide Price List' : 'Browse the Full Guide'}
          </button>
        </div>

        <div className={`transition-all duration-700 ease-in-out ${isFullListOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none h-0 overflow-hidden'}`}>
          <div className="space-y-20">
            {/* Disclaimer */}
            <div className="glass p-8 rounded-3xl border border-red-600/20 text-center">
              <p className="text-sm font-medium text-gray-400">
                All Prices include jewelry that is appropriate for initial healing. <br/>
                <span className="text-red-600 font-bold italic mt-2 block">"Any other piercing that is not in this price list... just ask for it."</span>
              </p>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">01. Ear Piercings</h3>
                <div className="space-y-4">
                  {earPiercings.map(item => <PriceItem key={item.name} {...item} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">02. Facial & Surface</h3>
                <div className="space-y-4">
                  {facialPiercings.map(item => <PriceItem key={item.name} {...item} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-8 border-b border-white/10 pb-4">03. Oral Piercings</h3>
                <div className="space-y-4">
                  {oralPiercings.map(item => <PriceItem key={item.name} {...item} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-red-600/60 mb-8 border-b border-red-600/20 pb-4">04. Genital Piercings</h3>
                <div className="space-y-4">
                  {genitalPiercings.map(item => <PriceItem key={item.name} {...item} />)}
                </div>
              </div>
            </div>

            {/* Quality Statement */}
            <div className="bg-zinc-950 p-12 rounded-[3rem] border border-white/5 text-center max-w-4xl mx-auto space-y-8">
              <h4 className="text-xl font-black uppercase tracking-tighter">Isn't your body worth quality jewelry?</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Our jewelry is AMERICAN made and of the highest quality of man made. Guaranteed for life not to break, tarnish, or crack. 
                We will not put in BAD cheap jewelry which is higher in nickel and causes reactions or takes longer to heal. 
                <span className="text-red-600 font-bold block mt-4 uppercase tracking-widest text-xs">SO STAY SAFE IT'S YOUR BODY.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiercingPriceList;
