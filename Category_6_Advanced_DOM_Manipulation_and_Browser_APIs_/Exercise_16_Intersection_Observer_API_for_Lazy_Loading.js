
const images = document.querySelectorAll('img[data-src]');
const config = { rootMargin: '0px 0px 50px 0px', threshold: 0.01 };

const loadImage = (entry) => {
const img = entry.target;
img.src = img.dataset.src;
img.removeAttribute('data-src');
};

const observer = new IntersectionObserver((entries, self) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
loadImage(entry);
self.unobserve(entry.target);
}
});
}, config);

images.forEach(img => observer.observe(img));

Explanation:
By monitoring when images approach the viewport, this technique delays loading until necessary, improving performance.
