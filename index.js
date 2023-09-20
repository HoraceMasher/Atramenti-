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
