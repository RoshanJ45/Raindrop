    function createRaindrop() {
const raindrop = document.createElement('div');
raindrop.classList.add('raindrop');
// Random position for raindrops
const x = Math.random() * window.innerWidth;
raindrop.style.left = `${x}px`;
raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
// Append to body
document.body.appendChild(raindrop);
// Add ripple effect on "ground"
raindrop.addEventListener('animationend', () => {
createRipple(x, window.innerHeight - 10);
raindrop.remove();
});
}
function createRipple(x, y) {
const ripple = document.createElement('div');
ripple.classList.add('ripple');
ripple.style.left = `${x - 5}px`;
ripple.style.top = `${y}px`;
// Append to body
document.body.appendChild(ripple);
// Remove after animation
ripple.addEventListener('animationend', () => {
ripple.remove();
});
}
// Generate raindrops dynamically
setInterval(createRaindrop, 100);
