/* ==========================================================================
   INITIALIZATION & MENU
   ========================================================================== */
window.addEventListener('load', () => {
    // Mobile Menu Toggle
    const menuIcon = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon && navLinks) {
        menuIcon.onclick = () => navLinks.classList.toggle('active');
    }
});

/* ==========================================================================
   LIGHTBOX MODAL LOGIC
   ========================================================================== */
function openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
        img.src = src;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Stop background scroll
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Resume background scroll
    }
}

// Close if user clicks the dark background outside the image
window.onclick = function(event) {
    const modal = document.getElementById('lightbox-modal');
    if (event.target == modal) {
        closeLightbox();
    }
}