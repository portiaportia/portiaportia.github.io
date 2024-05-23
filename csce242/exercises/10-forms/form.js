const getTermsText = (termsChecked) => {
    if(!termsChecked){
        return "You didn't agree to the terms";
    } else {
        return "You agreed to the terms";
    }
}

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }
    return "";
}

document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault(); //don't go to the action page
    
    const form = e.target;
    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    
    console.log(`${raccoonName} is ${demeanor}, size: ${getRadioValue("size")} ${getTermsText(termsChecked)}`)
}