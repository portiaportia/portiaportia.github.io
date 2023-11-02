const imageBoxSetup = () => {
    const background = document.getElementById("modal-background");
    const dialog = document.querySelector(".dialog");

    document.querySelectorAll(".items img").forEach((img) => {
        img.onclick = () => {
            const largeSrc = img.getAttribute("data-large-src");
            document.querySelector(".dialog img").src = largeSrc;
            background.style.display = "block";
            dialog.classList.add("slideShow");

            dialog.addEventListener("animationend", () => {
                dialog.classList.remove("slideShow");
                dialog.style.opacity = 1;
            });
        };
    });

    document.querySelector(".close").onclick = () => {
        background.style.display = "none";
        dialog.style.opacity = 0;
    };

    window.onclick = (event) => {
        if (event.target == background) {
            background.style.display = "none";
            dialog.style.opacity = 0;
        }
    };
};

window.onload = () => {
    imageBoxSetup();
}