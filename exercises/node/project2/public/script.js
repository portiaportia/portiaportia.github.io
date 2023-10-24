const showAnimals = async () => {
  const animalJSON = await getJSON();
  if (animalJSON == "") {
    return;
  }

  let animalDiv = document.getElementById("animal-list");

  animalJSON.forEach((animal) => {
    let section = document.createElement("section");
    animalDiv.append(section);

    let h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = animal.name;

    let img = document.createElement("img");
    section.append(img);
    img.src = "http://localhost:3000/" + animal.img;
  });
};

const getJSON = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/animals");
    return await response.json();
  } catch (error) {
    console.log("error retrieving json");
    return "";
  }
};

window.onload = () => {
  showAnimals();
};
