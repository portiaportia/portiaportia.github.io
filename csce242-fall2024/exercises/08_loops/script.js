/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("btn-loop").onclick = () => {
  const startNum = parseInt(document.getElementById("txt-first-num").value);
  const endNum = parseInt(document.getElementById("txt-last-num").value);
  const ul = document.getElementById("numbers");


  console.log(`counting from ${startNum} to ${endNum}`);

  for(let i = 0; i < 10; i++){
    const li = document.createElement("li");
    li.innerHTML = i+1;
    ul.append(li);
    li.setAttribute("id", "li" + i);

    li.onclick = () => {
      console.log(`Lucky number ${i+1}`);
    };
  }
}

