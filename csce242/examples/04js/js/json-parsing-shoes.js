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
    });
};

showShoes();