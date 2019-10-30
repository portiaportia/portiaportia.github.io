async function displayShoes(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/shoes.json");
    let shoesJson = await response.json();
    let contentDiv = document.getElementById("content");

    //loop through shoes array
    for(i in shoesJson){
        let shoe = shoesJson[i];
        contentDiv.append(getShoeItem(shoe));
    }
}

function getShoeItem(shoe){
    let shoeSection = document.createElement("section");
    shoeSection.className = "shoe";
    let shoeTitle = document.createElement("h3");
    shoeTitle.innerHTML = shoe.name;
    shoeSection.append(shoeTitle);
    shoeSection.append(createShoePara("$"+shoe.price));
    shoeSection.append(createShoePara(shoe.material));
    shoeSection.append(createShoePara(shoe.description));
    shoeSection.append(createReviewsList(shoe.reviews));

    return shoeSection;
}

function createReviewsList(reviews){
    //loop through reviews, and add them as a 
    //bulleted list
    let ulElem = document.createElement("ul");

    for(i in reviews){
        let liElem = document.createElement("li");
        liElem.innerHTML = reviews[i];
        ulElem.append(liElem);
    }
    return ulElem;
}

function createShoePara(text){
    let shoeP = document.createElement("p");
    shoeP.innerHTML = text;
    return shoeP;
}

window.onload = function(){
    this.displayShoes();
}