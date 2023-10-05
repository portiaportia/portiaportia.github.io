window.onload = () => {
  const modal = document.getElementById("modal-background");

  document.querySelectorAll(".items img").forEach((img) => {
    img.onclick = () => {
      const src = img.getAttribute("data-large-src");
      modal.style.display = "block";
      const modalImage = document.querySelector(
        "#modal-background .dialog img"
      );
      modalImage.src = src;
    };
  });

  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    console.log(event.target);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
