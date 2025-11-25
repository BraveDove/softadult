import React from 'react';
import { SMARTLINK_PRELANDER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] mt-14 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://picsum.photos/1200/800?random=hero')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-lg mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md border border-primary/30">
          Exclusive Set
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
          Model Showcase: Anastasia's Beach Session
        </h1>
        <p className="text-gray-200 text-sm md:text-base mb-6 drop-shadow-md">
          An exclusive 24-photo set. Discover the full collection inside.
        </p>
        <a 
          href={SMARTLINK_PRELANDER}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-background bg-primary hover:bg-white transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(0,163,255,0.5)] transform hover:scale-105"
        >
          View Full Gallery (24 Photos)
        </a>
      </div>
    </section>
  );
};

export default Hero;