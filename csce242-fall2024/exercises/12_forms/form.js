document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault(); //don't go to the action.... don't refresh the page
    
    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");

    console.log(`${raccoonName} is ${size} sized and has a ${demeanor} demeanor`);
};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";
};