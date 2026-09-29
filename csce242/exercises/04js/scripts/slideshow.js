//when the right arrow is clicked switch which image is showing
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null){
        nextSlide = document.querySelector("#slides :first-child");
    }

    slide(currentSlide, nextSlide);
};

const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)");
}

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
};