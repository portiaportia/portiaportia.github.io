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

/* Color Mood Message Generator */
document.getElementById("txt-color").onkeyup = e => {
    //const color = document.getElementById("txt-color").value;
    //console.log(color);

    const color = e.currentTarget.value.toLowerCase();
    const messageP = document.getElementById("color-message");

    if(color == "red"){
        messageP.innerHTML = "You are angry!";
        messageP.style.color = "red";
    } 
    else if(color == "blue") {
        messageP.innerHTML = "You are moody";
        messageP.style.color = "blue";
    }
    else {
        messageP.innerHTML = "We don't know what you are"
        messageP.style.color = "black";
    }

}