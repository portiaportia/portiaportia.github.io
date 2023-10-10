class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(this.listItem(this.breed));
        ul.append(this.listItem(this.color));
        ul.append(this.listItem("age: " + this.age));

        section.append(this.picture(this.pic));

        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    listItem(info) {
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showDogs = () => {
    const dogList = document.getElementById("dog-list");
    const dogs = [];
    dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
    dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
    dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

    dogs.forEach(dog => {
        dogList.append(dog.item);
    });


    /*const dog = new Dog("fred", "rotwiler", "brow", 4, "lg", "sdfsd");

    for (let i in dogs) {
        console.log(dogs[i].title);
    }*/

};

window.onload = () => {
    showDogs();
}