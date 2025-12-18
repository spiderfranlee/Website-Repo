
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ArtistSection from './components/ArtistSection';
import PiercingPriceList from './components/PiercingPriceList';
import Gallery from './components/Gallery';
import StudioSection from './components/StudioSection';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ChatBookingAgent from './components/ChatBookingAgent';

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
