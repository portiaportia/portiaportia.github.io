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

//plant health
document.getElementById("txt-num-days").onchange = (e) => {
    const numEntered = parseInt(e.currentTarget.value);
    const p = document.getElementById("p-plant-message");
    
    if(numEntered <=0) {
        p.innerHTML = "Yay! We were fed today!";
    } else if(numEntered <= 2) {
        p.innerHTML = "I'm getting a little thirsty";
    } else if(numEntered <=5) {
        p.innerHTML = "I'm starting to wilt";
    } else {
        p.innerHTML = "You killed me :(";
    }
};

const p =document.getElementById("p-count-display");
let count = 0;
let countInterval;
const startButton = document.getElementById("btn-start-count");

startButton.onclick = () => {
    countInterval = setInterval(()=>{
        startButton.disabled = true;
        p.innerHTML = count++;
    },500);
};

document.getElementById("btn-pause-count").onclick = () => {
    startButton.disabled = false;
    clearInterval(countInterval);
};

document.getElementById("btn-stop-count").onclick = () => {
    startButton.disabled = false;
    count = 0;
    clearInterval(countInterval);
};

/* Display the date */
setInterval(()=>{
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hours = today.getHours();

    document.getElementById("p-date").innerHTML = `${hours}:${minutes}:${seconds}, ${month}/${day}/${year}`;
}, 500);

/* Donations */
document.getElementById("btn-display-donation").onclick = () => {
    const errorP = document.getElementById("p-donation-error");
    errorP.innerHTML = "";  //if you click the button twice

    const donationText = document.getElementById("txt-donation").value;

    if(isNaN(donationText) || donationText < 0){
        errorP.innerHTML = "* Invalid amount";
        return;
    }

    donation = parseInt(donationText);
    const percentGoal = donation/5000 * 100;

    document.getElementById("p-donation").innerHTML = `You've reached ${percentGoal}% of your goal.`

    document.querySelector(":root").style.setProperty("--donation",percentGoal + "%");
}