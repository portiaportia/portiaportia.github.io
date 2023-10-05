const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(.hidden)");

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
}

const slideForward = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    if (nextImage == null) {
        nextImage = document.querySelector("#preview :first-child");
    }

    slide(nextImage);
}

const slideBackward = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let prevImage = currentImage.previousElementSibling;

    if (prevImage == null) {
        prevImage = document.querySelector("#preview :last-child");
    }
    slide(prevImage);
}

window.onload = () => {
    document.querySelectorAll("#thumbs img").forEach((thumb, index) => {
        thumb.onclick = () => {
            const nextImage = document.querySelector(`#preview :nth-child(${index+1})`);
            slide(nextImage);
        }
    });

    document.getElementById("forward-arrow").onclick = slideForward;
    document.getElementById("backward-arrow").onclick = slideBackward;
};