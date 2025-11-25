import React from 'react';
import { SMARTLINK_NATIVE_CARD } from '../constants';

const NativeAdCard: React.FC = () => {
  return (
    <a 
      href={SMARTLINK_NATIVE_CARD} 
      className="relative aspect-[3/4] overflow-hidden rounded-md bg-surface border-2 border-secondary/50 group block"
    >
      <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-4">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 animate-pulse">
          Premium Access
        </span>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
          Exclusive: 24 Unseen Photos
        </h3>
        <p className="text-gray-400 text-xs mb-4">
          Unlock the full uncensored gallery now.
        </p>
        <div className="px-4 py-2 bg-secondary text-black text-sm font-bold rounded shadow-lg group-hover:bg-white transition-colors">
          Watch Now
        </div>
      </div>
    </a>
  );
};

export default NativeAdCard;