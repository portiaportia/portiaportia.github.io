//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const getDrinks = async () => {
    try {
      return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showDrinks = async () => {
    const drinks = (await getDrinks()).drinks;
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
  
  window.onload = showDrinks();
  