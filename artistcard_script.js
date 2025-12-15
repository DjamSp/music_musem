document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const cards = document.querySelectorAll('.music-card');
    const noResults = document.getElementById('noResults');
    
    let isDragging = false;
    let startX, scrollLeft;
    
    // Перетаскивание карусели
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });
    
    // Поиск
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        let found = false;
        
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const genre = card.getAttribute('data-genre').toLowerCase();
            
            if (name.includes(query) || genre.includes(query) || query === '') {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Показываем сообщение если ничего не найдено
        noResults.style.display = found ? 'none' : 'block';
        
        // Прокручиваем к первой найденной карточке
        if (found) {
            const firstVisible = document.querySelector('.music-card[style="display: block;"]');
            if (firstVisible) {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
    
    // События поиска
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Очистка поиска
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            performSearch();
        }
    });
    
    // Изначально скрываем сообщение
    noResults.style.display = 'none';
});
