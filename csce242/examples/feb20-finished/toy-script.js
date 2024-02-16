let toys = ["drum", "ball", "rope", "balloon", "tire"];

const showToys = () => {
  let result = document.getElementById("result");
  result.innerHTML = ""; //clear

  for (let i in toys) {
    let p = document.createElement("p");
    p.innerHTML = toys[i];
    result.append(p);
  }
};

const addToy = () => {
  const toy = document.getElementById("txt-toy").value;
  toys.push(toy);
  showToys();
};

const showToyTable = () => {
  let toysPrice = [];
  toysPrice["barbie"] = 7.54;
  toysPrice["doll house"] = 86.23;
  toysPrice["slide"] = 8.57;
  toysPrice["ken"] = 2.3;
  toysPrice["bike"] = 5.6;

  //const toysTable = document.getElementById("toy-table"); //the same
  const toysTable = document.querySelector("#toy-table");

  for (let toy in toysPrice) {
    //toysTable.innerHTML += `<tr><td>${toy}</td></tr>`;  //first solution

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const text = document.createTextNode(toy);
    toysTable.append(tr);
    td.append(text);
    tr.append(td);

    tr.onclick = () => {
      let p = document.getElementById("toy-description");
      p.innerHTML = `${toy} costs $${toysPrice[toy]}`;
      tr.classList.add("special");
    };
  }
};

showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToyTable();
