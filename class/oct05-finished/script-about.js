const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const slide = (nextIndex) => {
    const currentImage = document.querySelector(
        "#preview :not(.hidden)"
    );

    let nextImage = document.querySelector(`#preview :nth-child(${nextIndex}`);
    performSlide(currentImage, nextImage);

};

const performSlide = (currentImage, nextImage) => {
    currentImage.classList.add("slideHide");
    nextImage.classList.add("slideShow");

    currentImage.addEventListener("animationend", () => {
        currentImage.classList.add("hidden");
        currentImage.classList.remove("slideHide");
    });

    nextImage.addEventListener("animationend", () => {
        nextImage.classList.remove("hidden");
        nextImage.classList.remove("slideShow");
    });
}

const slideForward = () => {
    const currentImage = document.querySelector(
        "#preview :not(.hidden)"
    );
    let nextImage = currentImage.nextElementSibling;

    if (nextImage == null) {
        nextImage = document.querySelector("#preview :first-child");
    }

    performSlide(currentImage, nextImage);
}

const slideBackward = () => {
    const currentImage = document.querySelector(
        "#preview :not(.hidden)"
    );
    let nextImage = currentImage.previousElementSibling;

    if (nextImage == null) {
        nextImage = document.querySelector("#preview :last-child");
    }

    performSlide(currentImage, nextImage);
}

window.onload = () => {
    document.querySelectorAll("#thumbs img").forEach((thumb, index) => {
        thumb.onclick = () => {
            slide(index + 1);
        }
    });

    document.getElementById("forward-arrow").onclick = slideForward;
    document.getElementById("backward-arrow").onclick = slideBackward;

};