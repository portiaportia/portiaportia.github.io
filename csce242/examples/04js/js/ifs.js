document.getElementById("btn-color-mood").onclick = (event) => {
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    const colorP = document.getElementById("color-mood");

    if(color == "red"){
        colorP.innerHTML = "You are feeling angry";
    } else if(color == "blue") {
        colorP.innerHTML = "You are feeling sad";
    } else {
        colorP.innerHTML = "You don't have feelings";
    } 
}

document.getElementById("btn-start-anim").onclick = () => {
    document.getElementById("circle").classList.add('bounce');
}