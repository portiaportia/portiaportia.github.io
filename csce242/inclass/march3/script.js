class Dog {

    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get details(){
        return `${this.title} is a ${this.breed}`;
    }

    get item(){
        let dogSection = document.createElement("section");
        dogSection.classList.add("dog");

        //create picture
        let imgElem = document.createElement("img");
        imgElem.src= `images/${this.pic}`;
        dogSection.append(imgElem);

        let infoSection = document.createElement("section");
        dogSection.append(infoSection);

        //create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = this.title;
        infoSection.append(h3Elem);

        //create list
        let ulElem = document.createElement("ul");
        infoSection.append(ulElem);
        let liBreedElem = document.createElement("li");
        liBreedElem.innerText = `Breed: ${this.breed}`;
        ulElem.append(liBreedElem);

        let liColorElem = document.createElement("li");
        liColorElem.innerText = `Color: ${this.color}`;
        ulElem.append(liColorElem);

        let liAgeElem = document.createElement("li");
        liAgeElem.innerText = `Age: ${this.age}`;
        ulElem.append(liAgeElem);

        let liSizeElem = document.createElement("li");
        liSizeElem.innerText = `Breed: ${this.size}`;
        ulElem.append(liSizeElem);

        return dogSection;
    }

}

//After the DOM has been loaded
//After all the HTML elemnts have been rendered
window.onload = function(){
    let dogs = [];
    dogs.push(new Dog("Tipsy", "Yorkie", "brown", 5, "Small", "yorkie.jpg"));
    dogs.push(new Dog("Fred", "Golden Retriever", "Yellow", 1, "Medium", "golden-retriever.jpg"));
    dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "Large", "pitt-bull.jpg"));
    let dogListDiv = document.getElementById("dog-list");
    
    for(let i in dogs){
        dogListDiv.append(dogs[i].item);
    }
}