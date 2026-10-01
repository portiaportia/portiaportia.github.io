class Dog {
    constructor(title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");


        return section;
    }
}

const dogs = [];

//coco = new Dog("coco", "yorkie", 5, "small", "yorkie.jpg");
//dogs.push(coco);

dogs.push(new Dog("coco", "yorkie", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", 2, "large", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", 1, "large", "pitt-bull.jpg"));

const dogsDiv = document.querySelector(".dogs");

dogs.forEach((dog)=>{
    dogsDiv.append(dog.item);
});