Objective:
Register a Service Worker for offline caching of assets.
Code (main.js):

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
.then(reg => console.log('Service Worker registered', reg))
.catch(err => console.error('Service Worker error:', err));
}

Code (sw.js):

self.addEventListener('install', event => {
event.waitUntil(
caches.open('v1').then(cache => cache.addAll(['/index.html', '/styles.css', '/main.js']))
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request).then(response => response || fetch(event.request))
);
});

Explanation:
Service Workers enable offline capabilities by intercepting network requests and serving cached assets.
