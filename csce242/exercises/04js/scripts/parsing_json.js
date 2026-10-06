//https://portiaportia.github.io/json/fish.json

const base_url = "https://portiaportia.github.io/json/";

const getFish = async() => {
    const url = `${base_url}fish.json`;
    const response = await fetch(url);
    return response.json();
};

const showFish = async() => {
    const fishes = await getFish();
    
    fishes.forEach((fish)=>{
        document.querySelector(".fish-list").append(displayFish(fish));
    });
};

const displayFish = (fish) => {
    const section = document.createElement("section");
    section.classList.add("fish");

    const h2 = document.createElement("h2");
    h2.innerHTML = fish.title;
    section.append(h2);

    const img = document.createElement("img");
    img.src= base_url + fish.img;
    section.append(img);

    return section;
};

showFish();