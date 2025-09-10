import { Card } from '@/components/ui/Card';
import { ProcessedClientLogo } from '@/lib/types';
import Image from 'next/image';

interface TestimonialSectionProps {
  clientTitle: string;
  clientLogos: ProcessedClientLogo[];
  testimonial: {
    photo: string | null;
    name: string;
    position: string;
    company: string;
    text: string;
    testCategories: string;
  };
}

function ClientLogosCarousel({ logos }: { logos: ProcessedClientLogo[] }) {
  if (logos.length === 0) return null;

  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center space-x-8 animate-scroll">
        {logos.map((logo) => (
          <div key={logo.id} className="flex-shrink-0 w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300">
            {logo.sourceUrl && (
              <Image
                src={logo.sourceUrl}
                alt={logo.altText || 'Client logo'}
                width={96}
                height={64}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {logos.map((logo) => (
          <div key={`duplicate-${logo.id}`} className="flex-shrink-0 w-24 h-16 grayscale hover:grayscale-0 transition-all duration-300">
            {logo.sourceUrl && (
              <Image
                src={logo.sourceUrl}
                alt={logo.altText || 'Client logo'}
                width={96}
                height={64}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialSectionProps['testimonial'] }) {
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Profile Photo */}
        {testimonial.photo && (
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Testimonial Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Testimonial Text */}
          {testimonial.text && (
            <blockquote className="text-gray-700 text-lg italic mb-4 leading-relaxed">
              "{testimonial.text}"
            </blockquote>
          )}

          {/* Person Info */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 text-lg">
              {testimonial.name}
            </h4>
            <p className="text-gray-600">
              {testimonial.position} at {testimonial.company}
            </p>
          </div>

          {/* Test Categories */}
          {testimonial.testCategories && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {testimonial.testCategories.split(',').map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                >
                  {category.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export function TestimonialSection({ clientTitle, clientLogos, testimonial }: TestimonialSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            {clientTitle}
          </h2>
          
          <ClientLogosCarousel logos={clientLogos} />
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <TestimonialCard testimonial={testimonial} />
        </div>
      </div>

      {/* Custom styles for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
