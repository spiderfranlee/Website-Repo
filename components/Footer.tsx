
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/skingraphicstattoopiercing/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/skingraphicstattoostillorgan',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/skingraphicstat',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { 
      name: 'Pinterest', 
      url: 'https://ie.pinterest.com/skingraphicstattoostudio/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.36 11.985-11.987C23.97 5.39 18.592 0 12.017 0z" />
        </svg>
      )
    }
  ];

  return (
    <footer id="contact-section" className="bg-black py-24 px-8 lg:px-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
        <div className="space-y-12">
          <Logo className="items-start transform origin-left scale-110" />
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Get in <br/><span className="text-red-600 text-outline">Touch!!</span></h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Address</span>
                  <span className="text-lg">9 The Hill, Stillorgan,<br/>Co. Dublin, Ireland,<br/>A94 AR23.</span>
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Phone</span>
                  <a href="tel:016853737" className="text-lg font-bold hover:text-red-600 transition-colors tracking-tight">(+353) 01 6853737</a>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Email</span>
                  <a href="mailto:info@skingraphics.ie" className="text-lg hover:text-red-600 transition-colors">info@skingraphics.ie</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-red-600">Opening Hours</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Mon - Fri</span>
                <span className="font-bold">10:00am - 5:30pm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Sat</span>
                <span className="font-bold">11:00am - 3:00pm</span>
              </li>
              <li className="flex justify-between text-red-600">
                <span className="text-red-600/50">Sun / Bank Holidays</span>
                <span className="font-bold">Closed</span>
              </li>
            </ul>
          </div>
          
          <div className="pt-16">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">Join the Community</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all group"
                  title={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
        <p>© 2025 Skin Graphics Tattoo & Piercing Studio</p>
        <p>Created by Premium Creative Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
