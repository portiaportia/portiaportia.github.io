const getCocktails = async () => {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showCocktails = async () => {
  let cocktails = await getCocktails();
  let cocktailsSection = document.getElementById("cocktails");
  cocktails.drinks.forEach((cocktail) =>
    cocktailsSection.append(getCocktail(cocktail))
  );
};

const getCocktail = (cocktail) => {
  let section = document.createElement("section");
  section.classList.add("drink");

  let h3 = document.createElement("h3");
  h3.innerText = cocktail.strDrink;
  section.append(h3);

  let img = document.createElement("img");
  section.append(img);
  img.src = cocktail.strDrinkThumb;

  return section;
};

window.onload = () => showCocktails();
