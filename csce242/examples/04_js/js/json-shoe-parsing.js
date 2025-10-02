const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("sorry");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        //make a section for each shoe put all the data in, nicely formatted
        //then append it to the shoe list
        console.log(shoe.name);
    });
};

showShoes();