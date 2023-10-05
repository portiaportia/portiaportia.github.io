const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

let count = 1;

const slide = () => {
    const currentImage = document.querySelector(
        `#slideshow :nth-child(${count})`
    );
    count++;

    let nextImage = currentImage.nextElementSibling;

    if (nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child");
        count = 1;
    }

    currentImage.classList.add("slideHide");
    nextImage.classList.add("slideShow");

    currentImage.addEventListener("animationend", () => {
        currentImage.classList.add("hidden");
        currentImage.classList.remove("slideHide");
    });

    nextImage.addEventListener("animationend", () => {
        nextImage.classList.remove("hidden");
        nextImage.classList.remove("slideShow");
    })
};

window.onload = () => {
    setInterval(slide, 1000);
};