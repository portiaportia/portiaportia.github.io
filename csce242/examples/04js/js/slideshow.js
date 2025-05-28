setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    //reached the end
    if(nextSlide == null) {
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    //make current one hidden and next one show
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}, 1000);