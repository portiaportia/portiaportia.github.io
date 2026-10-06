//https://portiaportia.github.io/json/fish.json

const base_url = "https://portiaportia.github.io/json/fish.json";

const getFish = async() => {
    const response = await fetch(base_url);
    return response.json();
};

const showFish = async() => {
    const fishes = await getFish();
    
    fishes.forEach((fish)=>{
        displayFish(fish);
    });
};

const displayFish = (fish) => {
    console.log(fish);
};

showFish();