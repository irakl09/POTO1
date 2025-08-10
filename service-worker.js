const CACHE_NAME = 'flour-calc-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'm-192.png', // "m" ფოტო
  'm-512.png',
  'splash.png' // Splash ფოტო "m"-ით
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
