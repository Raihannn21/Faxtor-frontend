import { useQuery } from '@apollo/client/react';
import { GET_HOMEPAGE_DATA } from '@/queries/homepage';
import { HomepageData, ProcessedFeature, ProcessedService, ProcessedClientLogo } from '@/lib/types';
import { 
  processFeatures, 
  processServices, 
  processClientLogos, 
  convertYouTubeUrl, 
  getImageUrl 
} from '@/lib/utils';

export function useHomepageData(skip = false) {
  const { data, loading, error } = useQuery<HomepageData>(GET_HOMEPAGE_DATA, {
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
    skip,
  });

  // Debug logging


  // Process raw data into component-friendly format
  const processedData = data?.page?.homepageOptions ? {
    // Hero Section
    hero: {
      title: data.page.homepageOptions.heroTitle,
      subtitle: data.page.homepageOptions.heroSubtitle,
      description: data.page.homepageOptions.heroDescription,
      ctaText: data.page.homepageOptions.heroCtaText,
      ctaLink: data.page.homepageOptions.heroCtaLink,
      videoUrl: convertYouTubeUrl(data.page.homepageOptions.heroVideoUrl),
      backgroundImage: getImageUrl(data.page.homepageOptions.heroBackgroundImage),
    },

    // Why Choose Section
    whyChoose: {
      title: data.page.homepageOptions.whyTitle,
      subtitle: data.page.homepageOptions.whySubtitle,
      images: [
        getImageUrl(data.page.homepageOptions.whyImage1),
        getImageUrl(data.page.homepageOptions.whyImage2),
        getImageUrl(data.page.homepageOptions.whyImage3),
        getImageUrl(data.page.homepageOptions.whyImage4),
      ].filter(Boolean), // Remove null values
    },

    // Features
    features: processFeatures(data.page.homepageOptions),

    // Services
    services: {
      title: data.page.homepageOptions.servicesTitle,
      description: data.page.homepageOptions.servicesDescription,
      items: processServices(data.page.homepageOptions),
    },

    // Client Logos
    clients: {
      title: data.page.homepageOptions.clientTitle,
      logos: processClientLogos(data.page.homepageOptions),
    },

    // Testimonial
    testimonial: {
      photo: getImageUrl(data.page.homepageOptions.testimonialPhoto),
      name: data.page.homepageOptions.testimonialName,
      position: data.page.homepageOptions.testimonialPosition,
      company: data.page.homepageOptions.testimonialCompany,
      text: data.page.homepageOptions.testimonialText,
      testCategories: data.page.homepageOptions.testCategories,
    },
  } : null;

  return {
    data: processedData,
    loading,
    error,
    // Helper methods
    hasData: !!processedData,
    isReady: !loading && !error && !!processedData,
  };
}

// Hook untuk individual sections (jika diperlukan)
export function useHeroData() {
  const { data, loading, error } = useHomepageData();
  return {
    hero: data?.hero,
    loading,
    error,
  };
}

export function useServicesData() {
  const { data, loading, error } = useHomepageData();
  return {
    services: data?.services,
    loading,
    error,
  };
}
