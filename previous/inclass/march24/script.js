async function showShoes() {
  let response = await fetch("https://portiaportia.github.io/json/shoes.json");
  let shoesJSON = await response.json();
  let shoeDiv = document.getElementById("shoes-section");

  //loop through the list of shoes from the JSON file
  for (i in shoesJSON) {
    let shoe = shoesJSON[i];
    shoeDiv.append(getShoeItem(shoe));
  }
}

function getShoeItem(shoe) {
  let shoeSection = document.createElement("section");

  let h3Elem = document.createElement("h3");
  h3Elem.innerText = shoe.name;
  shoeSection.append(h3Elem);

  let ulElem = document.createElement("ul");
  shoeSection.append(ulElem);

  let liBrand = document.createElement("li");
  liBrand.innerText = `Brand: ${shoe.brand}`;
  ulElem.append(liBrand);

  let liPrice = document.createElement("li");
  liPrice.innerText = `Price: $${shoe.price}`;
  ulElem.append(liPrice);

  let liReviews = document.createElement("li");
  liReviews.innerText = `Reviews: ${shoe.reviews.join(", ")}`;
  ulElem.append(liReviews);

  return shoeSection;
}

window.onload = function () {
  this.showShoes();
};
