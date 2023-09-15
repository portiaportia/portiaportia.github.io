const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const changeColors = () => {
  const root = document.querySelector(":root");
  root.style.setProperty("--primary", "red");
  root.style.setProperty("--primary", "blue");
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  document.getElementById("button-change-colors").onclick = changeColors;
};
