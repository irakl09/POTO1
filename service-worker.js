const CACHE_NAME = 'flour-calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/m.jpg',
  '/m-512.jpg', // ახალი ხატულა
  '/manifest.json', // manifest ფაილი
  '/js/jspdf.umd.min.js' // თუ jsPDF ლოკალურად გაქვთ
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
