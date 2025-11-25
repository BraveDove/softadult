import React from 'react';

const BannerSlot: React.FC = () => {
  return (
    <div className="col-span-2 md:col-span-3 w-full py-6 flex justify-center bg-transparent">
      {/* Ad Container */}
      <div className="w-[300px] h-[250px] bg-surface border border-white/5 flex items-center justify-center relative overflow-hidden">
        <span className="text-gray-600 text-xs absolute top-1 right-1">Ad</span>
        <div className="text-center text-gray-500 text-sm">
          {/* Placeholder for 300x250 JS Script */}
          <p>300x250 Banner Slot</p>
          <p className="text-xs mt-1 text-gray-700">(Scripts load here)</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSlot;