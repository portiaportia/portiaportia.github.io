//when the right arrow is clicked switch which image is showing
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null){
        nextSlide = document.querySelector("#slides :first-child");
    }

    slide(currentSlide, nextSlide);
};

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
};