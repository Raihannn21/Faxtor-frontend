// Base WordPress types
export interface MediaItem {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

// Navigation types
export interface NavigationOptions {
  navCtaText: string;
  navCtaLink: string;
  companyPhone: string;
  companyEmail: string;
  companyAddress: string;
  socialFacebook: string;
  socialTwitter: string;
  socialLinkedin: string;
  socialInstagram: string;
}

export interface NavigationData {
  pages: {
    nodes: Array<{
      navigationOptions: NavigationOptions;
    }>;
  };
}

export interface ProcessedNavigationData {
  cta: {
    text: string;
    link: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

// Homepage specific types
export interface HeroSection {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroCtaText: string;
  heroCtaLink: string;
  heroVideoUrl: string;
  heroBackgroundImage: MediaItem | null;
}

export interface WhyChooseSection {
  whyTitle: string;
  whySubtitle: string;
  whyImage1: MediaItem | null;
  whyImage2: MediaItem | null;
  whyImage3: MediaItem | null;
  whyImage4: MediaItem | null;
}

export interface Feature {
  title: string;
  description: string;
  icon: MediaItem | null;
}

export interface FeaturesSection {
  feature1Title: string;
  feature1Description: string;
  feature1Icon: MediaItem | null;
  feature2Title: string;
  feature2Description: string;
  feature2Icon: MediaItem | null;
  feature3Title: string;
  feature3Description: string;
  feature3Icon: MediaItem | null;
  feature4Title: string;
  feature4Description: string;
  feature4Icon: MediaItem | null;
}

export interface Service {
  title: string;
  description: string;
  image: MediaItem | null;
  link: string;
}

export interface ServicesSection {
  servicesTitle: string;
  servicesDescription: string;
  service1Title: string;
  service1Description: string;
  service1Image: MediaItem | null;
  service1Link: string;
  service2Title: string;
  service2Description: string;
  service2Image: MediaItem | null;
  service2Link: string;
  service3Title: string;
  service3Description: string;
  service3Image: MediaItem | null;
  service3Link: string;
}

export interface ClientSection {
  clientTitle: string;
  clientLogo1: MediaItem | null;
  clientLogo2: MediaItem | null;
  clientLogo3: MediaItem | null;
  clientLogo4: MediaItem | null;
  clientLogo5: MediaItem | null;
  clientLogo6: MediaItem | null;
}

export interface TestimonialSection {
  testimonialPhoto: MediaItem | null;
  testimonialName: string;
  testimonialPosition: string;
  testimonialCompany: string;
  testimonialText: string;
  testCategories: string;
}

// Combined homepage options type
export interface HomepageOptions extends 
  HeroSection, 
  WhyChooseSection, 
  FeaturesSection, 
  ServicesSection, 
  ClientSection, 
  TestimonialSection {}

// Main homepage data structure
export interface HomepageData {
  page: {
    id: string;
    title: string;
    slug: string;
    homepageOptions: HomepageOptions;
  };
}

// GraphQL response type
export interface HomepageResponse {
  data: HomepageData;
  loading: boolean;
  error?: any;
}

// Processed data types for components
export interface ProcessedFeature {
  title: string;
  description: string;
  icon: string | null;
}

export interface ProcessedService {
  title: string;
  description: string;
  image: string | null;
  link: string;
}

export interface ProcessedClientLogo {
  id: number;
  sourceUrl: string | null;
  altText: string;
}
