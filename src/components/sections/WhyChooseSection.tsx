import { ProcessedFeature } from '@/lib/types';
import { classNames } from '@/lib/utils';
import Image from 'next/image';

interface WhyChooseSectionProps {
  title: string;
  subtitle: string;
  features: ProcessedFeature[];
  images: string[];
}

interface FeatureCardProps {
  feature: ProcessedFeature;
  index: number;
}

interface ImageGalleryProps {
  images: string[];
}

/**
 * Individual Feature Card Component
 * Reusable component for displaying feature with icon, title and description
 */
function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="flex items-start space-x-4">
        {/* Shield Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            />
          </svg>
        </div>

        {/* Feature Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageCollage({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <div className="flex justify-center lg:justify-start gap-4">
      {images.slice(0, 3).map((image, index) => (
        <div 
          key={index} 
          className="relative w-32 h-80 lg:w-36 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
          style={{
            transform: `translateY(${index * 20}px) rotate(${(index - 1) * 3}deg)`,
          }}
        >
          <Image
            src={image}
            alt={`Team image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function WhyChooseSection({ title, subtitle, features, images }: WhyChooseSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-white bg-opacity-5 backdrop-blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Collage - Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <ImageCollage images={images} />
            </div>
          </div>

          {/* Features Grid - Right Side */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
