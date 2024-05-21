class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //expand / contract arrow
        const arrow = document.createElement("a");
        arrow.href="#";
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.innerHTML="&#x2964;";

        //setup the columns
        const columns = document.createElement("section");
        columns.classList.add("columns");
        section.append(columns);

        //left image
        const imageColumn = document.createElement("section");
        columns.append(imageColumn);
        const img = document.createElement("img");
        img.src= "images/" + this.pic;
        img.alt = this.title;
        imageColumn.append(img);


        //right data
        const dataColumn = document.createElement("section");
        dataColumn.classList.add("hidden", "more");
        columns.append(dataColumn);
        dataColumn.append(this.paragraph("Breed", this.breed));
        dataColumn.append(this.paragraph("Age", this.age));
        dataColumn.append(this.paragraph("Color", this.color));

        arrow.onclick = () => {
            if(dataColumn.classList.contains("hidden")){
                arrow.innerHTML = "&#x2962";
            } else {
                arrow.innerHTML = "&#x2964";
            }

            dataColumn.classList.toggle("hidden");
        };

        return section;
    }

    paragraph(title, info){
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});