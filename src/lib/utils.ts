import { MediaItem, ProcessedFeature, ProcessedService, ProcessedClientLogo, FeaturesSection, ServicesSection, ClientSection } from './types';

/**
 * Extracts image URL from MediaItem, returns null if not available
 */
export function getImageUrl(mediaItem: MediaItem | null): string | null {
  return mediaItem?.node?.sourceUrl || null;
}

/**
 * Extracts alt text from MediaItem, returns empty string if not available
 */
export function getImageAlt(mediaItem: MediaItem | null): string {
  return mediaItem?.node?.altText || '';
}

/**
 * Extract YouTube video ID from various URL formats
 */
export function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return videoIdMatch?.[1] || null;
}

/**
 * Get YouTube thumbnail URL
 */
export function getYouTubeThumbnail(url: string): string | null {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
}

/**
 * Converts YouTube watch URL to embed URL with autoplay
 */
export function convertYouTubeUrl(url: string): string {
  if (!url) return '';
  
  const videoId = getYouTubeVideoId(url);
  
  if (!videoId) {
    return url;
  }
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&widgetid=1`;
  
  return embedUrl;
}

/**
 * Processes features data for easier component consumption
 */
export function processFeatures(data: FeaturesSection): ProcessedFeature[] {
  return [
    {
      title: data.feature1Title,
      description: data.feature1Description,
      icon: getImageUrl(data.feature1Icon),
    },
    {
      title: data.feature2Title,
      description: data.feature2Description,
      icon: getImageUrl(data.feature2Icon),
    },
    {
      title: data.feature3Title,
      description: data.feature3Description,
      icon: getImageUrl(data.feature3Icon),
    },
    {
      title: data.feature4Title,
      description: data.feature4Description,
      icon: getImageUrl(data.feature4Icon),
    },
  ].filter(feature => feature.title); // Filter out empty features
}

/**
 * Processes services data for easier component consumption
 */
export function processServices(data: ServicesSection): ProcessedService[] {
  return [
    {
      title: data.service1Title,
      description: data.service1Description,
      image: getImageUrl(data.service1Image),
      link: data.service1Link,
    },
    {
      title: data.service2Title,
      description: data.service2Description,
      image: getImageUrl(data.service2Image),
      link: data.service2Link,
    },
    {
      title: data.service3Title,
      description: data.service3Description,
      image: getImageUrl(data.service3Image),
      link: data.service3Link,
    },
  ].filter(service => service.title); // Filter out empty services
}

/**
 * Processes client logos data for easier component consumption
 */
export function processClientLogos(data: ClientSection): ProcessedClientLogo[] {
  return [
    { id: 1, sourceUrl: getImageUrl(data.clientLogo1), altText: getImageAlt(data.clientLogo1) },
    { id: 2, sourceUrl: getImageUrl(data.clientLogo2), altText: getImageAlt(data.clientLogo2) },
    { id: 3, sourceUrl: getImageUrl(data.clientLogo3), altText: getImageAlt(data.clientLogo3) },
    { id: 4, sourceUrl: getImageUrl(data.clientLogo4), altText: getImageAlt(data.clientLogo4) },
    { id: 5, sourceUrl: getImageUrl(data.clientLogo5), altText: getImageAlt(data.clientLogo5) },
    { id: 6, sourceUrl: getImageUrl(data.clientLogo6), altText: getImageAlt(data.clientLogo6) },
  ].filter(logo => logo.sourceUrl); // Filter out empty logos
}

/**
 * Safely truncate text to specified length
 */
export function truncateText(text: string, length: number = 150): string {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Generate class names conditionally
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http') || url.startsWith('//');
}

/**
 * Format URL for internal navigation
 */
export function formatInternalUrl(url: string): string {
  if (isExternalUrl(url)) return url;
  return url.startsWith('/') ? url : `/${url}`;
}
