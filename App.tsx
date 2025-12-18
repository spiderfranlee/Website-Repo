
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import ArtistSection from './components/ArtistSection.tsx';
import PiercingPriceList from './components/PiercingPriceList.tsx';
import Gallery from './components/Gallery.tsx';
import StudioSection from './components/StudioSection.tsx';
import FAQ from './components/FAQ.tsx';
import BookingForm from './components/BookingForm.tsx';
import Footer from './components/Footer.tsx';
import ChatBookingAgent from './components/ChatBookingAgent.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Floating AI Booking Agent Widget */}
        <ChatBookingAgent />

        <About />
        <ArtistSection />
        
        {/* New Piercing Price List & Info Section */}
        <PiercingPriceList />

        <StudioSection />
        <Gallery />
        <FAQ />
        
        {/* Reservation Request Form Section */}
        <BookingForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
