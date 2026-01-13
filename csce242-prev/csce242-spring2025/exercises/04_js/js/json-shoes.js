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
    const shoesSection = document.getElementById("shoes-section");
    
    shoes.forEach((shoe)=>{
        const section = document.createElement("section");
        shoesSection.append(section);
        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.name;
        section.append(h3);

        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`

        const ul = document.createElement("ul");
        section.append(ul);

        //loop through each review
        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.append(review);
            ul.append(li);
        });

    });
};

showShoes();