function showToys(){
    const toys = ["drum", "ball", "car", "bike"];
    let toysResult = document.getElementById("toys-result");
    toysResult.innerHTML = "";
    let ulElem = document.createElement("ul");
    toysResult.append(ulElem);

    //loop through and display as a ul, li list
    for(let i in toys){
        let liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);

        //highlight every other item
        if(i % 2){
            liElem.classList.add("highlight");
        }
    }
}

let color = "red";

function toggleToys() {
    let toysResult = document.getElementById("toys-result");
    toysResult.classList.toggle("hidden");
    toysResult.style.backgroundColor = color;

    if(color == "red" && !toysResult.classList.contains("hidden")){
        color = "green";
    }
    else if(color == "green" && !toysResult.classList.contains("hidden")){
        color = "red";
    }
}

showToys();

//make the toys toggle showing every 2 seconds
//document.getElementById("btn-show-toys").onclick = toggleToys;
setInterval(toggleToys, 2000);