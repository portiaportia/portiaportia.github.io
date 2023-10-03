const toggleNav = () => {
  document.getElementById("nav-items").classList.toggle("hide-small");
};

const setupToyTable = () => {
  let toyTable = document.getElementById("toy-table");

  let toyList = [];
  toyList["doll"] = 9.54;
  toyList["drum"] = 12.99;

  for (let toy in toyList) {
    let tr = document.createElement("tr");
    toyTable.append(tr);

    let td1 = document.createElement("td");
    td1.innerHTML = toy;
    tr.append(td1);
    tr.onclick = () => {
      console.log(toyList[toy]);
    };
  }
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleNav;

  setupToyTable();
};
