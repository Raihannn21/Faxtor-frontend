'use client';

import { useHomepageData } from '@/hooks/useHomepage';
import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { LoadingSection, ErrorSection } from '@/components/ui/Loading';

export default function HomePage() {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only run queries client-side
  const { data, loading, error, isReady } = useHomepageData(!isClient);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSection message="Loading Faxtor homepage..." />
      </div>
    );
  }

  // Error state
  if (error) {
    console.error('Homepage error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorSection message="Failed to load homepage content. Please try refreshing the page." />
      </div>
    );
  }

  // No data state
  if (!isReady || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <ErrorSection message="No content available" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {data.hero && (
        <HeroSection
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          ctaText={data.hero.ctaText}
          ctaLink={data.hero.ctaLink}
          videoUrl={data.hero.videoUrl}
          backgroundImage={data.hero.backgroundImage}
        />
      )}

      {/* Why Choose Section */}
      {data.whyChoose && data.features && (
        <WhyChooseSection
          title={data.whyChoose.title}
          subtitle={data.whyChoose.subtitle}
          features={data.features}
          images={data.whyChoose.images.filter(Boolean) as string[]}
        />
      )}

      {/* Services Section */}
      {data.services && (
        <ServicesSection
          title={data.services.title}
          description={data.services.description}
          services={data.services.items}
        />
      )}

      {/* Client & Testimonial Section */}
      {data.clients && data.testimonial && (
        <TestimonialSection
          clientTitle={data.clients.title}
          clientLogos={data.clients.logos}
          testimonial={data.testimonial}
        />
      )}
    </main>
  );
}
