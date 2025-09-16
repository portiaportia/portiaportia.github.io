/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");   //current target is the button that was clicked
};

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
}

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("btn-clear").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hidden");
};

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-result");
    p.innerHTML = "";   //reset paragraph
    const error = document.getElementById("error-color");
    error.innerHTML = "";  //reset error
    let mood = "";
    
    if(color == ""){
        error.innerHTML = "* blank";
        return;
    }

    if(color == "red") {
        mood = "angry";
    } else if(color == "yellow") {
        mood = "mellow";
    }

    if(mood == ""){
        error.innerHTML = "* Invalid color";
        return;
    }

    p.innerHTML = `You choose ${color}, so you are feeling ${mood}`;
}

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");

    if(ball.classList.contains("bounce")){
        event.currentTarget.innerHTML = "Start";
    } else {
        event.currentTarget.innerHTML = "Stop";
    }

    ball.classList.toggle("bounce");
}