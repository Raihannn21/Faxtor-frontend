import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-demo.tokoweb.live',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    qualities: [25, 50, 75, 90, 100],
    formats: ['image/webp', 'image/avif']
  },
  // Disable service worker in development
  experimental: {
    webpackBuildWorker: false,
  },
};

export default nextConfig;
