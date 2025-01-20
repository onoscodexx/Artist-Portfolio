// Initialize AOS
AOS.init();

// Navbar background toggle on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
    }
});

// Initialize Isotope for Filtering
const grid = document.querySelector('.portfolio-grid');
const iso = new Isotope(grid, {
    itemSelector: '.col-md-4',
    layoutMode: 'fitRows',
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const filterValue = e.target.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter-value");
        const speed = 200; // Adjust speed as needed

        const animateCounters = () => {
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const updateCount = () => {
                    const current = +counter.innerText;
                    const increment = Math.ceil(target / speed);

                    if (current < target) {
                        counter.innerText = current + increment;
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Trigger counters when in view
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect(); // Only run once
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(document.querySelector("#counter"));
    });
