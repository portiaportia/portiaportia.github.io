document.querySelectorAll(".items section").forEach((section)=>{
    section.onclick = () => {
        const dialog = document.getElementById("dialog");
        dialog.style.display = "block";

        const imageSource = section.querySelector("img").src;
        dialog.querySelector("img").src = imageSource;

        const dialogDetails = document.getElementById("dialog-details");
        dialogDetails.innerHTML = "";

        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;
        dialogDetails.append(h3);

        const p = document.createElement("p");
        p.innerHTML = section.querySelector("p").innerHTML;
        dialogDetails.append(p);
    }
});

document.getElementById("dialog-x").onclick = () => {
    dialog.style.display = "none";
}