document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var links = document.querySelectorAll('.case-filter-main a, .case-pagination a');
    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});



let slideIndex = 0;
const slides = document.querySelectorAll(".cl-card-slider");
const sliderContainer = document.querySelector(".items-slider-cl");
const dotsContainer = document.querySelector(".show-current-item-slider");

// Function to create dots
function createDots() {
    // Clear existing dots
    dotsContainer.innerHTML = '';

    // Create a dot for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.onclick = () => currentSlide(index + 1);
        dotsContainer.appendChild(dot);
    });
}

// Function to show a slide
function showSlide() {
    if (slides.length === 0) return; // Check if there are slides

    // Wrap slideIndex
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Move slides
    const offset = -slideIndex * 100;
    sliderContainer.style.transition = 'transform 0.5s ease';
    sliderContainer.style.transform = `translateX(${offset}%)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll("span");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

// Function to go to the next slide
function nextSlide() {
    slideIndex++;
    showSlide();
}

// Function to go to the previous slide
function prevSlide() {
    slideIndex--;
    showSlide();
}

// Function to show a specific slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlide();
}

// Initialize the slider and dots
createDots();
showSlide();

