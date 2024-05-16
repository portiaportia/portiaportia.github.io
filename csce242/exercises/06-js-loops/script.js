//toggling the navigation bar
document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

/* Let's do the theremoter thing */
document.getElementById("btn-funds").onclick = () => {
    const funds = document.getElementById('txt-funds').value;
    const errorFunds = document.getElementById("error-funds");
    errorFunds.innerHTML = "";  //clearing out previously shown errors
    let percent = "0%";
    const goal = 10000;

    if(isNaN(funds)){
        errorFunds.innerHTML = "* Not a number";
    } 
    else if(funds < 0){
        errorFunds.innerHTML = "* Number needs to be >= 0";
    }
    else {
        percent = (funds / goal * 100) + "%";
    }

    document.querySelector(":root").style.setProperty("--funds", percent);
}

//loops
document.getElementById("btn-loops").onclick = () => {
    const result = document.getElementById("loops-result");

    for(let i=0; i < 10; i++){
        const p = document.createElement("p");
        p.innerHTML = i+1;
        result.append(p);
    }
}