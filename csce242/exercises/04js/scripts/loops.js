//first loop example
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");

    for(let i = 0; i < 10; i++){
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
        p.classList.add("special");
        p.onclick = () => {
            console.log(`You clicked the ${i}'th element`);
        };
    }
/*
     for(let i = 0; i < 10; i++){
        loopResult.innerHTML += `<p>${i+1}</p>`;
    }*/
};

//looping through a range
document.getElementById("btn-loop-range").onclick = () => {
    const startText = document.getElementById("txt-start");
    const endText = document.getElementById("txt-end");
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");

    if(isNaN(startText) || startText < 0 || startText > 5){
        errorStart.innerHTML = "* Invalid";
        errorStart.classList.remove("hidden");
    }

    if(isNaN(endText) || endText < 10 || endText > 20 || endText < startText){
        errorEnd.innerHTML = "* Invalid";
        errorEnd.classList.remove("hidden");
    }
};