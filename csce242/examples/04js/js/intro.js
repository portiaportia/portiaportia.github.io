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
    document.getElementById("startstopp").innerHTML = "Starting";
}

document.getElementById("btn-end").onclick = (event) => {
    event.target.innerHTML = "Ended";
    document.getElementById("startstopp").innerHTML = "Ending";
}

