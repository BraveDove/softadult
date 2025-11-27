import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GalleryItem from './components/GalleryItem';
import NativeAdCard from './components/NativeAdCard';
import BannerSlot from './components/BannerSlot';
import RelatedGalleries from './components/RelatedGalleries';
import Footer from './components/Footer';
import PushModal from './components/PushModal';
import { PHOTOS, CONFIG } from './constants';

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isPushModalOpen, setIsPushModalOpen] = useState(false);

  // Logic: "Call showPushModal() only on the second click a user makes on any gallery image"
  const handleItemClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 2) {
      setIsPushModalOpen(true);
    }
    
    // In a real scenario, this might also open a lightbox or navigate to the image view
    console.log(`Gallery Item Clicked. Count: ${newCount}`);
  }, [clickCount]);

  const triggerSystemPushPrompt = () => {
    setIsPushModalOpen(false);
    console.log('// Evadav system prompt code called here.');
    // Example: window.evadavTag.prompt();
    alert("System Push Prompt Triggered (Placeholder)");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Hero />

      <main className="flex-grow container mx-auto px-2 py-6 max-w-5xl">
        {/* Gallery Grid: 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PHOTOS.map((photo, index) => {
            const currentPosition = index + 1;
            const elements = [];

            // Add the actual image
            elements.push(
              <GalleryItem 
                key={photo.id} 
                photo={photo} 
                onItemClick={handleItemClick} 
              />
            );

            // Logic to insert Native Ad after 6th image
            if (currentPosition === CONFIG.nativeAdIndex) {
              elements.push(<NativeAdCard key={`native-${index}`} />);
            }

            // Logic to insert Banner Slot after 12th image
            // Note: BannerSlot spans full width, so we might need to break grid flow or use span classes
            if (currentPosition === CONFIG.bannerAdIndex) {
               // We push a React Fragment containing the Banner, but to make it span full width 
               // in a CSS grid without breaking the grid structure awkwardly, 
               // the BannerSlot component handles its own col-spanning classes.
               elements.push(<BannerSlot key={`banner-${index}`} />);
            }

            return elements;
          })}
        </div>
      </main>

      <RelatedGalleries />
      <Footer />

      {/* Monetization Modals */}
      <PushModal 
        isOpen={isPushModalOpen} 
        onClose={() => setIsPushModalOpen(false)}
        onConfirm={triggerSystemPushPrompt}
      />
      
      {/* Exit Intent Modal removed as requested */}
    </div>
  );
};

export default App;