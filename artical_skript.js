const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.progress-dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalCards = cards.length;
let autoScrollInterval;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) card.classList.add('active');
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
}
function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCards();
}
function startAutoScroll() {
    autoScrollInterval = setInterval(nextCard, 5000);
}
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}
// События
prevBtn.addEventListener('click', () => prevCard());
nextBtn.addEventListener('click', () => nextCard());
dots.forEach(dot => dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateCards();
}));
// Свайп
let startX = 0;
carousel.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 50) startX > endX ? nextCard() : prevCard();
});
// Клавиатура
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === 'ArrowRight') nextCard();
});
// Автоскролл
startAutoScroll();
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
// Клики
document.querySelectorAll('.text-word:not(.nav)').forEach(word => {
    word.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        this.style.opacity = '0.7';
        setTimeout(() => { this.style.transform = ''; this.style.opacity = ''; }, 200);
    });
});
document.querySelectorAll('.image-box').forEach(box => {
    box.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => this.style.transform = '', 300);
    });
});

updateCards();