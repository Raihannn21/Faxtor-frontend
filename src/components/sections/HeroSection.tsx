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

    // Debug video URLs
    console.log('🎥 Video Debug:', {
        original: videoUrl,
        processed: videoUrl,
        thumbnail: thumbnailUrl
    });

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
                {/* Light overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-16" />
            </div>

            {/* Video Background - Primary */}
            {videoUrl && (
                <div className="absolute inset-0 w-full h-full overflow-hidden z-15">
                    {/* Show iframe only when video should play */}
                    {isVideoPlaying && (
                        <iframe
                            src={videoUrl}
                            className="absolute inset-0 w-full h-full scale-110"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            title="Background Video"
                            loading="eager"
                            style={{
                                border: 'none',
                                pointerEvents: 'none',
                            }}
                            onLoad={() => console.log('✅ Video iframe loaded and playing')}
                            onError={(e) => console.error('❌ Video iframe error:', e)}
                        />
                    )}
                    
                    {/* YouTube thumbnail with play button (always visible until clicked) */}
                    {thumbnailUrl && !isVideoPlaying && (
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center z-5 cursor-pointer group"
                            style={{
                                backgroundImage: `url(${thumbnailUrl})`
                            }}
                            onClick={() => {
                                console.log('🎬 User clicked play button');
                                setIsVideoPlaying(true);
                            }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <div className="bg-red-600 rounded-full p-6 group-hover:bg-red-700 transition-all transform group-hover:scale-110 shadow-lg">
                                    <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </div>
                            </div>
                            {/* Play text */}
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-sm opacity-75 mb-1">Click to play video</p>
                                <p className="font-semibold">Watch Our Story</p>
                            </div>
                        </div>
                    )}

                    {/* Auto-attempt iframe (hidden, for browsers that support autoplay) */}
                    <iframe
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full scale-110 opacity-0 pointer-events-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Auto Background Video"
                        style={{ border: 'none' }}
                        onLoad={() => {
                            console.log('🚀 Auto-iframe loaded, checking if playing...');
                            // After a short delay, hide thumbnail if video is playing
                            setTimeout(() => {
                                setIsVideoPlaying(true);
                            }, 3000);
                        }}
                    />
                </div>
            )}

            {/* Content - Left Aligned */}
            <div className="relative z-30 h-full flex items-center">
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
