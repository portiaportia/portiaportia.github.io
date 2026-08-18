//next arrow
document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#slideshow img:first-child");
    }
    
    slide(currentImage, nextImage);
};

//prev arrow
document.getElementById("arrow-prev").onclick = (e) => {
    e.preventDefault();
    const currentImage = getCurrentSlide();
    let prevImage = currentImage.previousElementSibling;

    if(prevImage == null){
        prevImage = document.querySelector("#slideshow img:last-child");
    }
    
    slide(currentImage, prevImage);
};

//get current image
const getCurrentSlide = () => {
    return document.querySelector("#slideshow img:not(.hidden)");
};

//slide
const slide =(current, next) => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
};