import { Button } from '@/components/ui/Button';
import { getYouTubeThumbnail } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    videoUrl: string;
    backgroundImage: string | null;
}

export function HeroSection({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    videoUrl,
    backgroundImage
}: HeroSectionProps) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Get YouTube thumbnail for fallback
    const thumbnailUrl = getYouTubeThumbnail(videoUrl || '');




    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
            {/* Background Layer with Professional Image */}
            <div className="absolute inset-0 w-full h-full">
                {backgroundImage ? (
                    <>
                        {/* Main Background Image */}
                        <Image
                            src={backgroundImage}
                            alt="Hero background"
                            fill
                            className="object-cover object-center z-0"
                            priority
                            quality={90}
                            sizes="100vw"

                        />

                    </>
                ) : (
                    <>
                        <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-600" />

                    </>
                )}
                {/* Light overlay for text readability - MUCH lighter */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />
            </div>

            {/* Video Background - Only if no background image */}
            {videoUrl && !backgroundImage && (
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <iframe
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full scale-110"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        title="Background Video"
                        style={{
                            border: 'none',
                            pointerEvents: 'none',
                        }}
                    />
                </div>
            )}

            {/* Content - Left Aligned */}
            <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex justify-start">
                        <div className="max-w-2xl text-white">
                            {/* Company Name - Small Text */}
                            {subtitle && (
                                <div className="text-xs sm:text-sm font-medium mb-4 tracking-widest uppercase text-gray-200 text-left">
                                    {subtitle}
                                </div>
                            )}

                            {/* Main Title - Medium Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-left">
                                {title}
                            </h1>

                            {/* CTA Button */}
                            <div className="mb-12 text-left">
                                <Button
                                    href={ctaLink}
                                    variant="primary"
                                    size="md"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 text-sm tracking-wide uppercase rounded-md"
                                >
                                    {ctaText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Testimonial Section */}
            <div className="absolute bottom-12 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Description/Testimonial */}
                        {description && (
                            <p className="text-lg sm:text-xl text-white leading-relaxed font-light bg-black/30 backdrop-blur-sm rounded-lg px-8 py-6 mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white opacity-75"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
