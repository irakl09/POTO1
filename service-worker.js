const CACHE_NAME = 'flour-calc-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // დაამატეთ სხვა ფაილები თუ გაქვთ (მაგ. CSS თუ გამოყოფილია)
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
