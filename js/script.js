document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    // Function to show a page with animation
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

    // Right arrow click
    document.getElementById('next').addEventListener('click', () => {
        const newIndex = (currentPage + 1) % pages.length;
        showPage(newIndex, 'next');
    });

    // Show first page initially
    pages[currentPage].classList.add('active');
});
