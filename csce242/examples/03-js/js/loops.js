document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `I'm thie ${i+1} element`;
        ul.append(li);
    }
};

document.getElementById("btn-count-range").onclick = () => {
    const startNumber = parseInt(document.getElementById("txt-start").value);
    const endNumber = parseInt(document.getElementById("txt-end").value);
    const errorP = document.getElementById("error-range");
    errorP.innerHTML = "";
    const divNumRange = document.getElementById("number-range");

    if(startNumber > endNumber) {
        errorP.innerHTML = "Not a valid range";
        return;
    }

    for(let i = startNumber; i < endNumber + 1; i++){
        const p = document.createElement("p");
        p.innerHTML = i;
        divNumRange.append(p);
        p.onclick = () => {
            document.getElementById("number-message").innerHTML = 
                `You clicked the ${i}th item`;
        };
    }

};