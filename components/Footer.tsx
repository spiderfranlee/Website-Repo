
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer id="contact-section" className="bg-black py-24 px-8 lg:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Branding */}
        <div className="flex justify-center md:justify-start mb-20">
          <Logo light={true} className="scale-125 origin-left" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Get in Touch */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                GET IN <br/>
                <span className="text-red-600 italic">TOUCH!!</span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="mt-1.5 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Address</p>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    9 The Hill, Stillorgan,<br/>
                    Co. Dublin, Ireland,<br/>
                    A94 AR23.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1.5 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Phone</p>
                  <a href="tel:016853737" className="text-lg md:text-xl font-bold text-white hover:text-red-600 transition-colors">
                    (+353) 01 6853737
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="mt-1.5 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Email</p>
                  <a href="mailto:info@skingraphics.ie" className="text-lg md:text-xl font-bold text-white hover:text-red-600 transition-colors">
                    info@skingraphics.ie
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Opening Hours & Socials */}
          <div className="space-y-16 lg:pl-12">
            <div className="space-y-8">
              <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-red-600 border-b border-white/5 pb-4">Opening Hours</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-lg font-medium text-gray-400">Mon - Fri</span>
                  <span className="text-lg md:text-xl font-black text-white">10:00am - 5:30pm</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                  <span className="text-lg font-medium text-gray-400">Sat</span>
                  <span className="text-lg md:text-xl font-black text-white">11:00am - 3:00pm</span>
                </div>
                <div className="flex justify-between items-end pb-4">
                  <span className="text-lg font-medium text-red-600/60">Sun / Bank Holidays</span>
                  <span className="text-lg md:text-xl font-black text-red-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Instagram', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'Pinterest', path: 'M12.017 0C5.396 0 0 5.397 0 12.017c0 5.078 3.158 9.412 7.64 11.134-.103-.944-.19-2.385.044-3.413.21-.921 1.352-5.725 1.352-5.725s-.345-.689-.345-1.707c0-1.6 0.928-2.793 2.084-2.793 0.984 0 1.458.739 1.458 1.625 0 0.989-.629 2.468-.954 3.841-.271 1.146.574 2.08 1.703 2.08 2.043 0 3.614-2.155 3.614-5.265 0-2.755-1.98-4.681-4.806-4.681-3.273 0-5.195 2.454-5.195 4.99 0 0.988.38 2.048 0.854 2.62.094.116.108.217.08.329l-.32 1.31c-.052.208-.172.252-.396.148-1.477-.687-2.399-2.846-2.399-4.582 0-3.73 2.712-7.152 7.812-7.152 4.1 0 7.284 2.924 7.284 6.822 0 4.073-2.568 7.351-6.132 7.351-1.197 0-2.324-.623-2.709-1.358l-.736 2.805c-.266 1.015-0.988 2.285-1.47 3.064 1.126.333 2.316.513 3.548.513 6.621 0 12.017-5.396 12.017-12.017C24.034 5.397 18.638 0 12.017 0z' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-white/40 hover:text-white"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-32 space-y-10">
          <div className="flex flex-col items-center md:items-start space-y-4">
             <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-red-600">Where to find us?</h3>
          </div>
          
          <div className="relative group max-w-5xl mx-auto md:mx-0">
            {/* The Map Frame */}
            <div className="relative z-10 rounded-[2.5rem] border-[12px] border-[#111] overflow-hidden shadow-2xl bg-zinc-900 aspect-[16/9] md:aspect-[21/11]">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/skin%20graphics%20google.jpg?raw=true" 
                alt="Skin Graphics Location on Google Maps" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0"
              />
              {/* Subtle Map Overlay */}
              <div className="absolute inset-0 bg-red-600/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
            </div>

            {/* Corner Accent Decor */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-600/30 rounded-tl-[3rem] pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-red-600/30 rounded-br-[3rem] pointer-events-none"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <p>© 2025 Skin Graphics Tattoo & Piercing Studio</p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <p>Designed by Premium Creative Agency</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
