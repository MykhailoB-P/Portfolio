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

    // Show first page initially
    pages[currentPage].classList.add('active');
});


// Toggle project details on click
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      details.classList.toggle('active');
    });
  });

  
// Toggle contact text on click (phone/Gmail)
document.querySelectorAll('.contact-item .clickable').forEach(icon => {
    icon.addEventListener('click', () => {
      const parent = icon.parentElement;
      parent.classList.toggle('active');
    });
  });
  