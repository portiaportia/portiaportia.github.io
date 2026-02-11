/* Counter */
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");
const btnStartCount = document.getElementById("btn-count-start");
const btnPauseCount = document.getElementById("btn-count-pause")
btnPauseCount.disabled = true;

btnStartCount.onclick = () => {
    btnStartCount.disabled = true;
    btnPauseCount.disabled = false;
    counterInterval = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
}

btnPauseCount.onclick = () => {
    clearInterval(counterInterval);
    btnPauseCount.disabled = true;
    btnStartCount.disabled = false;
}

/* Donation stuff */
const goal = 10000;
let totalDonations = 0;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";
    const donationMessage = document.getElementById("donation-message");
    donationMessage.innerHTML = "";

    if(isNaN(donation) || donation <= 0){
        errorSpan.innerHTML = "* Invalid Amount."
        return;
    }

    totalDonations += parseInt(donation);
    const donationPercent = totalDonations / goal * 100;

    if(donationPercent >= 100){
        donationMessage.innerHTML = "Goal Reached!";
    } else if(donationPercent >= 50) {
        donationMessage.innerHTML = "Over Half Way There";
    } else {
        donationMessage.innerHTML = "Let's get Goaling";
    }

    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}