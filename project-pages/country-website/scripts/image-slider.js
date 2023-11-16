// Image slider functionality
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dot");
const contentSections = document.querySelectorAll(".content-section");

const autoSlideTimer = 13000;

// Increment / decrement slide
const nextSlide = (increment) => {
    showSlide(slideIdx += increment);
    resetAutoShowSlidesTimer();
}

// Slide nav dot slide selection
const selectSlide = (idx) => {
    showSlide(slideIdx = idx);
    resetAutoShowSlidesTimer();
}

// Reset autoShowSlides timer
const resetAutoShowSlidesTimer = () => {
    clearTimeout(autoShowSlidesTimeout);
    autoShowSlidesTimeout = setTimeout(autoShowSlides, autoSlideTimer);
}

// Display the slide article
const showSlide = (idx) => {
    if (idx > slides.length) {slideIdx = 1};
    if (idx < 1) {slideIdx = slides.length};
    
    slides.forEach(slide => {
        slide.style.display = "none";
    })
    navDots.forEach(dot => {
        dot.classList.remove("active-dot");
    })

    slides[slideIdx - 1].style.display = "flex";
    navDots[slideIdx - 1].classList.add("active-dot");
}

// Automatically cycle through slide articles
const autoShowSlides = () => {
    slides.forEach(slide => {
        slide.style.display = "none";
    })
    navDots.forEach(dot => {
        dot.classList.remove("active-dot");
    })

    slideIdx++;
    if (slideIdx > slides.length) {slideIdx = 1};

    slides[slideIdx - 1].style.display = "flex";
    navDots[slideIdx - 1].classList.add("active-dot");
    
    autoShowSlidesTimeout = setTimeout(autoShowSlides, autoSlideTimer);
}


// This function checks for the screen width 
// If the screen is larger than 62.5em (desktop layout media query), run the image slider code
// Else, change layour to mobile mode
const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 62.5 * 16;

    // Run desktop layout with image slider JavaScript code
    if (isLargeScreen) {
        slideIdx = 0;
        clearTimeout(autoShowSlidesTimeout);

        // Add blue background 
        contentSections.forEach(content => {
            content.classList.add("blue-background");
        })

        // Remove blue background from individual articles
        slides.forEach((slide) => {
            slide.classList.remove("blue-background");
        });

        showSlide(slideIdx);
        autoShowSlides();

    } else {    // Run mobile layout
        clearTimeout(autoShowSlidesTimeout);
        autoShowSlidesTimeout = null;

        // Remove blue background from the section
        contentSections.forEach((content) => {
            content.classList.remove("blue-background");
        })

        // Add blue background to odd indexed landmark-articles
        slides.forEach((slide, idx) => {
            slide.style.display = "block";

            if (idx % 2 === 0) {
                slide.classList.add("blue-background");
            } else {
                slide.classList.remove("blue-background");
            }
        });
    }
}

nextBtn.addEventListener("click", () => nextSlide(1));
previousBtn.addEventListener("click", () => nextSlide(-1));
navDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => selectSlide(idx+1));
})

let slideIdx;
let autoShowSlidesTimeout;

// Set initial display based on screen size
handleResize();

// Listen for window resize events
window.addEventListener("resize", handleResize);




// Keyboard tab and enter users
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Get the currently focused element
        const focusedElement = document.activeElement;

        // Check if the focused element is an anchor with the class 'slider-input'
        if (focusedElement.tagName === "A" && focusedElement.classList.contains("slider-input")) {
            // Trigger a click event
            focusedElement.click();
        }
    }
});