// Service Worker with proper preloadResponse handling
self.addEventListener('fetch', (event) => {
  // Only handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // Wait for preloadResponse properly
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }
        
        // Fallback to network
        return fetch(event.request);
      } catch (error) {
        console.log('Service worker fetch failed:', error);
        // Fallback to network
        return fetch(event.request);
      }
    })());
  }
});

// Handle service worker installation
self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

// Handle service worker activation
self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
  event.waitUntil(self.clients.claim());
});
