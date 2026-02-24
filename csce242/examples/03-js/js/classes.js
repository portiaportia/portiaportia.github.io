class Dog {
    constructor(title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const dogSection = document.createElement("section");
        dogSection.classList.add("dog");

        //title
        const a1 = document.createElement("a");
        a1.href="#";
        const h3 = document.createElement("h3");
        a1.append(h3);
        h3.innerHTML = this.title;
        dogSection.append(a1);

        //image
        const img = document.createElement("img");
        img.src = `images/classes/${this.pic}`;
        a1.append(img);

        //more info section
        dogSection.append(this.moreInfo());

        return dogSection;
    }

    moreInfo() {
        const ul = document.createElement("ul");
        ul.append(this.infoLi("Breed", this.breed));
        ul.append(this.infoLi("Size", this.size));
        ul.append(this.infoLi("Age", this.age));
        
        return ul;
    }

    infoLi(label, value) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${label}</strong>: ${value}`;
        return li;
    }
}

const dogs = [];
dogs.push(new Dog("coco", "yorkie",5,"small","yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", 2, "large", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", 1, "large", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dogs").append(dog.item);
});
