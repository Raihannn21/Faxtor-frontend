import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProcessedService } from '@/lib/types';
import { classNames } from '@/lib/utils';
import Image from 'next/image';

interface ServicesSectionProps {
  title: string;
  description: string;
  services: ProcessedService[];
}

function ServiceCard({ service }: { service: ProcessedService }) {
  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
        {/* Service Image */}
        {service.image && (
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Service Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
            {service.description}
          </p>

          {/* CTA Button */}
          {service.link && (
            <div className="mt-auto">
              <Button
                href={service.link}
                variant="outline"
                size="md"
                external={service.link.startsWith('http')}
                className="w-full"
              >
                Learn More
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export function ServicesSection({ title, description, services }: ServicesSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Optional: View All Services Button */}
        <div className="text-center mt-12">
          <Button
            href="/services"
            variant="primary"
            size="lg"
            className="px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
