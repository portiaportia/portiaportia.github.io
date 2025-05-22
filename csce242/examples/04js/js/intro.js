/* When button clicked write to a paragraph */

/*
const writeParagraph = () => {
    console.log("Hello Everyone!");
};

document.getElementById("btn-write").onclick = writeParagraph;
*/
/*
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    document.getElementById("btn-write").innerHTML = "done!";
};
*/

document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    event.target.innerHTML = "done";
};

document.getElementById("btn-start").onclick = (event) => {
    event.target.innerHTML = "Started";
    document.getElementById("startstopp").innerHTML += "<strong>Starting</strong>";
}

document.getElementById("btn-end").onclick = (event) => {
    event.target.innerHTML = "Ended";
    document.getElementById("startstopp").innerHTML += "Ending";
}

document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcomep").innerHTML = `Welcome ${userName}!`;
}

/* Change happy and sad pictures */
document.getElementById("btn-happy").onclick = () => {
    const moodImage = document.getElementById("image-mood");
    moodImage.src="images/happy.jpg";
    moodImage.classList.remove("hidden");
};

