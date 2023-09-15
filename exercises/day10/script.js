var width = 100;

const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const grow = () => {
  resize((width += 10));
};

const shrink = () => {
  resize((width -= 10));
};

const resize = (size) => {
  document.getElementById("square").style.setProperty("--x", size + "px");
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  document.getElementById("button-grow").onclick = grow;
  document.getElementById("button-shrink").onclick = shrink;
};
