/* ==========================================================================
   INITIALIZATION & MENU
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle - Updated for broader compatibility
    const menuIcon = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside (Critical for mobile UX)
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }
});

/* ==========================================================================
   LIGHTBOX MODAL LOGIC (Media Gallery)
   ========================================================================== */
function openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
        img.src = src;
        modal.style.display = "flex";
        // Prevents the background from scrolling while viewing a photo
        document.documentElement.style.overflow = "hidden"; 
        document.body.style.overflow = "hidden"; 
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.style.display = "none";
        // Restores scrolling
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto"; 
    }
}

// Close if user clicks the dark background outside the image
window.addEventListener('click', (event) => {
    const modal = document.getElementById('lightbox-modal');
    if (event.target === modal) {
        closeLightbox();
    }
});