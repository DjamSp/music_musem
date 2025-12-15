const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            // Находим прямоугольник внутри текущего элемента
            const previewBox = item.querySelector('.preview-box');
            
            item.addEventListener('mouseenter', () => {
                // Показываем только прямоугольник текущего элемента
                previewBox.style.display = 'block';
            });
            
            item.addEventListener('mouseleave', () => {
                // Скрываем прямоугольник текущего элемента
                previewBox.style.display = 'none';
            });
            
            item.addEventListener('click', () => {
                const text = item.firstChild.textContent.trim();
                console.log(`Clicked: ${text}`);
            });
        });