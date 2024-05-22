const url1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const getDrinks = async (url) => {
    try {
      return (await fetch(url)).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showDrinkList = async (url) => {
    const drinks = (await getDrinks(url)).drinks;
    const drinkList = document.getElementById("cocktails");
    
    console.log(drinks);
    drinks.forEach(async (drink) => {
      const section = document.createElement("section");
      section.classList.add("drink");
    
      const h3 = document.createElement("h3");
      h3.innerHTML = drink.strDrink;
      section.append(h3);

      const img = document.createElement("img");
      img.src= drink.strDrinkThumb;
      section.append(img);

      drinkList.append(section);
    });
  };

  const showDrinkPreview = async (url) => {
    const drink = ((await getDrinks(url)).drinks)[0];
    const preview = document.getElementById("preview");
    
    console.log(drink);

    const img = preview.querySelector("img");
    img.src= drink.strDrinkThumb;

    const details = document.getElementById("details");
    details.innerHTML = "";
    
    const h3 = document.createElement("h3");
    h3.innerHTML = drink.strDrink;
    details.append(h3);

    const instructions = document.createElement("p");
    instructions.innerHTML = drink.strInstructions;
    details.append(instructions);
  };

  

showDrinkPreview(urlRandom);

showDrinkList(url1);
  