document.addEventListener("DOMContentLoaded", function () {
    // Find the next button element
    var nextButton = document.querySelector(".carousel-control-next");

    // Find the carousel element
    var carousel = document.querySelector("#carouselExampleControls");

    // Add a click event listener to the next button
    nextButton.addEventListener("click", function () {
        // Trigger the carousel to go to the next slide
        var carouselInstance = new bootstrap.Carousel(carousel);
        carouselInstance.next();
    });
});


    // Function to handle the intersection
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp");
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.2, // 20% of the target element must be visible
    });

    // Observe each element with the "statistic" class
    const statisticElements = document.querySelectorAll(".statistic");
    statisticElements.forEach((element) => {
        observer.observe(element);
    });
