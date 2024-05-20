const slide = (nextImage) => {
    const currentImage = document.querySelector("#preview :not(.hidden)");

    //hide the currently showing image
    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");

}

document.querySelectorAll("#thumbs img").forEach((thumb, index)=>{
    thumb.onclick = () => {
        console.log(index);
        const nextImage = document.querySelector("#preview :nth-child(2)");
        slide(nextImage);
    };
});