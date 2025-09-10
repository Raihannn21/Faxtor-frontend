import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faxtor Indonesia - Beyond Assessment: Transforming Insights into Impact",
  description: "Comprehensive assessment solutions for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Completely disable service workers and clear existing ones
              if ('serviceWorker' in navigator && typeof window !== 'undefined') {
                // Unregister all existing service workers
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                    console.log('Unregistered service worker:', registration.scope);
                  }
                });
                
                // Disable navigation preload to prevent the warning
                navigator.serviceWorker.ready.then(registration => {
                  if (registration && registration.navigationPreload) {
                    registration.navigationPreload.disable();
                  }
                }).catch(() => {
                  // Ignore errors if no service worker is registered
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
