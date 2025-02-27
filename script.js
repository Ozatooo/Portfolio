document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-animate]");
    function checkPosition() {
        const triggerBottom = window.innerHeight * 0.9;
        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("opacity-100");
                el.classList.add("translate-x-0");
                el.classList.remove("translate-x-20", "-translate-x-20");
            }
        });
    }
    window.addEventListener("scroll", checkPosition);
    checkPosition();
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[data-animate]");
    const bars = document.querySelectorAll(".progress-bar");

    function animateSection(section) {
        section.classList.add("visible");
        let fadeElements = section.querySelectorAll(".fadeInDelay");
        fadeElements.forEach(element => {
            element.classList.add("animate-fadeInDelay");
        });
        let zoomInElements = section.querySelectorAll(".zoomIn");
        zoomInElements.forEach(element => {
            element.classList.add("animate-zoomIn");
        });
    }

    function animateProgressBars() {
        bars.forEach(bar => {
            let percentage = bar.getAttribute("data-percentage");
            bar.style.width = percentage + "%";
        });
    }

    sections.forEach(section => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSection(entry.target);

                    if (entry.target.id === "skills") {
                        animateProgressBars();
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector("nav");
    const menuBtn = document.getElementById("menu-btn");
    const menuElements = document.querySelectorAll(".menu-element");
    const closeMenuBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll(".menu-link");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add("-translate-y-full");
        } else {
            navbar.classList.remove("-translate-y-full");
        }
        lastScrollTop = scrollTop;
    });

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("-translate-y-full");
        mobileMenu.classList.add("translate-y-0");
        menuElements.forEach(element => {
            element.classList.remove("hidden");
        });
    });

    closeMenuBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("translate-y-0");
        mobileMenu.classList.add("-translate-y-full");
        menuElements.forEach(element => {
            element.classList.add("hidden");
        });
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("translate-y-0");
            mobileMenu.classList.add("-translate-y-full");
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();