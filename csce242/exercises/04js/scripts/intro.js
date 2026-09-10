//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}