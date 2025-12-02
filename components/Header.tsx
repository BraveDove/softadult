import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/10 h-14 flex items-center justify-between px-4 transition-all duration-300">
      {/* Brand Name - Shifted 20px right as requested previously */}
      <div className="flex items-center ml-[20px]">
        <span className="text-lg font-bold tracking-tight text-white">
          Top Name
        </span>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      {/* Hidden on mobile (hidden), Flex on medium screens+ (md:flex) */}
      <nav className="hidden md:flex items-center space-x-6 text-xs font-bold text-gray-300 mr-[10px] tracking-wide">
        <a href="#" className="hover:text-primary transition-colors">HOME</a>
        <a href="#" className="hover:text-primary transition-colors">ABOUT</a>
        <a href="#" className="hover:text-primary transition-colors">FOLLOW US</a>
        <a href="#" className="hover:text-primary transition-colors">SIGN IN</a>
      </nav>

      {/* --- MOBILE MENU BUTTON (Hamburger) --- */}
      {/* Visible on mobile (block), Hidden on medium screens+ (md:hidden) */}
      <button 
        className="md:hidden text-white p-2 focus:outline-none mr-[10px]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          // Close Icon (X)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon (Three lines)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-surface border-b border-white/10 shadow-2xl md:hidden animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4 text-center">
            <a 
              href="#" 
              className="text-sm font-bold text-gray-200 hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#" 
              className="text-sm font-bold text-gray-200 hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FOLLOW US
            </a>
            <a 
              href="#" 
              className="text-sm font-bold text-primary py-2"
              className="text-sm font-bold text-gray-200 hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SIGN IN
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;