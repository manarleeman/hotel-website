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
// Special Offers Data and Rendering
const OFFERS_DATA = [
    {
        image: "assert/wilderness_club.svg",
        alt: "2 bedroom lodge",
        title: "Wilderness Club at Big Cedar",
        dates: "28th October - 1st November",
        price: "$2016",
        duration: "6 days"
    },
    {
        image: "assert/wilderness_club2.png", 
        alt: "ocean view accommodation",
        title: "Ocean View Resort",
        dates: "15th November - 20th November",
        price: "$2500",
        duration: "5 days"
    },
    {
        image: "assert/wilderness_club3.png",
        alt: "mountain retreat",
        title: "Mountain Retreat", 
        dates: "5th December - 10th December",
        price: "$3000",
        duration: "5 days"
    }
];

function loadSpecialOffers() {
    const offersContainer = document.getElementById("offers-container");
    if (!offersContainer) return;

    const offersHTML = OFFERS_DATA.map(offer => buildOfferCard(offer)).join("");
    offersContainer.innerHTML = offersHTML;
}

function buildOfferCard(offer) {
    return `
        <div class="offer-card">
            <div class="offer-header">
                <img class="offer-image" src="${offer.image}" alt="${offer.alt}" />
                <div class="like-btn">
                    <img src="assert/like.svg" alt="favorite" />
                </div>
                <img class="rating-badge" src="assert/rating.svg" alt="rating" />
            </div>
            <div class="offer-details">
                <div class="offer-info">
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-date">${offer.dates}</p>
                </div>
                <div class="offer-pricing">
                    <p class="price-display">
                        <span class="price-amount">${offer.price}</span> /${offer.duration}
                    </p>
                </div>
            </div>
        </div>
    `;
}
// Testimonials Data and Rendering
const TESTIMONIALS_DATA = [
    {
        avatar: "assert/headshot.svg",
        alt: "customer photo",
        review: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        name: "Jannike Borge",
        occupation: "Publisher"
    },
    {
        avatar: "assert/lebron.svg", 
        alt: "customer photo",
        review: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        name: "LeBron Durant",
        occupation: "Flight attendant"
    },
    {
        avatar: "assert/piho-image.svg",
        alt: "customer photo", 
        review: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
        name: "Kaarel Piho",
        occupation: "Chiropodist"
    }
];

function loadTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials-container");
    if (!testimonialsContainer) return;

    let reviewsHTML = "";
    
    TESTIMONIALS_DATA.forEach(testimonial => {
        reviewsHTML += generateTestimonialCard(testimonial);
    });
    
    testimonialsContainer.innerHTML = reviewsHTML;
}

function generateTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <img src="${testimonial.avatar}" alt="${testimonial.alt}" />
            <div class="testimonial-content">
                <p class="testimonial-text">${testimonial.review}</p>
                <div class="testimonial-source">
                    <p class="testimonial-author">
                        <span class="author-name">${testimonial.name}</span>, ${testimonial.occupation}
                    </p>
                </div>
            </div>
        </div>
    `;
}
// Blog Posts Data and Rendering  
const BLOG_POSTS = [
    {
        image: "assert/trip-to-athlens.svg",
        alt: "Athens cityscape",
        publishDate: "May 23, 2022",
        readTime: "1 minute",
        title: "My trip to Athens",
        excerpt: "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already..."
    },
    {
        image: "assert/vilnius.svg",
        alt: "Vilnius landscape", 
        publishDate: "May 22, 2022",
        readTime: "1 minute",
        title: "Vilnius resorts",
        excerpt: "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs"
    },
    {
        image: "assert/tips-for-flying.svg",
        alt: "airplane illustration",
        publishDate: "May 20, 2022", 
        readTime: "15 minutes",
        title: "Tips for flying on a plane",
        excerpt: "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you"
    }
];

function loadBlogPosts() {
    const blogContainer = document.querySelector("#blog-container");
    if (!blogContainer) return;

    const postsHTML = BLOG_POSTS.map(post => renderBlogCard(post)).join("");
    blogContainer.innerHTML = postsHTML;
}

function renderBlogCard(post) {
    return `
        <article class="blog-card">
            <div class="blog-header">
                <img src="${post.image}" alt="${post.alt}" class="blog-image" />
                <div class="post-meta">
                    <span class="post-date">${post.publishDate}</span>
                    <div class="read-time">
                        <img src="assert/bx_time-five.svg" alt="clock icon" />
                        <span>${post.readTime}</span>
                    </div>
                </div>
            </div>
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        </article>
    `;
}
// Utility Functions
function createElement(tag, className, content = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
}