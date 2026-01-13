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

        //brand
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`;

        //loop through reviews reviews and make ul li list
        const ul = document.createElement("ul");
        section.append(ul);

        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        });

        //image
        //const img = document.createElement("img");
        //section.append(img);
        //img.src = `https://portiaportia.github.io/json/${shoe.img}`;

        shoeListDiv.append(section);
    });
};

showShoes();