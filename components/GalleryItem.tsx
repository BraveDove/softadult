import React from 'react';
import { PhotoItem } from '../types';

interface GalleryItemProps {
  photo: PhotoItem;
  onItemClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ photo, onItemClick }) => {
  return (
    <div 
      className="relative aspect-[3/4] overflow-hidden rounded-md bg-surface cursor-pointer group"
      onClick={onItemClick}
    >
      <img
        src={photo.url}
        alt={photo.alt}
        loading="lazy"
        width={600}
        height={800}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
      
      {/* Icon indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="bg-black/60 p-1.5 rounded-full backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
         </div>
      </div>
    </div>
  );
};

export default GalleryItem;