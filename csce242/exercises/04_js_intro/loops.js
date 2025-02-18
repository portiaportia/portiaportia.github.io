document.getElementById("btn-display").onclick = () => {
    const startNum = document.getElementById("txt-start").value;
    const endNum = document.getElementById("txt-end").value;
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }
}