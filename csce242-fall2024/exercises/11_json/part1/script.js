const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    
    shoes.forEach((shoe)=>{
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    });
};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");

    return section;
}


//show all of the shoes when the page loads
showShoes();