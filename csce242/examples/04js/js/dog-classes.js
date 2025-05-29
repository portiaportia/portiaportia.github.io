class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const p = document.createElement("p");
        p.innerHTML = this.title;
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "Med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "Large", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-house").append(dog.item);
});