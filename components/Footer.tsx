import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 py-8 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} GalleryHub. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;