function highlightCell(event){
    if(!isTD(event))return;

    //highlight cell
    event.target.classList.add("highlight");
}

function unHighlightCell(event){
    if(!isTD(event))return;
    //highlight cell
    event.target.classList.remove("highlight");
}

function isTD(event){
    //for anything other than a table cell get out
    return (event.target.tagName.toLowerCase() == "td")
}

function showAnimals(){
    let animalTDs = document.querySelectorAll("#animal-table td");
    let p = document.createElement("p");
    this.after(p);

   for(let animalTD of animalTDs) {
        p.innerHTML += animalTD.innerHTML + ",  ";
   }
}

function stylePara(){
    //let p = document.querySelector(".special");
    let p = document.getElementsByClassName("special")[0];
    p.classList.toggle("highlight");
}

window.onload = function(){
    this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);
    this.document.getElementById("animal-table").addEventListener("mouseout", unHighlightCell);
    this.document.getElementById("btn-show").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click", stylePara);
    this.setInterval(stylePara,1000);
}