let children = [];

class Child {

    constructor(firstName, lastName, picture, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.grade = grade;
    }

    set childNotes(notes){
        this.notes = notes;
    }

    get tableRow(){
        let childRow = document.createElement("tr");
        childRow.onclick = displayChildDetails;

        let tdFirstName = document.createElement("td");
        tdFirstName.textContent = this.firstName;
        childRow.append(tdFirstName);

        let tdLastName = document.createElement("td");
        tdLastName.textContent = this.lastName;
        childRow.append(tdLastName);

        let tdGrade = document.createElement("td");
        tdGrade.textContent = this.grade;
        childRow.append(tdGrade);

        return childRow;
    }

}

function displayChildDetails(){
    let childDetailsDiv = document.getElementById("child-display");
    childDetailsDiv.innerHTML = "";
    let child = children[this.rowIndex-1];
    
    let childImg = document.createElement("img");
    childImg.src = "images/" + child.picture;


    let childInfoSection = document.createElement("section");
    let h3Elem =document.createElement("h3");
    h3Elem.innerText = `${child.firstName} ${child.lastName}`;
    childInfoSection.append(h3Elem);

    //grade
    let gradeP = document.createElement("p");
    gradeP.innerHTML = `<strong>Grade:</strong> &nbsp;${child.grade}`;
    childInfoSection.append(gradeP);

    //notes
    if(child.notes){
        let notesP = document.createElement("p");
        notesP.innerHTML = child.notes;
        childInfoSection.append(notesP);
    }

    childDetailsDiv.append(childImg);
    childDetailsDiv.append(childInfoSection);
}

function createChildren(){
    children.push(new Child("Amy", "Smith", "amy.jpg", 2));
    children.push(new Child("Bobby", "White", "bobby.png", 3));
    children.push(new Child("Carl", "Carrelson", "carl.png", 1));
    children.push(new Child("Dave", "Marks", "dave.jpg", 1));
    children.push(new Child("Erin", "Young", "erin.jpg", 1));

    children[0].notes = "Amy is an amazing student, always very talkative";
    children[1].notes = "Bobby is keen to learn";
    children[2].notes = "Carl is struggling with basic concepts, lets schedule a meeting";


    let childrenListDiv = document.getElementById("child-list");
    let childTable = document.createElement("table");
    childrenListDiv.append(childTable);
    
    //craete header row
    let trh = document.createElement("tr");
    childTable.append(trh);
    let th1 = document.createElement("th");
    th1.textContent = "FirstName";
    trh.append(th1);
    let th2 = document.createElement("th");
    th2.textContent = "Last Name";
    trh.append(th2);
    let th3 = document.createElement("th");
    th3.textContent = "Grade";
    trh.append(th3);

    for(let i in children){
        childTable.append(children[i].tableRow);
    }
}

//After the DOM has been loaded
//After all the HTML elemnts have been rendered
window.onload = function(){
    this.createChildren();
}