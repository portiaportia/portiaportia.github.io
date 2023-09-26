const toggleNav = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleNav;
};
