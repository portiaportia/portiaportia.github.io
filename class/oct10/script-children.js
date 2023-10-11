class Child {
    constructor(firstName, lastName, picture, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.grade = grade;
    }

    get tableRow() {
        const tr = document.createElement("tr");
        tr.append(this.tableColumn(this.firstName));
        tr.append(this.tableColumn(this.lastName));
        tr.append(this.tableColumn(this.grade));
        tr.onclick = () => {
                this.displayDetails(this);
            }
            /*
            tr.onclick = () => {
                console.log(this.firstName);
            }
            */

        return tr;
    }

    displayDetails(child) {
        const section = document.getElementById("child-details");
        section.innerHTML = "";
        const img = document.createElement("img");
        img.src = "images/" + child.picture;
        section.append(img);
    }

    tableColumn(data) {
        const td = document.createElement("td");
        td.textContent = data;
        return td;
    }
}

const displayChildren = () => {
    const table = document.getElementById("children-table");
    const children = [];
    children.push(new Child("Alfred", "Smith", "amy.jpg", 2));
    children.push(new Child("Bobby", "White", "bobby.png", 3));
    children.push(new Child("Collin", "Carrelson", "carl.png", 1));
    children.push(new Child("Dave", "Marks", "dave.jpg", 1));
    children.push(new Child("Erin", "Young", "erin.jpg", 1));

    children.forEach(child => {
        table.append(child.tableRow);
    });
};

window.onload = () => {
    displayChildren();
}