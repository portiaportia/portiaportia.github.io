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
        const section = document.createElement("section");
        section.classList.add("shoe");

        //heading
        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = shoe.name;

        shoeListDiv.append(section);
    });
};

showShoes();