/* ==========================================================================
   1. GLOBAL SETUP
   ========================================================================== */
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    /* High-end background with overlay for text readability */
    background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('../images/a.jpg') no-repeat center center;
    background-size: cover;
    background-attachment: scroll; 
    min-height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
}

/* ==========================================================================
   2. NAVIGATION BAR
   ========================================================================== */
nav {
    background-color: rgba(0, 0, 0, 0.95);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #d4af37;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;
}

.nav-links {
    display: flex;
    gap: 30px;
}

nav a {
    color: #d4af37;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    transition: 0.3s ease;
}

nav a:hover {
    color: #fff;
}

/* ==========================================================================
   3. HERO SECTION (Centered Content)
   ========================================================================== */
main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}

.hero-container {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* Safari support */
    padding: 60px 40px;
    border-radius: 15px;
    border: 1px solid rgba(212, 175, 55, 0.2);
    text-align: center;
    max-width: 900px;
    width: 100%;
}

.text-top {
    color: #ffffff;
    font-size: 1.4rem;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
}

.text-middle {
    font-family: 'Playfair Display', serif;
    color: #d4af37;
    font-size: 4rem; /* Larger gold font */
    margin: 0 0 20px 0;
    line-height: 1.1;
    font-weight: 700;
}

.text-bottom {
    color: #ffffff;
    font-size: 1.2rem;
    margin: 0 0 35px 0;
    font-style: italic;
    opacity: 0.9;
}

/* Call to Action Button */
.cta-button {
    display: inline-block;
    padding: 15px 40px;
    border: 2px solid #d4af37;
    color: #d4af37;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 0.9rem;
    transition: all 0.4s ease;
}

.cta-button:hover {
    background-color: #d4af37;
    color: #000;
    transform: translateY(-3px);
}

/* ==========================================================================
   4. FOOTER
   ========================================================================== */
footer {
    background-color: #000;
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid #1a1a1a;
}

.social-container {
    margin-bottom: 20px;
}

.social-container a {
    color: #d4af37;
    font-size: 1.8rem;
    margin: 0 15px;
    transition: color 0.3s;
}

.social-container a:hover {
    color: #fff;
}

.footer-nav {
    margin-bottom: 15px;
}

.footer-nav a {
    color: #888;
    text-decoration: none;
    margin: 0 10px;
    font-size: 0.75rem;
    text-transform: uppercase;
}

footer p {
    color: #555;
    font-size: 0.8rem;
    margin-top: 10px;
}

/* ==========================================================================
   5. MOBILE RESPONSIVENESS (Hamburger Menu & Scaling)
   ========================================================================== */
.menu-toggle {
    display: none;
    color: #d4af37;
    font-size: 1.8rem;
    cursor: pointer;
}

@media (max-width: 992px) {
    nav {
        justify-content: flex-end;
        padding: 1rem;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none; /* Controlled by JS */
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.98);
        padding: 30px;
        text-align: center;
        border-bottom: 2px solid #d4af37;
    }

    .nav-links.active {
        display: flex;
    }

    .text-middle {
        font-size: 2.5rem;
    }

    .hero-container {
        padding: 40px 20px;
    }
}

/* Contact Page Specifics */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr; /* Info on left, Form on right */
    gap: 40px;
    margin-top: 40px;
}

.contact-info {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-right: 1px solid rgba(212, 175, 55, 0.2);
    padding-right: 20px;
}

.info-item i {
    color: #d4af37;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.info-item h4 {
    color: #d4af37;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin: 0 0 5px 0;
}

.info-item p {
    font-size: 0.95rem;
    margin: 0;
    color: #ccc;
}

/* Ensure the container is wider for the split view */
.contact-container {
    max-width: 1000px;
}

/* Mobile Tweak: Stack them vertically */
@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
    .contact-info {
        border-right: none;
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        padding-right: 0;
        padding-bottom: 30px;
        text-align: center;
        align-items: center;
    }
}

const menu = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // This triggers the "X" animation
    menuLinks.classList.toggle('active'); // This triggers the menu overlay
});




const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const triggers = document.querySelectorAll('.lightbox-trigger');
const closeBtn = document.querySelector('.close-lightbox');

triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the browser from leaving the page
        const fullImageUrl = trigger.getAttribute('href');
        lightboxImg.src = fullImageUrl;
        lightbox.style.display = 'block';
    });
});

// Close when 'X' is clicked
closeBtn.onclick = () => lightbox.style.display = 'none';

// Close when clicking anywhere outside the image
lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
};


const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const videoContainer = document.getElementById('video-container');
const lightboxVideo = document.getElementById('lightbox-video');
const loader = document.getElementById('lightbox-loader');

// Handle both .lightbox-trigger (photos) and .video-trigger (YouTube)
document.querySelectorAll('.lightbox-trigger, .video-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const url = trigger.getAttribute('href');
        lightbox.style.display = 'block';
        loader.style.display = 'block';

        if (trigger.classList.contains('video-trigger')) {
            // YOUTUBE LOGIC
            const videoId = url.split('v=')[1]; // Extracts ID from link
            lightboxImg.style.display = 'none';
            videoContainer.style.display = 'block';
            lightboxVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            loader.style.display = 'none'; // YouTube handles its own loading
        } else {
            // IMAGE LOGIC
            videoContainer.style.display = 'none';
            lightboxImg.style.display = 'block';
            lightboxImg.src = url;
            lightboxImg.onload = () => {
                loader.style.display = 'none';
            };
        }
    });
});

// IMPORTANT: Clear the video when closing so the sound stops!
function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxVideo.src = ''; 
    lightboxImg.src = '';
}

document.querySelector('.close-lightbox').onclick = closeLightbox;
lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };


const registrationForm = document.getElementById('registrationForm'); // Ensure your <form> has this ID
const paymentBtn = document.querySelector('.payment-btn');

if (registrationForm) {
    registrationForm.addEventListener('submit', function() {
        // 1. Change the text to show progress
        paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SECURELY REDIRECTING...';
        
        // 2. Style change to show it is "busy"
        paymentBtn.style.opacity = '0.7';
        paymentBtn.style.cursor = 'not-allowed';
        
        // 3. Disable the button so they can't click twice
        paymentBtn.disabled = true;
    });
}




