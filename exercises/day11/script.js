const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const editHTML = () => {
  const h2 = document.querySelector("#food-title");
  h2.innerHTML = "Best Title Ever";
  const h3 = document.createElement("h3");
  h3.textContent = "my subtitle";
  h2.after(h3);

  //const foodLis = document.querySelectorAll("#fav-foods li");

  const foodUL = document.getElementById("fav-foods");
  const foodLis = foodUL.getElementsByTagName("li");

  for (let i = 0; i < foodLis.length; i++) {
    foodLis[i].innerHTML = "I &hearts; " + foodLis[i].innerHTML;
    setTimeout();
  }
};

const count = () => {
  let num = 0;
  let p = document.getElementById("counter");

  let interval = setInterval(() => {
    num += 1;
    p.innerHTML = num;
    if (num >= 10) {
      clearInterval(interval);
    }
  }, 1000);
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  document.getElementById("button-foods").onclick = editHTML;
  document.getElementById("button-count").onclick = count;
};
