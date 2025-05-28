document.getElementById("right-arrow").onclick = (e) => {
    e.preventDefault(); //prevent going to links destination
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    //if we got to the end of the slideshow
    if(nextSlide == null){
        nextSlide = document.querySelector("#slides :first-child");
    }

    switchSlides(currentSlide, nextSlide);
};

const getCurrentSlide = () => {
    return document.querySelector("#slides :not(hidden)");
}

const switchSlides = (currentSlide, nextSlide) => {

}