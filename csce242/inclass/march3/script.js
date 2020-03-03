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

        //create picture
        let imgElem = document.createElement("img");
        imgElem.src= `images/${this.pic}`;
        dogSection.append(imgElem);

        //create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = this.title;
        dogSection.append(h3Elem);

        //create list
        let ulElem = document.createElement("ul");
        dogSection.append(ulElem);
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
    let myDog = new Dog("Tipsy", "Yorkie", "brown", 5, "small", "yorkie.jpg");
    let dogListDiv = document.getElementById("dog-list");
    dogListDiv.append(myDog.item);
}