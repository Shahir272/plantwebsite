const tips = [
    "Dragon fruit cacti need a strong trellis because the branches get very heavy.",
    "Kiwi vines can take 3-5 years to produce their first fruit.",
    "Passion fruit vines have shallow roots—mulch heavily to retain moisture.",
    "Lemons stop ripening once picked, so leave them on the tree until fully yellow.",
    "To get good apples, you usually need two different varieties for cross-pollination.",
    "Mulberries drop ripe fruit easily; place a sheet under the tree and shake branches to harvest.",
    "Gooseberries are one of the few fruits that can tolerate some shade."
];

const carouselContainer = document.getElementById('carousel-container');

// Carousel State
let offset = 0;
const speed = 1.0; // Px per frame
const cardWidth = 350; // virtual width allocation per card
const gap = 20;


function initCarousel() {
    carouselContainer.innerHTML = '';

    // Calculate how many cards needed to fill screen + buffer
    // Width + 2*buffer, divided by card size
    const screenWidth = window.innerWidth;
    const cardsNeeded = Math.ceil(screenWidth / (cardWidth + gap)) * 3; // 3x screen width for safety
    const totalTips = tips.length;

    // Create sufficient cards
    const numberOfCopies = Math.ceil(cardsNeeded / totalTips);

    for (let i = 0; i < numberOfCopies; i++) {
        tips.forEach(tip => {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            card.textContent = `"${tip}"`;
            carouselContainer.appendChild(card);
        });
    }

    const cards = Array.from(document.querySelectorAll('.carousel-card'));
    const totalWidth = cards.length * (cardWidth + gap);

    function animate() {
        offset += speed;
        // Use window center for relative calculation since container is now full width depending on flow
        // But better to use container's own center
        const centerX = carouselContainer.offsetWidth / 2;

        cards.forEach((card, index) => {
            const cardSpacing = cardWidth + gap;

            // "Anchor" position of the card in the infinite stream
            let linearPos = (index * cardSpacing) - offset;

            // Normalized position within the [0, totalWidth) range
            // We shift it so 0 is at the center of the totalWidth track
            let pos = (linearPos % totalWidth);
            if (pos < -totalWidth / 2) pos += totalWidth;
            if (pos > totalWidth / 2) pos -= totalWidth;

            // visualX is relative to screen center
            const visualX = centerX + pos - (cardWidth / 2);

            // Scale Calculation based on distance from screen center
            const distance = Math.abs(pos);
            const maxDistance = window.innerWidth / 1.5;
            let scale = 1.2 - (0.4 * Math.min(distance / maxDistance, 1));

            // Opacity/Blur optional
            const opacity = 1 - (0.5 * Math.min(distance / maxDistance, 1));
            const zIndex = Math.floor(100 - (distance / 10));

            card.style.transform = `translateX(${visualX}px) translateY(-50%) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Handle resize to re-init to ensure enough cards
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initCarousel, 500);
    });
}

document.addEventListener('DOMContentLoaded', initCarousel);

console.log("Fruit Garden Pro Loaded 🌳");

// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Check if user already accepted
    if (!localStorage.getItem('cookieConsent')) {
        // Show banner with a slight delay for smooth entrance
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            // Save consent
            localStorage.setItem('cookieConsent', 'true');
            // Hide banner
            banner.classList.remove('show');
        });
    }
});
