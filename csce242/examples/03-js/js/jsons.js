//json file parsing
//https://github.com/portiaportia/portiaportia.github.io/blob/master/json/shoes.json

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    const response = await fetch(url);
    return response.json();
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

};

showShoes();


//https://openbrewerydb.org/