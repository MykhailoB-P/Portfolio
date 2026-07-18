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
  

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Category Filtering ("Folders")
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Reset CSS animation
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = null;

                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 2. Fixed "View Details" Accordion Logic
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Correctly find the parent project card instead of nextElementSibling
            const projectCard = btn.closest('.project-card');
            projectCard.classList.toggle('expanded');

            // Toggle button text dynamically
            if (projectCard.classList.contains('expanded')) {
                btn.textContent = 'Hide Details';
            } else {
                btn.textContent = 'View Details';
            }
        });
    });
});