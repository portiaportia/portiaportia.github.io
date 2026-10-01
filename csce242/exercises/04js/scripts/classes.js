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
        section.classList.add("project-card");

        section.append(this.dogName());
        section.append(this.dogImage());

        const moreInfo = this.moreInfo()
        section.append(moreInfo);
        moreInfo.classList.add("hidden");

        section.querySelector("a").onclick = () => {
            moreInfo.classList.toggle("hidden");
        };
        

        return section;
    }

    dogName() {
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        h3.append(a);
        a.textContent = this.title;
        a.href="#";

        return h3;
    }

    dogImage() {
        const img = document.createElement("img");
        img.src= `images/classes/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    moreInfo(){
        const ul = document.createElement("ul");
        ul.classList.add("more-info");
        ul.append(this.liInfo("Breed", this.breed));
        ul.append(this.liInfo("Size", this.size));
        ul.append(this.liInfo("Age", this.age));

        return ul;
    }

    liInfo(property, value) {
        const li = document.createElement("li");
        li.innerHTML= `<strong>${property}</strong>: ${value}`;
        return li;
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