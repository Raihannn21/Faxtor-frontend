import { useQuery } from '@apollo/client/react';
import { GET_NAVIGATION_DATA } from '@/queries/navigation';
import { NavigationData, ProcessedNavigationData } from '@/lib/types';

export function useNavigationData(skip = false) {
  const { data, loading, error } = useQuery<NavigationData>(GET_NAVIGATION_DATA, {
    errorPolicy: 'all',
    notifyOnNetworkStatusChange: true,
    skip,
  });

  // Process navigation data from homepage page (ACF Free compatible)
  const navigationOptions = data?.pages?.nodes?.[0]?.navigationOptions;
  const processedData: ProcessedNavigationData | null = navigationOptions ? {
    cta: {
      text: navigationOptions.navCtaText || 'Get Started',
      link: navigationOptions.navCtaLink || '/contact',
    },
    contact: {
      phone: navigationOptions.companyPhone || '',
      email: navigationOptions.companyEmail || '',
      address: navigationOptions.companyAddress || '',
    },
    social: {
      facebook: navigationOptions.socialFacebook || '',
      twitter: navigationOptions.socialTwitter || '',
      linkedin: navigationOptions.socialLinkedin || '',
      instagram: navigationOptions.socialInstagram || '',
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
