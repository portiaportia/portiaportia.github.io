const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(.hidden)");

    //hide the currently showing image
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");

}

//slide forward
document.getElementById("forward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let nextImage = currentImage.nextElementSibling;

    //if we get to the end of the list
    if(nextImage == null){
        nextImage = document.querySelector("#preview :first-child");
    }

    slide(nextImage);
};

//slide backward
document.getElementById("backward-arrow").onclick = () => {
    const currentImage = document.querySelector("#preview :not(.hidden)");
    let nextImage = currentImage.previousElementSibling;

    //if we get to the end of the list
    if(nextImage == null){
        nextImage = document.querySelector("#preview :last-child");
    }

    slide(nextImage);
}

//slide to a clicked thumb
document.querySelectorAll("#thumbs img").forEach((thumb, index)=>{
    thumb.onclick = () => {
        const nextImage = document.querySelector(`#preview :nth-child(${index+1})`);
        slide(nextImage);
    };
});