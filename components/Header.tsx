import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/10 h-14 flex items-center justify-between px-4 transition-all duration-300">
      {/* Shifted brand name 20px to the right */}
      <div className="flex items-center ml-[20px]">
        <span className="text-lg font-bold tracking-tight text-white">
          Top Name
        </span>
      </div>
      {/* Shifted nav 10px from the right edge */}
      <nav className="flex items-center space-x-6 text-xs font-bold text-gray-300 mr-[10px] tracking-wide">
        <a href="#" className="hover:text-primary transition-colors">HOME</a>
        <a href="#" className="hover:text-primary transition-colors">ABOUT</a>
        <a href="#" className="hover:text-primary transition-colors">FOLLOW US</a>
        <a href="#" className="hover:text-primary transition-colors">SIGN IN</a>
      </nav>
    </header>
  );
};

export default Header;