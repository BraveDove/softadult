import React from 'react';
import { SMARTLINK_NATIVE_CARD } from '../constants';

const NativeAdCard: React.FC = () => {
  return (
    <a 
      href={SMARTLINK_NATIVE_CARD} 
      className="relative aspect-[3/4] overflow-hidden rounded-md bg-surface cursor-pointer group block"
    >
      {/* Use an image that looks like content but is slightly different/attractive */}
      <img
        src="https://images.unsplash.com/photo-1520483691742-bada60a1edd3?q=80&w=1000&auto=format&fit=crop"
        alt="Exclusive Content"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 grayscale-[30%] group-hover:grayscale-0"
      />
      
      {/* Subtle Overlay to distinguish it slightly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <span className="inline-block px-2 py-1 bg-secondary text-black text-[10px] font-bold uppercase tracking-wider mb-1 rounded-sm">
          Recommended
        </span>
        <h3 className="text-white text-sm font-bold leading-tight">
          See More Exclusive Photos
        </h3>
      </div>
    </a>
  );
};

export default NativeAdCard;