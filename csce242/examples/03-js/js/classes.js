class Dog {
    constructor(title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const p = document.createElement("p");
        p.innerHTML = "DOG!!!!!";
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("coco", "yorkie",5,"small","yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", 2, "large", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", 1, "large", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dogs").append(dog.item);
});
