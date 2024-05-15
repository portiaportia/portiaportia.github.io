//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

const moveBall = () => {
    const root = document.querySelector(":root");
    root.style.setProperty("--ball-left", ballLeft + "px");
    root.style.setProperty("--ball-top", ballTop + "px");
}

//moving to the right
let ballLeft = 0;
let ballTop = 0;
document.getElementById("right-arrow").onclick = () => {
    ballLeft += 10;
    moveBall();
}

document.getElementById("left-arrow").onclick = () => {
    ballLeft -= 10;
    moveBall();
}

document.getElementById("top-arrow").onclick = () => {
    ballTop -= 10;
    moveBall();
}

document.getElementById("bottom-arrow").onclick = () => {
    ballTop += 10;
    moveBall();
}