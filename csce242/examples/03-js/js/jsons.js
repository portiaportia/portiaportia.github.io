//json file parsing
//https://github.com/portiaportia/portiaportia.github.io/blob/master/json/shoes.json

const getFish = async() => {
    const url = "https://portiaportia.github.io/json/fish.json";
    const response = await fetch(url);
    return response.json();
};

const showFish = async() => {
    const fish = await getFish();
    const fishListDiv = document.getElementById("fish-list");

    fish.forEach((fish)=>{
        const section = document.createElement("section");
        section.classList.add("fish");
        fishListDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = fish.title;
        section.appendChild(h3);

        const pLength = document.createElement("p");
        pLength.innerHTML = `Length: ${fish.length}`;
        section.appendChild(pLength);

        const h4 = document.createElement("h4");
        h4.innerHTML = "Colors:";
        section.append(h4);

        const ul = document.createElement("ul");
        section.append(ul);
    });
};

showFish();


//https://openbrewerydb.org/