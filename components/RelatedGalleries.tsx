import React from 'react';
import { RELATED_GALLERIES } from '../constants';

const RelatedGalleries: React.FC = () => {
  return (
    <section className="py-8 border-t border-white/10 bg-background">
      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold text-white">You Might Also Like</h2>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-4 px-4 space-x-4 scrollbar-hide snap-x">
        {RELATED_GALLERIES.map((item) => (
          <a 
            key={item.id} 
            href="#" 
            className="flex-none w-[180px] snap-center group"
          >
            <div className="aspect-video rounded-md overflow-hidden bg-surface mb-2">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors line-clamp-2">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default RelatedGalleries;