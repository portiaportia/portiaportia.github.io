const toggleNav = () => {
  document.getElementById("main-nav-items").classList.toggle("hidden");
};

const loopItUp = () => {
  let firstNumber = parseInt(document.getElementById("first-num").value);
  let lastNumber = parseInt(document.getElementById("last-num").value);

  let resultUL = document.getElementById("result");
  resultUL.innerHTML = "";

  for (let i = firstNumber; i <= lastNumber; i++) {
    const liElem = document.createElement("li");
    liElem.textContent = i;
    resultUL.append(liElem);
  }
};

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
  document.getElementById("button-loops").onclick = loopItUp;
};
