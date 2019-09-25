"using strict"
function showGiftMessage(){
    let resultElem = document.getElementById("result");
    let present = document.getElementById("txt-present").value;
    present = present.toLowerCase().trim();

    // if(present === "doll"){
    //     resultElem.innerHTML = "I love dolls";
    // }
    // else {
    //     resultElem.innerHTML = "Not a good gift";
    // }

    switch(present){
        case "doll":
            resultElem.innerHTML = "I love dolls";
            break;
        case "car":
            resultElem.innerHTML = "I love cars";
            break;
        default:
            resultElem.innerHTML = "I <strong>don't</strong> love this";
    }
    
}


//html and css loaded to the page
window.onload = function(){
    const btnDisplay = document.getElementById("btn-display");
    btnDisplay.onclick = this.showGiftMessage;
}  
