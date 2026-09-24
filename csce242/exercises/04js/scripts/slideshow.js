//when the right arrow is clicked switch which image is showing
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    console.log(currentSlide);
    
};