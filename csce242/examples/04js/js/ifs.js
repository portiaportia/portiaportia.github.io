document.getElementById("btn-color-mood").onclick = (event) => {
    const color = document.getElementById("txt-color").value;
    const colorP = document.getElementById("color-mood");

    colorP.innerHTML = color;
}