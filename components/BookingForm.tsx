
import React, { useState } from 'react';
import Logo from './Logo.tsx';

const BookingForm: React.FC = () => {
  const [service, setService] = useState<'tattoo' | 'piercing' | 'other' | null>('tattoo');
  const [showConfirm, setShowConfirm] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const proceedWithSubmission = () => {
    setShowConfirm(false);
    alert("Request received! We'll contact you within 24-48 hours.");
  };

  return (
    <section id="quote-form" className="py-24 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-red-600">REQUEST RESERVATION</h2>
          <p className="font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none text-white">Book Your Consultation</p>
          <div className="space-y-4 pt-6 max-w-2xl mx-auto">
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed italic">
              Please note that this information is NOT for making a booking. It is meant to request a reservation, and we will contact you within the next 24 to 48 hours via email or phone to confirm, depending on availability for that day.
            </p>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-loose text-center">
              ALTERNATIVELY, YOU CAN <a href="tel:016853737" className="text-red-600 hover:text-white transition-colors underline underline-offset-4 decoration-red-600/50">CALL</a> TO INQUIRE ABOUT SAME-DAY BOOKING.
            </p>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative">
          <h3 className="text-lg font-black uppercase tracking-[0.3em] mb-12 text-center text-white">Contact Information</h3>
          
          <form className="space-y-12" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">First Name *</label>
                <input type="text" placeholder="Enter your Name" className="w-full bg-[#111] border border-white/5 p-5 text-sm focus:outline-none focus:border-red-600/50 transition-all rounded-xl" required />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Last Name *</label>
                <input type="text" placeholder="Enter your Last Name" className="w-full bg-[#111] border border-white/5 p-5 text-sm focus:outline-none focus:border-red-600/50 transition-all rounded-xl" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Code *</label>
                <select className="w-full bg-[#111] border border-white/5 p-5 text-sm rounded-xl appearance-none cursor-pointer">
                  <option>IE +353</option>
                  <option>UK +44</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Phone *</label>
                <input type="tel" placeholder="What's your Number" className="w-full bg-[#111] border border-white/5 p-5 text-sm rounded-xl focus:outline-none focus:border-red-600/50 transition-all" required />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Email Address *</label>
                <input type="email" placeholder="Email" className="w-full bg-[#111] border border-white/5 p-5 text-sm rounded-xl focus:outline-none focus:border-red-600/50 transition-all" required />
              </div>
            </div>

            <div className="bg-[#111]/30 p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative mt-16 text-center">
              <span className="absolute -top-3 left-10 bg-[#0a0a0a] px-4 text-[9px] font-black uppercase tracking-[0.4em] text-red-600">Service Selection</span>
              <p className="text-[10px] font-black mb-8 uppercase tracking-[0.2em] text-gray-400">Select your preferred service *</p>
              <div className="flex flex-wrap justify-center gap-12">
                {['Tattoo', 'Piercing', 'Other'].map((opt) => (
                  <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                    <input type="radio" name="service" value={opt.toLowerCase()} checked={service === opt.toLowerCase()} onChange={(e) => setService(e.target.value as any)} className="w-5 h-5 accent-red-600" />
                    <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${service === opt.toLowerCase() ? 'text-white' : 'text-gray-500'}`}>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Appointment Date *</label>
                <input type="date" className="w-full bg-[#111] border border-white/5 p-5 text-sm rounded-xl text-white invert-calendar" required />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">App Time *</label>
                <select className="w-full bg-[#111] border border-white/5 p-5 text-sm rounded-xl appearance-none cursor-pointer" required>
                  <option value="">Select Time</option>
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>2:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
            </div>

            {service === 'tattoo' && (
              <div className="bg-[#111]/30 p-10 rounded-[3rem] border border-white/5 relative space-y-12">
                <span className="absolute -top-3 left-10 bg-[#0a0a0a] px-4 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">Tattoo Detail</span>
                <div className="space-y-4">
                   <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Describe your tattoo idea</label>
                   <textarea className="w-full bg-[#111] border border-white/5 p-6 text-sm min-h-[160px] rounded-2xl focus:outline-none" placeholder="Share as much detail as possible..."></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <input type="text" placeholder="Placement" className="bg-[#111] border border-white/5 p-5 text-xs rounded-xl" />
                   <input type="text" placeholder="Approx. Size (cm)" className="bg-[#111] border border-white/5 p-5 text-xs rounded-xl" />
                   <input type="text" placeholder="Budget (€)" className="bg-[#111] border border-white/5 p-5 text-xs rounded-xl" />
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-8">
              <div className="flex-1 w-full space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-center text-gray-600">Reference Image 1</p>
                <div className="border-2 border-dashed border-white/5 p-12 bg-[#111]/30 text-center rounded-[2rem] cursor-pointer hover:bg-[#111] transition-all">
                  <span className="text-2xl font-light text-white/40">+</span><br/><span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Upload File</span>
                </div>
              </div>
              <div className="opacity-10 scale-75 hidden md:block"><Logo light={true} /></div>
              <div className="flex-1 w-full space-y-4">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-center text-gray-600">Reference Image 2</p>
                <div className="border-2 border-dashed border-white/5 p-12 bg-[#111]/30 text-center rounded-[2rem] cursor-pointer hover:bg-[#111] transition-all">
                  <span className="text-2xl font-light text-white/40">+</span><br/><span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Upload File</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/5">
               <div className="bg-[#111] border border-white/5 p-5 flex items-center gap-8 rounded-2xl w-full md:w-auto px-8">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-6 h-6 rounded bg-black border-white/10 accent-red-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white/60">I'm not a robot</span>
                  </div>
               </div>
               <button type="submit" className="w-full md:w-96 py-7 bg-red-600 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all rounded-2xl shadow-2xl">
                 Submit Request
               </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
