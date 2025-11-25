import React, { useEffect, useState, useRef } from 'react';
import { SMARTLINK_EXIT_INTENT } from '../constants';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !hasTriggered.current) {
        
        // Check session storage to avoid spamming the user on refresh
        const sessionTriggered = sessionStorage.getItem('exitIntentShown');
        if (!sessionTriggered) {
          setIsVisible(true);
          hasTriggered.current = true;
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={() => setIsVisible(false)}
      />
      
      <div className="relative bg-surface border-2 border-primary rounded-xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,163,255,0.2)] text-center">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          WAIT! Don't Leave Yet!
        </h2>
        <p className="text-gray-300 mb-6">
          You haven't seen the best part. We have <span className="text-secondary font-bold">12 more exclusive photos</span> waiting for you.
        </p>
        
        <a
          href={SMARTLINK_EXIT_INTENT}
          className="block w-full py-4 bg-secondary text-black text-lg font-bold rounded-lg hover:bg-white transition-colors uppercase tracking-wide"
        >
          See 12 More Photos Here
        </a>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="mt-4 text-sm text-gray-500 hover:text-white underline decoration-gray-600"
        >
          No thanks, I hate nice photos
        </button>
      </div>
    </div>
  );
};

export default ExitIntentModal;