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
    const dogSection = document.createElement("section");
    dogSection.classList.add("dog");

    const heading = document.createElement("h3");
    heading.innerText = this.title;
    dogSection.appendChild(heading);

    const infoList = document.createElement("ul");
    dogSection.appendChild(infoList);
    infoList.append(this.listItem(this.breed));
    infoList.append(this.listItem(this.color));
    infoList.append(this.listItem(`Age: ${this.age}`));
    infoList.append(this.listItem(this.size));

    dogSection.appendChild(this.picture(this.pic));

    return dogSection;
  }

  listItem(info) {
    const liItem = document.createElement("li");
    liItem.innerText = info;
    return liItem;
  }

  picture(pic) {
    const picItem = document.createElement("img");
    picItem.src = "images/" + pic;
    return picItem;
  }
}

window.onload = () => {
  let dogs = [];
  let dogList = document.getElementById("dog-list");

  dogs.push(new Dog("Coco", "Yorkie", "Black", 5, "Small", "yorkie.jpg"));
  dogs.push(
    new Dog("Sam", "Golden", "Yellow", 1, "Med", "golden-retriever.jpg")
  );
  dogs.push(
    new Dog("Gerald", "Pit Bull", "White", 3, "Large", "pitt-bull.jpg")
  );

  for (let i in dogs) {
    dogList.append(dogs[i].item);
  }
};
