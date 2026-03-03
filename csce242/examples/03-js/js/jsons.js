//json file parsing
//https://github.com/portiaportia/portiaportia.github.io/blob/master/json/shoes.json

const base_url = "https://portiaportia.github.io/json";

const getFish = async() => {
    const url = `${base_url}/fish.json`;
    const response = await fetch(url);
    return response.json();
};

const makeP = (title, content) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}</strong> ${content}`;
    return p;
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

        const pDesc = document.createElement("p");
        pDesc.innerHTML = fish.description;
        section.append(pDesc);
        
        section.append(makeP("Length", fish.length));
        section.append(makeP("Lifespan", fish.lifespan))
        section.append(makeP("Colors", fish.colors.join(", ")))

        const img = document.createElement("img");
        section.prepend(img);
        img.src =`${base_url}/${fish.img}`;
    });
};

showFish();


//https://openbrewerydb.org/