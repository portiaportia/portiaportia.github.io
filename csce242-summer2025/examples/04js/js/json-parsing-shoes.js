//https://portiaportia.github.io/json/shoes.json

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoesDiv = document.getElementById("shoes");

    shoes.forEach((shoe)=>{
        const shoeSection = document.createElement("section");
        shoesDiv.append(shoeSection);

        //make the h3
        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.name;
        shoeSection.append(h3);

        //make the brand paragraph
        const p = document.createElement("p");
        p.innerHTML = `Brand: ${shoe.brand}`;
        shoeSection.append(p);

        //make the reviews list
        const ul = document.createElement("ul");
        shoeSection.append(ul);

        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });

    });
};

showShoes();