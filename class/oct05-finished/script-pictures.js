window.onload = () => {
  const modal = document.getElementById("modal-background");
  const dialog = document.querySelector(".dialog");

  document.querySelectorAll(".items img").forEach((img) => {
    img.onclick = () => {
      const src = img.getAttribute("data-large-src");
      modal.style.display = "block";
      dialog.classList.add("dialog-show");
      dialog.addEventListener("animationend", () => {
        currentImage.classList.remove("dialog-show");
      });

      const modalImage = document.querySelector(
        "#modal-background .dialog img"
      );
      modalImage.src = src;
    };
  });

  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
    dialog.style.opacity = 0;
  };

  window.onclick = (event) => {
    console.log(event.target);
    if (event.target == modal) {
      modal.style.display = "none";
      dialog.STYLE.opacity = 0;
    }
  };
};
