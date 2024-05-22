class Child {
    constructor(firstName, lastName, picture, grade){
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
            const detailsSection = document.getElementById("child-details");
            detailsSection.innerHTML = "";
            const img = document.createElement("img");
            img.src= "images/" + this.picture;
            detailsSection.append(img);
        }

        return tr;
    }

    tableColumn(data){
        const td = document.createElement("td");
        td.innerHTML = data;
        return td;
    }
}

const children = [];
children.push(new Child("Amy", "Smith", "amy.jpg", 2));
children.push(new Child("Bobby", "White", "bobby.png", 3));
children.push(new Child("Collin", "Carrelson", "carl.png", 1));
children.push(new Child("Dave", "Marks", "dave.jpg", 4));
children.push(new Child("Erin", "Young", "erin.jpg", 1));

children.forEach((child)=>{
    document.getElementById("children-table").append(child.tableRow);
});