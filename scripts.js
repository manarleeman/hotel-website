// DOM Content Loaded Event Handler
document.addEventListener("DOMContentLoaded", function() {
    initializeNavigation();
    loadFeatureCards();
    loadSpecialOffers();
    loadTestimonials();
    loadBlogPosts();
});

// Navigation Menu Functionality
function initializeNavigation() {
    const menuToggle = document.querySelector("#menu-toggle");
    const menuClose = document.querySelector("#menu-close");
    const mobileNav = document.querySelector("#mobile-navigation");

    if (menuToggle && menuClose && mobileNav) {
        menuToggle.addEventListener("click", () => toggleMobileMenu(true));
        menuClose.addEventListener("click", () => toggleMobileMenu(false));
    }
}

function toggleMobileMenu(isOpen) {
    const menuToggle = document.querySelector("#menu-toggle");
    const menuClose = document.querySelector("#menu-close");
    const mobileNav = document.querySelector("#mobile-navigation");

    if (isOpen) {
        mobileNav.classList.remove("is-hidden");
        menuClose.classList.remove("is-hidden");
        menuToggle.classList.add("is-hidden");
    } else {
        mobileNav.classList.add("is-hidden");
        menuClose.classList.add("is-hidden");
        menuToggle.classList.remove("is-hidden");
    }
}