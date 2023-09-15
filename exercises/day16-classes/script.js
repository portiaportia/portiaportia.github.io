class Child {
  constructor(firstName, lastName, picture, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.grade = grade;
  }

  get tableRow() {
    let childRow = document.createElement("tr");
    childRow.append(this.tableColumn(this.firstName));
    childRow.append(this.tableColumn(this.lastName));
    childRow.append(this.tableColumn(this.grade));
    childRow.onclick = () => displayChildDetails(this);
    return childRow;
  }

  tableColumn(data) {
    let td = document.createElement("td");
    td.textContent = data;
    return td;
  }
}

const displayChildDetails = (child) => {
  const childDetails = document.getElementById("child-details");
  childDetails.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = child.firstName + " " + child.lastName;
  childDetails.append(h3);

  const p = document.createElement("p");
  p.textContent = `Grade: ${child.grade}`;
  childDetails.append(p);

  const img = document.createElement("img");
  img.src = "images/" + child.picture;
  childDetails.append(img);
};

const createChildrenTable = () => {
  let childrenTable = document.getElementById("children-table");

  let children = [];
  children.push(new Child("Amy", "Smith", "amy.jpg", 2));
  children.push(new Child("Bobby", "White", "bobby.png", 3));
  children.push(new Child("Carl", "Carrelson", "carl.png", 1));
  children.push(new Child("Dave", "Marks", "dave.jpg", 1));
  children.push(new Child("Erin", "Young", "erin.jpg", 1));

  for (let i in children) {
    childrenTable.append(children[i].tableRow);
  }
};

window.onload = () => createChildrenTable();
