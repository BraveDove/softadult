import { GalleryConfig, PhotoItem } from './types';

// Placeholders for Affiliate/Monetization Links
export const SMARTLINK_PRELANDER = '#PRELANDER_LINK_HERE'; // e.g. https://tracker.com/click
export const SMARTLINK_NATIVE_CARD = '#SMARTLINK_NATIVE';
export const SMARTLINK_EXIT_INTENT = '#SMARTLINK_EXIT';

// Images
// IMPORTANT: Ensure you have created the folder structure 'public/assets/images/' 
// in your project root and placed 'header_img.png' there.
// The './' ensures it works correctly on GitHub Pages relative paths.
export const HERO_IMAGE_URL = './assets/images/header_img.png';

// Configuration
export const CONFIG: GalleryConfig = {
  totalPhotos: 18,
  galleryTitle: "Model Showcase: Anastasia's Beach Session",
  nativeAdIndex: 6, // Insert after 6th item
  bannerAdIndex: 12, // Insert after 12th item
};

// Generate Mock Data
export const PHOTOS: PhotoItem[] = Array.from({ length: CONFIG.totalPhotos }, (_, i) => ({
  id: i + 1,
  // Using picsum to simulate high-quality gallery images
  url: `https://picsum.photos/600/800?random=${i + 1}`,
  alt: `Exclusive beach photo ${i + 1}`,
}));

export const RELATED_GALLERIES = [
  { id: 101, title: 'Summer Vibes Collection', img: 'https://picsum.photos/300/200?random=101' },
  { id: 102, title: 'Urban Street Style', img: 'https://picsum.photos/300/200?random=102' },
  { id: 103, title: 'Studio Glamour', img: 'https://picsum.photos/300/200?random=103' },
  { id: 104, title: 'Night Life Series', img: 'https://picsum.photos/300/200?random=104' },
];