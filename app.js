// Main Application Interaction Script
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header scroll behavior
    const header = document.getElementById('main-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 2. Mobile Menu Drawer Navigation
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link-item');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple menu toggle animation class
        menuToggle.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // 3. Contact Modal Open/Close Controls
    const contactModal = document.getElementById('contact-modal');
    const contactOverlay = document.getElementById('contact-overlay');
    const closeModalBtn = document.getElementById('close-modal');
    const openModalBtns = document.querySelectorAll('.open-contact-btn');
    const contactForm = document.getElementById('contact-form');

    const openModal = () => {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop page scrolling
    };

    const closeModal = () => {
        contactModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
        contactForm.reset();
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);
    contactOverlay.addEventListener('click', closeModal);

    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModal();
        }
    });

    // 4. Contact Form Submission Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;

            // Simple user facing confirmation logic
            // In a real application, we would POST this to a server endpoint
            console.log('Demande de contact reçue:', { name, email, subject, message });
            
            alert(`Merci ${name} ! Votre message a bien été envoyé. Notre équipe vous recontactera sous 24h.`);
            closeModal();
        });
    }

    // 5. Scroll Spy: Highlighting Navigation Item according to scroll position
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpy = () => {
        const scrollPosition = window.scrollY + 100; // Offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Initial call
});
