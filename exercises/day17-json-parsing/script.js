const getShoes = async () => {
  const url = "https://portiaportia.github.io/json/shoes.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showShoes = async () => {
  let shoes = await getShoes();
  let shoesSection = document.getElementById("shoes-section");

  shoes.forEach((shoe) => {
    shoesSection.append(getShoeItem(shoe));
  });
};

const getShoeItem = (shoe) => {
  let section = document.createElement("section");

  let h3 = document.createElement("h3");
  h3.innerText = shoe.name;
  section.append(h3);

  let ul = document.createElement("ul");
  section.append(ul);
  ul.append(getLi(shoe.brand));
  ul.append(getLi(`Price: $${shoe.price}`));
  ul.append(getLi(shoe.material));
  ul.append(getLi(shoe.description));
  ul.append(getLi(`Rating: ${shoe.rating}`));

  section.append(getReviews(shoe.reviews));

  return section;
};

const getLi = (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  return li;
};

const getReviews = (reviews) => {
  const section = document.createElement("section");

  reviews.forEach((review) => {
    const p = document.createElement("p");
    p.textContent = review;
    section.append(p);
  });

  return section;
};

window.onload = () => showShoes();
