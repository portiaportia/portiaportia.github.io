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

document.getElementById("left-arrow").onclick = (e) => {
    e.preventDefault(); //prevent going to links destination
    const currentSlide = getCurrentSlide();
    let prevSlide = currentSlide.previousElementSibling;

    //if we got to the end of the slideshow
    if(prevSlide == null){
        prevSlide = document.querySelector("#slides :last-child");
    }

    switchSlides(currentSlide, prevSlide);
};

document.querySelectorAll("#thumbnails img").forEach((img, i)=>{
    img.onclick = () => {
        const currentSlide = getCurrentSlide();
        const nextSlide = document.querySelector(`#slides img:nth-child(${i+1})`);
        console.log(nextSlide);
        switchSlides(currentSlide, nextSlide);
    }
});


const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)");
}

const switchSlides = (currentSlide, nextSlide) => {
    console.log(currentSlide);
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}