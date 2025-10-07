setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide){ //next slide == null
        nextSlide = document.querySelector("#slideshow :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
},1000);