document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    // We will build out a full mobile menu later if needed
    mobileBtn.addEventListener('click', () => {
        const spans = mobileBtn.querySelectorAll('span');
        spans.forEach(span => span.style.background = 'var(--primary-color)');
        setTimeout(() => {
            spans.forEach(span => span.style.background = 'var(--text-primary)');
        }, 300);
    });

    // Add parallax effect to hero visual
    const heroVisual = document.querySelector('.hero-visual');
    const heroImage = document.querySelector('.hero-image');

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 992) return;

        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

        heroImage.style.transform = `scale(1.05) translate(${xAxis}px, ${yAxis}px)`;
    });

    // Scroll Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: stop observing once revealed
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
