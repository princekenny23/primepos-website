// Minimal offline service worker to avoid 404s during development
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// No-op fetch handler to satisfy requests for /offline-sw.js
self.addEventListener('fetch', (event) => {
  // Intentionally empty — handle if needed in production
});
