//button click example
document.getElementById("btn-show-message").onclick = ()=>{
    document.getElementById("p-message").innerHTML = "Hi Portia";
};

//link click example
//e is the event (Clicking)
//e.currentTarget is the element the event was performed on (the link)
document.getElementById("a-click").onclick = (e) => {
    e.preventDefault(); //not go to the links destination
    e.currentTarget.innerHTML = "Clicked";
};

//start and stop the ball bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");

    if(e.currentTarget.innerHTML.toLowerCase() == "start") {
        e.currentTarget.innerHTML = "Stop";
        ball.classList.add("bounce");
    } else {
        e.currentTarget.innerHTML = "Start";
        ball.classList.remove("bounce");
    }
}