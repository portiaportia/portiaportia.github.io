document.getElementById("btn-basic-loop").onclick=() => {
    const loopsDiv = document.getElementById("basic-loops-list");
    
    for(let i=1; i <= 5; i++ ){
        const p = document.createElement("p");
        p.innerHTML = i;
        loopsDiv.append(p);
    }
};

//loop with input values
document.getElementById("btn-loop-input").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start-loop").value);
    const endNum = parseInt(document.getElementById("txt-end-loop").value);
    const loopList = document.getElementById("loop-list");

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        loopList.append(li);
    }
}

//interval
let count = 0;
let countInterval;
const displayCount = document.getElementById("dispaly-count");

document.getElementById("btn-start-count").onclick = () => {
    countInterval = setInterval(()=>{
        displayCount.innerHTML = count++;
    },300);
};

document.getElementById("btn-pause-count").onclick = () => {
    clearInterval(countInterval);
};

document.getElementById("btn-reset-count").onclick = () => {
    count = 0;
    displayCount.innerHTML = count;
};

/* Looping through a list */
document.getElementById("btn-eat").onclick = () => {
    document.querySelectorAll("#fruit-list li").forEach((li)=>{
        li.innerHTML = `I ate ${li.innerHTML}`;
    });
}

document.getElementById("btn-highlight").onclick = () => {
    document.querySelectorAll("#fruit-list li:nth-child(odd)").forEach((li)=>{
        li.classList.toggle("highlight");
    });
}

//weather buttons
document.querySelectorAll("#weather-buttons button").forEach((button)=>{
    button.onclick = () => {
        document.getElementById("weather-message").innerHTML =
        `I am a ${button.innerHTML}`;

        //remove highlight from all buttons
        document.querySelectorAll("#weather-buttons button").forEach((otherButton)=>{
            otherButton.classList.remove("highlight");
        });

        //add highlight to only the button you clicked
        button.classList.add("highlight");
    };
});