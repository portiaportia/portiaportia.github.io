document.getElementById("arrow-next").onclick = (e) => {
    e.preventDefault();
    const currentImage = document.querySelector("#slideshow img:not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    if(nextImage == null){
        nextImage = document.querySelector("#slideshow img:first-child");
    }
    
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};