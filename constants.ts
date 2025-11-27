import { GalleryConfig, PhotoItem } from './types';

export const SMARTLINK_PRELANDER = '';
export const SMARTLINK_NATIVE_CARD = '';
export const SMARTLINK_EXIT_INTENT = '';

export const HERO_IMAGE_URL = '/assets/images/header_img.png';

export const CONFIG: GalleryConfig = {
  totalPhotos: 18,
  galleryTitle: "Model Showcase: Anastasia's Beach Session",
  nativeAdIndex: 6,
  bannerAdIndex: 12,
};

export const PHOTOS: PhotoItem[] = Array.from(
  { length: CONFIG.totalPhotos },
  (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/600/800?random=${i + 1}`,
    alt: `Exclusive beach photo ${i + 1}`,
  })
);

export const RELATED_GALLERIES = [
  { id: 101, title: 'Summer Vibes Collection', img: 'https://picsum.photos/300/200?random=101' },
  { id: 102, title: 'Urban Street Style', img: 'https://picsum.photos/300/200?random=102' },
  { id: 103, title: 'Studio Glamour', img: 'https://picsum.photos/300/200?random=103' },
  { id: 104, title: 'Night Life Series', img: 'https://picsum.photos/300/200?random=104' },
];
