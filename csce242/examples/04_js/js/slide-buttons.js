document.getElementById("arrow-prev").onclick = (event) =>{
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let prevSlide = currentSlide.previousElementSibling;

    if(!prevSlide){
        prevSlide = document.querySelector("#slideshow :last-child");
    }

    currentSlide.classList.add("hidden");
    prevSlide.classList.remove("hidden");
};

document.getElementById("arrow-next").onclick = (event) => {
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide) {
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}