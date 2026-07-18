document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. АНИМАЦИЯ СТРАНИЦ И СЛАЙДЕР (Home / About)
    // ==========================================
    const pages = document.querySelectorAll('.page');
    const nextBtn = document.getElementById('next');
    let currentPage = 0;

    // Проверяем, есть ли элементы слайдера на текущей странице
    if (pages.length > 0) {
        function showPage(newIndex, direction) {
            pages.forEach((page, i) => {
                page.classList.remove('active', 'prev', 'next');
                if (i === currentPage) {
                    page.classList.add(direction === 'next' ? 'prev' : 'next');
                }
                if (i === newIndex) {
                    page.classList.add('active');
                }
            });
            currentPage = newIndex;
        }

        // Защита от ошибки, если кнопки #next нет на странице
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const newIndex = (currentPage + 1) % pages.length;
                showPage(newIndex, 'next');
            });
        }

        // Показываем первую страницу при загрузке
        pages[currentPage].classList.add('active');
    }

    // ==========================================
    // 2. СТРАНИЦА КОНТАКТОВ (Toggle Phone/Email)
    // ==========================================
    const contactIcons = document.querySelectorAll('.contact-item .clickable');
    
    // querySelectorAll безопасен: если элементов нет, цикл просто не запустится
    contactIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const parent = icon.parentElement;
            parent.classList.toggle('active');
        });
    });

    // ==========================================
    // 3. СТРАНИЦА ПРОЕКТОВ: ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Снимаем активный класс со всех кнопок и вешаем на текущую
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    // Перезапуск CSS-анимации для плавного появления
                    card.style.animation = 'none';
                    card.offsetHeight; // Триггер перерисовки браузером (reflow)
                    card.style.animation = null;

                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ==========================================
    // 4. СТРАНИЦА ПРОЕКТОВ: РАСКРЫТИЕ ДЕТАЛЕЙ (Accordion)
    // ==========================================
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Используем надежный .closest() вместо проблемного .nextElementSibling
            const projectCard = btn.closest('.project-card');
            
            if (projectCard) {
                projectCard.classList.toggle('expanded');

                // Динамическая смена текста на кнопке
                if (projectCard.classList.contains('expanded')) {
                    btn.textContent = 'Hide Details';
                } else {
                    btn.textContent = 'View Details';
                }
            }
        });
    });

});