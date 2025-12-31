const CACHE_NAME = 'flam-guide-v1';
const URLS_TO_CACHE = [
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Cache dynamic requests (like esm.sh scripts) for offline use next time
          if(event.request.method === 'GET' && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      });
    })
  );
});