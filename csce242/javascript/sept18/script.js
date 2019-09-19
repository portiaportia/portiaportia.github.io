"using strict"

function displayFruits(){
    //gather fruit names
    const fruit1 = document.getElementById("fruit1").value;
    const fruit2 = document.getElementById("fruit2").value;
    const fruit3 = document.getElementById("fruit3").value;

    //write to result paragraph
    const resultElem = document.getElementById("result");
    resultElem.textContent = `You like ${fruit1}, ${fruit2}, and ${fruit3}`;
}

//get the button
const btnResult = document.getElementById("btn-results");
btnResult.onclick = displayFruits;

