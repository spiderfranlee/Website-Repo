
import React, { useState } from 'react';
import Logo from './Logo.tsx';

const BookingForm: React.FC = () => {
  const [service, setService] = useState<'tattoo' | 'piercing' | 'other' | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const proceedWithSubmission = () => {
    // In a real app, this would send data to an API
    console.log("Form submitted successfully");
    setShowConfirm(false);
    alert("Request received! We'll contact you within 24-48 hours.");
  };

  return (
    <section id="quote-form" className="py-24 bg-black text-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Text */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-red-600">Request Reservation</h2>
          <p className="font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none">Book Your Consultation</p>
          
          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-gray-400 leading-relaxed max-w-2xl mx-auto italic">
              Please note that this information is NOT for making a booking. It is meant to request a reservation, and we will contact you within the next 24 to 48 hours via email or phone to confirm, depending on availability for that day.
            </p>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
              Alternatively, you can <a href="tel:016853737" className="text-white hover:text-red-600 transition-colors underline underline-offset-4 decoration-red-600/50">CALL</a> to inquire about same-day booking.
            </p>
          </div>
        </div>

        {/* The Granite Form Card */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
          
          <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-12 text-center">Contact Information</h2>
          
          <form className="space-y-10" onSubmit={handleFormSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">First Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your Name" 
                  className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-600 transition-all rounded-xl placeholder:text-white/20" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Last Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your Last Name" 
                  className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:outline-none focus:border-red-600 transition-all rounded-xl placeholder:text-white/20" 
                  required 
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2 col-span-1">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Code *</label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 text-sm rounded-xl focus:outline-none focus:border-red-600 transition-all appearance-none cursor-pointer">
                    <option className="bg-zinc-900 text-white">IE +353</option>
                    <option className="bg-zinc-900 text-white">UK +44</option>
                    <option className="bg-zinc-900 text-white">US +1</option>
                  </select>
                </div>
                <div className="space-y-2 col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Phone *</label>
                  <input 
                    type="tel" 
                    placeholder="What's your Number" 
                    className="w-full bg-white/5 border border-white/10 p-4 text-sm rounded-xl focus:outline-none focus:border-red-600 transition-all placeholder:text-white/20" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 p-4 text-sm rounded-xl focus:outline-none focus:border-red-600 transition-all placeholder:text-white/20" 
                  required 
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-[2rem] relative">
              <span className="absolute -top-3 left-8 bg-zinc-950 px-4 text-[9px] font-black uppercase tracking-[0.3em] text-red-600">Service Selection</span>
              <p className="text-[10px] font-bold mb-6 uppercase tracking-widest text-center text-gray-400">Select your preferred service *</p>
              <div className="flex flex-wrap justify-center gap-10">
                {['Tattoo', 'Piercing', 'Other'].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="service" 
                      value={opt.toLowerCase()} 
                      onChange={(e) => setService(e.target.value as any)}
                      className="w-5 h-5 accent-red-600 bg-white/5 border-white/10" 
                    />
                    <span className={`text-xs font-black uppercase tracking-[0.2em] transition-all ${service === opt.toLowerCase() ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Piercing Detail (Conditional Appearance) */}
            <div className={`p-8 border border-white/5 bg-white/[0.02] rounded-[2rem] relative transition-all duration-500 ${service === 'piercing' ? 'opacity-100 scale-100 ring-1 ring-red-600/30' : 'opacity-20 grayscale pointer-events-none'}`}>
               <span className="absolute -top-3 left-8 bg-zinc-950 px-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Piercing Detail</span>
               <p className="text-[11px] font-bold mb-6 uppercase tracking-widest">Are you getting a Piercing and over 18 years old?</p>
               <div className="flex gap-10 mb-6">
                  <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
                    <input type="radio" name="p18" className="accent-red-600" /> YES
                  </label>
                  <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
                    <input type="radio" name="p18" className="accent-red-600" /> NO
                  </label>
               </div>
               <p className="text-[9px] text-red-600/70 font-black uppercase tracking-widest italic">* Parental consent required on the day for minors</p>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Appointment Date *</label>
                <input type="date" className="w-full bg-white/5 border border-white/10 p-4 text-sm rounded-xl focus:outline-none focus:border-red-600 text-white invert-calendar" required />
                <p className="text-[8px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed">Subject to availability on requested day</p>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">App Time *</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 text-sm rounded-xl focus:outline-none focus:border-red-600 appearance-none cursor-pointer" required>
                  <option value="" className="bg-zinc-900">Select Time</option>
                  <option className="bg-zinc-900">10:00 AM</option>
                  <option className="bg-zinc-900">12:00 PM</option>
                  <option className="bg-zinc-900">2:00 PM</option>
                  <option className="bg-zinc-900">4:00 PM</option>
                </select>
                <p className="text-[8px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed">Suggested time slots</p>
              </div>
            </div>

            {/* Tattoo Detail (Conditional Appearance) */}
            <div className={`p-8 border border-white/5 bg-white/[0.02] rounded-[2rem] relative transition-all duration-500 ${service === 'tattoo' ? 'opacity-100 scale-100 ring-1 ring-red-600/30' : 'opacity-20 grayscale pointer-events-none'}`}>
               <span className="absolute -top-3 left-8 bg-zinc-950 px-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Tattoo Detail</span>
               
               <div className="space-y-8">
                 <div className="flex flex-col gap-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest">Are you getting a Tattoo and over 18 years old?</p>
                    <div className="flex gap-10">
                        <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
                          <input type="radio" name="t18" className="accent-red-600" /> YES
                        </label>
                        <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest cursor-pointer">
                          <input type="radio" name="t18" className="accent-red-600" /> NO
                        </label>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Describe your tattoo idea</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 p-5 text-sm min-h-[140px] rounded-xl focus:outline-none focus:border-red-600 placeholder:text-white/20" 
                      placeholder="Share as much detail as possible (concept, style, elements)..."
                    ></textarea>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Placement</label>
                       <input type="text" placeholder="e.g. Forearm" className="w-full bg-white/5 border border-white/10 p-4 text-xs rounded-xl focus:outline-none focus:border-red-600" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Approx. Size (cm)</label>
                       <input type="text" placeholder="ex: 10 x 15" className="w-full bg-white/5 border border-white/10 p-4 text-xs rounded-xl focus:outline-none focus:border-red-600" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest">Budget (€)</label>
                       <input type="text" placeholder="Ex: 200 - 300" className="w-full bg-white/5 border border-white/10 p-4 text-xs rounded-xl focus:outline-none focus:border-red-600" />
                    </div>
                 </div>
               </div>
            </div>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-6">
              <div className="flex-1 w-full space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-center text-gray-500">Reference Image 1</p>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 p-10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-3xl group">
                  <div className="w-10 h-10 mb-2 border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-red-600 transition-all">
                    <span className="text-xl">+</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Upload File</span>
                  <p className="text-[8px] text-gray-600 mt-2">MAX 12MB</p>
                </div>
              </div>

              <div className="opacity-20 transform scale-75">
                <Logo />
              </div>

              <div className="flex-1 w-full space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-center text-gray-500">Reference Image 2</p>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 p-10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-3xl group">
                  <div className="w-10 h-10 mb-2 border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-red-600 transition-all">
                    <span className="text-xl">+</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Upload File</span>
                  <p className="text-[8px] text-gray-600 mt-2">MAX 12MB</p>
                </div>
              </div>
            </div>

            <p className="text-center text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">
              Send more ideas to <a href="mailto:info@skingraphics.ie" className="text-red-600 hover:text-white transition-colors underline">info@skingraphics.ie</a>
            </p>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Any other Questions?</label>
              <textarea placeholder="Anything else we should know?" className="w-full bg-white/5 border border-white/10 p-5 text-sm min-h-[120px] rounded-xl focus:outline-none focus:border-red-600"></textarea>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-10">
               <div className="bg-white/5 border border-white/10 p-4 flex items-center gap-6 rounded-2xl w-full md:w-auto">
                  <input type="checkbox" className="w-6 h-6 rounded-md bg-white/10 border-white/20 accent-red-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/60">I'm not a robot</span>
                    <span className="text-[7px] text-gray-600 uppercase tracking-widest">reCAPTCHA Verification</span>
                  </div>
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-5 opacity-20 grayscale invert" />
               </div>
               
               <button type="submit" className="group w-full md:w-80 py-6 bg-red-600 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all rounded-full shadow-2xl relative overflow-hidden">
                 <span className="relative z-10">Submit Request</span>
                 <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               </button>
            </div>
          </form>

          <p className="text-center text-[8px] text-gray-600 uppercase mt-16 tracking-[0.4em]">
            Submit errors? Contact <span className="text-gray-400">01 6853737</span> or <span className="text-gray-400">info@skingraphics.ie</span>
          </p>
        </div>
      </div>

      {/* Confirmation Dialog Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <div className="glass max-w-md w-full p-10 rounded-[2rem] border border-white/20 shadow-2xl text-center space-y-8 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Submit Request?</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Are you sure you want to submit this request? Our team will review your details and contact you within 24 to 48 hours.
              </p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all rounded-full"
              >
                No, Back
              </button>
              <button 
                onClick={proceedWithSubmission}
                className="flex-1 py-4 bg-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full shadow-lg"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
