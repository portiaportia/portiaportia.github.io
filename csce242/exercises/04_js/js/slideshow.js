setInterval(()=>{
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null){
        nextSlide = document.querySelector("#slideshow :first-child");
    }
    
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
},3000);