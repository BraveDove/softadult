import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/10 h-14 flex items-center justify-between px-4 transition-all duration-300">
      <div className="flex items-center">
        <span className="text-lg font-bold tracking-tight text-white">
          GalleryHub
        </span>
      </div>
      <nav className="flex items-center space-x-4 text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-primary transition-colors">Categories</a>
        <a href="#" className="hidden sm:block hover:text-primary transition-colors">Telegram</a>
        <a href="#" className="text-primary hover:text-white transition-colors">Subscribe</a>
      </nav>
    </header>
  );
};

export default Header;