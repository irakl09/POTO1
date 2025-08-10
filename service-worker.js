const CACHE_NAME = 'flour-calc-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'icons/m-192.png', // დამატებული იკონები ქეშში
  'icons/m-512.png',
  'icons/splash.png'
  // დაამატეთ სხვა თუ გაქვთ
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
