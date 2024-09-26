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

  if(endNum >= startNum){
    for(let i = startNum; i <= endNum; i++){
      ul.append(createLi(i));
    }
  } else {
    for(let i = endNum; i >= startNum; i--){
      ul.append(createLi(i));
    }
  }
}

const createLi = (num) => {
  const li = document.createElement("li");
  li.innerHTML = num;
  li.setAttribute("id", "li" + num);

  li.onclick = () => {
    console.log(`Lucky number ${num}`);
  };

  return li;
}

