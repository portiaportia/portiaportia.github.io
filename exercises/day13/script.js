const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const slide = () => {
  const currentImage = document.querySelector("#slideshow :not(.hidden)");
  currentImage.classList.add("hidden");

  let nextImage = currentImage.nextElementSibling;

  if (nextImage == null) {
    nextImage = document.querySelector("#slideshow :first-child");
  }

  nextImage.classList.remove("hidden");
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  setInterval(slide, 2000);
};
