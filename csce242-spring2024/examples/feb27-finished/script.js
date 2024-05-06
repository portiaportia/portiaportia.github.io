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

    const arrow = document.createElement("a");
    arrow.href = "#";
    arrow.innerHTML = "&#x2964;";
    arrow.classList.add("arrow");
    h3.append(arrow);
    arrow.onclick = this.expandContract;

    const columns = document.createElement("section");
    columns.classList.add("columns");
    section.append(columns);

    const imageSection = document.createElement("section");
    columns.append(imageSection);
    imageSection.append(this.picture(this.pic));

    const moreSection = document.createElement("section");
    moreSection.classList.add("hidden", "more");
    moreSection.append(this.paragraph("Breed", this.breed));
    moreSection.append(this.paragraph("Color", this.color));
    moreSection.append(this.paragraph("Age", this.age));
    columns.append(moreSection);

    return section;
  }

  expandContract(e) {
    const section = e.currentTarget
      .closest("section.dog")
      .querySelector(".more");

    if (section.classList.contains("hidden")) {
      e.currentTarget.innerHTML = "&#x2962;";
    } else {
      e.currentTarget.innerHTML = "&#x2964;";
    }

    section.classList.toggle("hidden");
  }

  paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}</strong>: ${this.breed}`;
    return p;
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

const dogs = [];
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog) => {
  document.getElementById("dog-list").append(dog.item);
});
