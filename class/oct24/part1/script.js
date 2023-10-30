const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeList = document.getElementById("shoes-section");

    shoes.forEach(shoe => {
        shoeList.append(getShoeSection(shoe));
    });
}

const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    section.append(h3);
    h3.innerHTML = shoe.name;

    const brandP = document.createElement("p");
    section.append(brandP);
    brandP.innerHTML = shoe.brand;

    const ul = document.createElement("ul");
    section.append(ul);

    for (let i in shoe.reviews) {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = shoe.reviews[i];
    }

    return section;
}

window.onload = () => showShoes();