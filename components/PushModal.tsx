import React from 'react';

interface PushModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const PushModal: React.FC<PushModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-surface border border-white/10 rounded-xl p-6 max-w-sm w-full shadow-2xl transform transition-all scale-100">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-white p-1"
        >
          ✕
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
             <span className="text-2xl">🔔</span>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">
            Don't Miss Out!
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Want the best new galleries sent directly to your browser? Exclusive photos, new sets, and hot picks—no spam, ever.
          </p>
          
          <div className="w-full space-y-3">
            <button
              onClick={onConfirm}
              className="w-full py-3 bg-primary hover:bg-primary/90 text-background font-bold rounded-lg transition-colors"
            >
              Yes, Notify Me
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 text-gray-500 hover:text-white text-sm transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushModal;