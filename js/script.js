/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPT
   Handles project category filtering, accordion details, contact toggles,
   and expandable About page boxes.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. PROJECTS PAGE: Category Filter Buttons
    // ----------------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state on buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                // Show/hide project cards based on selected filter
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ----------------------------------------------------------------------
    // 2. PROJECTS PAGE: Expand / Collapse Accordion Details
    // ----------------------------------------------------------------------
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    if (toggleButtons.length > 0) {
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectCard = btn.closest('.project-card');

                if (projectCard) {
                    projectCard.classList.toggle('expanded');

                    // Update button label dynamically
                    if (projectCard.classList.contains('expanded')) {
                        btn.textContent = 'Hide Details';
                    } else {
                        btn.textContent = 'View Details';
                    }
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. CONTACT PAGE: Click Icon to Reveal Phone / Email Details
    // ----------------------------------------------------------------------
    const contactItems = document.querySelectorAll('.contact-item');

    if (contactItems.length > 0) {
        contactItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 4. ABOUT PAGE: Click Box to Expand / Collapse Details
    // ----------------------------------------------------------------------
    const expandableBoxes = document.querySelectorAll('.expandable-box');

    if (expandableBoxes.length > 0) {
        expandableBoxes.forEach(box => {
            box.addEventListener('click', (e) => {
                // If user clicks a link inside the box, do not toggle collapse state
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                box.classList.toggle('expanded');
            });
        });
    }

});