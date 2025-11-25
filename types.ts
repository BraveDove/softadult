export interface PhotoItem {
  id: number;
  url: string;
  alt: string;
}

export interface GalleryConfig {
  totalPhotos: number;
  galleryTitle: string;
  nativeAdIndex: number;
  bannerAdIndex: number;
}