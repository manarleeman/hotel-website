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
// Features Section Data and Rendering
const FEATURES_DATA = [
    {
        image: "assert/card.png",
        alt: "payment methods",
        title: "Payment Method",
        description: "We offer a wide range of payment methods, from cryptocurrencies to traditional options."
    },
    {
        image: "assert/search-process.png",
        alt: "simple search",
        title: "Simple Search Process", 
        description: "We checked it out, even the kid did it, but it was my mom's friend's son."
    },
    {
        image: "assert/support.svg",
        alt: "customer support",
        title: "24/7 Support",
        description: "Is there something you don't understand? Feel free to call us. Phone number in the footer."
    },
    {
        image: "assert/friendly.svg",
        alt: "friendly service",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here."
    }
];
function loadFeatureCards() {
    const container = document.querySelector("#features-container");
    if (!container) return;

    let htmlContent = "";
    
    for (const feature of FEATURES_DATA) {
        htmlContent += createFeatureCard(feature);
    }
    
    container.innerHTML = htmlContent;
}

function createFeatureCard(feature) {
    return `
        <div class="feature-card">
            <img src="${feature.image}" alt="${feature.alt}" />
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `;
}
