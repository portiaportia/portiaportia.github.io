//https://portiaportia.github.io/json/shoes.json

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        console.log(response);
        return response.json();
    }catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
   const shoes = await getShoes();
   console.log(shoes);
};

showShoes();