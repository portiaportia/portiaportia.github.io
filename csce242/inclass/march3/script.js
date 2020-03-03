class Dog {

    constructor(title, breed, color, age, size){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
    }

    get details(){
        return `${this.title} is a ${this.breed}`;
    }

    get item(){
        let dogSection = document.createElement("section");
        dogSection.innerHTML = this.details;
        return dogSection;
    }

}

//After the DOM has been loaded
//After all the HTML elemnts have been rendered
window.onload = function(){
    let myDog = new Dog("Tipsy", "Yorkie", "brown", 5, "small");
    let dogListDiv = document.getElementById("dog-list");
    dogListDiv.append(myDog.item);
}