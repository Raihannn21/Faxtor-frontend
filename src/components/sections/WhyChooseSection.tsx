import { Card } from '@/components/ui/Card';
import { ProcessedFeature } from '@/lib/types';
import { classNames } from '@/lib/utils';
import Image from 'next/image';

interface WhyChooseSectionProps {
  title: string;
  subtitle: string;
  features: ProcessedFeature[];
  images: string[];
}

function FeatureCard({ feature }: { feature: ProcessedFeature }) {
  return (
    <Card className="text-center h-full">
      <div className="flex flex-col items-center h-full">
        {/* Feature Icon */}
        {feature.icon && (
          <div className="w-16 h-16 mb-4 flex-shrink-0">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Feature Title */}
        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          {feature.title}
        </h3>

        {/* Feature Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {feature.description}
        </p>
      </div>
    </Card>
  );
}

function ImageCollage({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {images.slice(0, 4).map((image, index) => (
        <div 
          key={index} 
          className={classNames(
            "relative rounded-lg overflow-hidden",
            index === 0 ? "row-span-2" : "aspect-square"
          )}
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>

          {/* Image Collage */}
          <div className="h-96 lg:h-[500px]">
            <ImageCollage images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
