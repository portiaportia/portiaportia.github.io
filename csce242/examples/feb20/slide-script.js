const slide = () => {
    //find the child of slideshow that doesn't contain the class of hidden
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    //on the last image
    if (nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
};

setInterval(slide, 1000);