
import React, { useState, useEffect, useRef } from 'react';
import { galleryImages } from './Gallery.tsx';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const titles = [
  "Custom Precision", "Artistic Flow", "Fine Line Work", 
  "Deep Saturation", "Intricate Geometry", "Realistic Portraits",
  "Modern Piercing", "Traditional Roots", "Studio Excellence",
  "Sterile Precision", "Vivid Colors", "Abstract Expressions"
];

const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
    } else {
      document.body.style.overflow = 'unset';
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-500">
      {/* Background Audio */}
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        loop
      />

      {/* Controls */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[210] p-4 text-white/50 hover:text-white transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-[210]">
        <div 
          className="h-full bg-red-600 transition-all duration-[4000ms] ease-linear"
          style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Slide Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8 md:p-20 overflow-hidden">
        {galleryImages.map((src, idx) => (
          <div 
            key={src}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out px-4 md:px-0 ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
          >
            <div className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] group">
              {/* Image with subtle floating animation */}
              <img 
                src={src} 
                alt={`Showreel image ${idx}`} 
                className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(255,0,0,0.15)] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Typography */}
              <div className="absolute -bottom-12 md:-bottom-20 left-0 w-full text-center">
                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white/20 select-none animate-pulse">
                  {titles[idx % titles.length]}
                </h2>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center items-center gap-12 z-[210]">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-2xl scale-110"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % galleryImages.length)}
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Visual Decor - Animated Light Rays */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-tr from-red-600/5 via-transparent to-red-600/5 rotate-45 animate-slow-spin"></div>
      </div>
    </div>
  );
};

export default ShowreelModal;
