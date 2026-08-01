// StravexAI Interactive Scripts (ChatflowAI Style Features & Interactivity)
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navContainer = document.getElementById('nav-links-container');
    const navLinkItems = document.querySelectorAll('.nav-link-item');

    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', () => {
            navContainer.classList.toggle('active');
        });

        navLinkItems.forEach(item => {
            item.addEventListener('click', () => {
                navContainer.classList.remove('active');
            });
        });
    }

    // 2. Interactive Projects Split-Screen Switcher
    const projectItems = document.querySelectorAll('.project-item');
    const displayUrl = document.getElementById('project-display-url');
    const displayCategory = document.getElementById('project-display-category');
    const displayTitle = document.getElementById('project-display-title');
    const displayDesc = document.getElementById('project-display-desc');
    const displayStat1Val = document.getElementById('project-stat-1');
    const displayStat1Lbl = document.querySelector('#project-stat-1 + .p-stat-lbl');
    const displayStat2Val = document.getElementById('project-stat-2');
    const displayStat2Lbl = document.querySelector('#project-stat-2 + .p-stat-lbl');
    const displayTags = document.getElementById('project-display-tags');

    const projectsData = [
        {
            url: "https://stravex.ai/projects/agents-ia-ecommerce",
            category: "Agents IA & E-Commerce",
            title: "Agents IA pour E-Commerce & Vente",
            desc: "Déploiement d'agents IA autonomes pour boutiques en ligne et service client WhatsApp, recommandation automatique d'articles et conversion des leads.",
            stat1Val: "+45%",
            stat1Lbl: "Augmentation des Ventes",
            stat2Val: "24/7",
            stat2Lbl: "Réponse Autonome",
            tags: ["Agents IA", "E-Commerce", "WhatsApp API", "OpenAI", "Webhooks"]
        },
        {
            url: "https://tokpamarket.com",
            category: "Application E-Commerce & Marketplace",
            title: "Tokpa Market (Marketplace E-Commerce)",
            desc: "Développement complet de la marketplace Tokpa Market, une plateforme e-commerce multi-vendeurs rapide, sécurisée et fluide.",
            stat1Val: "100%",
            stat1Lbl: "Sur Mesure & Fluide",
            stat2Val: "Multi-Vendeurs",
            stat2Lbl: "Architecture Cloud",
            tags: ["Tokpa Market", "Marketplace", "Web & Mobile App", "Paiement En Ligne", "UX/UI High-End"]
        },
        {
            url: "https://stravex.ai/projects/saas-scolarite",
            category: "Logiciel SaaS Sur Mesure",
            title: "SaaS de Gestion de Scolarité",
            desc: "Plateforme SaaS complète dédiée aux écoles et établissements pour le suivi des élèves, la gestion des notes, bulletins et le contrôle des paiements.",
            stat1Val: "50+",
            stat1Lbl: "Écoles Partenaires",
            stat2Val: "-80%",
            stat2Lbl: "Charge Administrative",
            tags: ["SaaS Écoles", "Gestion Notes & Éleves", "Facturation", "Cloud Architecture"]
        },
        {
            url: "https://stravex.ai/projects/saas-pharmacie",
            category: "Logiciel SaaS Métier",
            title: "SaaS de Gestion de Pharmacie",
            desc: "Solution SaaS intelligente pour pharmacies gérant l'inventaire en temps réel, les ordonnances, les seuils de stock et l'analyse des ventes.",
            stat1Val: "Zéro",
            stat1Lbl: "Rupture de Stock",
            stat2Val: "100%",
            stat2Lbl: "Traçabilité & Ventes",
            tags: ["SaaS Pharmacie", "Stocks & Inventaire", "Ventes", "Analytics IA"]
        }
    ];

    const updateProjectDisplay = (index) => {
        const data = projectsData[index];
        if (!data) return;

        projectItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        if (displayUrl) displayUrl.textContent = data.url;
        if (displayCategory) displayCategory.textContent = data.category;
        if (displayTitle) displayTitle.textContent = data.title;
        if (displayDesc) displayDesc.textContent = data.desc;
        if (displayStat1Val) displayStat1Val.textContent = data.stat1Val;
        if (displayStat1Lbl) displayStat1Lbl.textContent = data.stat1Lbl;
        if (displayStat2Val) displayStat2Val.textContent = data.stat2Val;
        if (displayStat2Lbl) displayStat2Lbl.textContent = data.stat2Lbl;

        if (displayTags) {
            displayTags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
        }
    };

    projectItems.forEach((item, index) => {
        item.addEventListener('click', () => updateProjectDisplay(index));
        item.addEventListener('mouseenter', () => updateProjectDisplay(index));
    });

    // 3. Procédé Card Interactive Toggles (Basique / Pro / Sur Mesure)
    const toggleOpts = document.querySelectorAll('.mock-toggle-bar .toggle-opt');
    toggleOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            toggleOpts.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });

    // 4. Realtime Footer Clock (GMT / Lomé Time)
    const clockEl = document.getElementById('footer-clock');
    const updateClock = () => {
        if (!clockEl) return;
        const now = new Date();
        const timeStr = now.toLocaleTimeString('fr-FR', { timeZone: 'GMT', hour12: false });
        clockEl.textContent = `Lomé, Togo • ${timeStr} GMT`;
    };
    setInterval(updateClock, 1000);
    updateClock();

    // Custom UI Toast Notification System
    function showNotification(title, message, type = 'success') {
        let toast = document.getElementById('custom-toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'custom-toast-notification';
            toast.className = 'custom-toast-container';
            document.body.appendChild(toast);
        }

        const isSuccess = type === 'success';
        const iconHtml = isSuccess ? '✨' : '⚠️';

        toast.innerHTML = `
            <div class="toast-card ${type}">
                <div class="toast-icon-bubble">${iconHtml}</div>
                <div class="toast-body">
                    <h4>${title}</h4>
                    <p>${message}</p>
                </div>
                <button type="button" class="toast-close" aria-label="Fermer" onclick="document.getElementById('custom-toast-notification').classList.remove('show')">&times;</button>
            </div>
        `;

        setTimeout(() => toast.classList.add('show'), 50);

        setTimeout(() => {
            if (toast) toast.classList.remove('show');
        }, 8000);
    }

    // 5. Contact Form Handler with smooth UI notification
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';

            const formData = new FormData(contactForm);
            const accessKey = formData.get('access_key');
            const clientName = formData.get('name') || 'Client';
            const clientEmail = formData.get('email') || 'votre email';

            if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
                try {
                    const res = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData
                    });
                    const result = await res.json();
                    if (result.success) {
                        showNotification(
                            `Demande transmise avec succès !`,
                            `Merci ${clientName} ! Votre message a bien été envoyé à l'équipe StravexAI. Nous vous recontacterons sous 24h à l'adresse ${clientEmail}.`,
                            'success'
                        );
                        contactForm.reset();
                    } else {
                        showNotification(
                            'Erreur d\'envoi',
                            'Une erreur est survenue lors de l\'envoi. Vous pouvez nous contacter directement sur stravexagency@gmail.com ou via WhatsApp.',
                            'error'
                        );
                    }
                } catch (err) {
                    showNotification(
                        'Erreur réseau',
                        'Problème de connexion. Veuillez écrire directement à stravexagency@gmail.com ou sur WhatsApp (+228 79 41 70 76).',
                        'error'
                    );
                }
            } else {
                showNotification(
                    `Merci ${clientName} !`,
                    `Votre demande a été enregistrée avec succès ! Notre équipe analysera votre projet et vous répondra très rapidement sur ${clientEmail}.`,
                    'success'
                );
                contactForm.reset();
            }

            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    }

    // 6. Smooth Scroll to #contact for all Contact CTA buttons
    const contactBtns = document.querySelectorAll('.open-contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                e.preventDefault();
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 7. Scroll Reveal Animations Observer (ChatflowAI Style)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.section-header, .glass-card, .procede-card, .service-col-card, .project-item, .project-preview-display, .why-item-card, .why-visual-box, .contact-main-card'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
});
