//do stuff when button clicked
document.getElementById("btn-click-me").onclick = () => {
    console.log("WOW!");
    document.getElementById("result").innerHTML="Hi Portia";
};

//change color
document.getElementById("btn-color").onclick = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Good bye";
    messageP.classList.toggle("sad");

}

//happy script
document.getElementById("btn-happy").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("happy");
    displayP.innerHTML = "Good Times";
};

//sad script
document.getElementById("btn-sad").onclick = () => {
    const displayP = document.getElementById("display");
    displayP.classList.remove("hidden");
    displayP.classList.add("sad");
    displayP.innerHTML = "Sad TImes";
};

document.getElementById("btn-clear").onclick = () => {
    document.getElementById("display").classList.add("hidden");
};

//key down
document.getElementById("txt-emotion").onkeyup = (event) => {
    //const emotion = document.getElementById("txt-emotion").value;
    document.getElementById("emotional-message").innerHTML = 
    "You are feeling " + event.currentTarget.value;
}

//toggling the nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

//show color message 
document.getElementById("btn-choose-color").onclick = () => {
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    let mood = "";

    if(color == "blue"){
        mood = "grumpy";
    } 
    else if(color == "yellow"){
        mood = "mellow";
    }
    else {
        mood = "undefined";
    }

    
    document.getElementById("color-message").innerHTML = 
    `You chose ${color}. You are feeling ${mood}.`
};

/* moving the circle */
let pos = 0;
const changeCirclePos = (increment) => {
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () => {
    changeCirclePos(10);
}

document.getElementById("btn-up").onclick = () => {
    changeCirclePos(-10);
}

document.getElementById("btn-pick-color").onchange = (event) => {
    const color = event.currentTarget.value;
    //document.getElementById("circle").style.setProperty("background", color);
    document.getElementById("circle").style.setProperty("--circle-color", color);
}

/* Donations thermometer */
const GOAL = 1000;
let donations = 0;

document.getElementById("goal-display").innerHTML = `Goal $${GOAL}`;

document.getElementById("btn-add-donation").onclick = () => {
    //validate donation amount
    const donation = document.getElementById("txt-donation").value;
    document.getElementById("donation-error").classList.add("hidden");

    if(isNaN(donation) ||donation <= 0){
        document.getElementById("donation-error").classList.remove("hidden");
        return;
    }

    //update donation
    donations += parseFloat(donation);
    donationPercent = donations / GOAL * 100;

    if(donations >= GOAL){
        document.getElementById("donation-message").innerHTML = `Goal Reached!`;
        donationPercent = 100;
    } else {
        //show donation message.
    document.getElementById("donation-message").innerHTML = `$${GOAL - donations} to go!`;
    }

    //update thermometer
    document.getElementById("thermometer").style.setProperty("--donation-percent", donationPercent + "%");
};