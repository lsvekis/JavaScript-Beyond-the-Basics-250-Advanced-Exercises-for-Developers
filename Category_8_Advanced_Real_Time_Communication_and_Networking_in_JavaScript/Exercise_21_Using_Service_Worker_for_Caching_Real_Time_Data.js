Objective:
Cache static assets that support a real‑time application using a Service Worker.
Code (sw.js):

self.addEventListener('install', event => {
event.waitUntil(
caches.open('realtime-cache').then(cache => cache.addAll([
'/index.html',
'/app.js',
'/styles.css'
]))
);
});
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(response => response || fetch(event.request))
);
});

Explanation:
Caching key assets with a Service Worker can improve load times and maintain a smooth user experience for real‑time apps.
