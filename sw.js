const CACHE_NAME = 'bookshelf-offline-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com/3.4.17',
  'https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js',
  'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return resp;
      }).catch(() => cached);
    })
  );
});
