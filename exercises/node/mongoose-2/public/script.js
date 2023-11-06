const getRecipes = async () => {
  try {
    return (await fetch("api/recipes/")).json();
  } catch (error) {
    console.log(error);
  }
};

const showRecipes = async () => {
  let recipes = await getRecipes();
  let recipesDiv = document.getElementById("recipe-list");
  recipesDiv.innerHTML = "";
  recipes.forEach((recipe) => {
    const section = document.createElement("section");
    section.classList.add("recipe");
    recipesDiv.append(section);

    const a = document.createElement("a");
    a.href = "#";
    section.append(a);

    const h3 = document.createElement("h3");
    h3.innerHTML = recipe.name;
    a.append(h3);

    a.onclick = (e) => {
      e.preventDefault();
      displayDetails(recipe);
    };
  });
};

const displayDetails = (recipe) => {
  const recipeDetails = document.getElementById("recipe-details");
  recipeDetails.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.innerHTML = recipe.name;
  recipeDetails.append(h3);

  const dLink = document.createElement("a");
  dLink.innerHTML = "	&#x2715;";
  recipeDetails.append(dLink);
  dLink.id = "delete-link";

  const eLink = document.createElement("a");
  eLink.innerHTML = "&#9998;";
  recipeDetails.append(eLink);
  eLink.id = "edit-link";

  const p = document.createElement("p");
  recipeDetails.append(p);
  p.innerHTML = recipe.description;

  const ul = document.createElement("ul");
  recipeDetails.append(ul);
  console.log(recipe.ingredients);
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = ingredient;
  });

  eLink.onclick = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Edit Recipe";
  };

  dLink.onclick = (e) => {
    e.preventDefault();
    //delete recipe
  };

  populateEditForm(recipe);
};

const populateEditForm = (recipe) => {};

const addEditRecipe = async (e) => {
  e.preventDefault();
};

const resetForm = () => {
  const form = document.getElementById("add-edit-recipe-form");
  form.reset();
  form.recipeId = "-1";
  document.getElementById("ingredient-boxes").innerHTML = "";
};

const showHideAdd = (e) => {
  e.preventDefault();
  document.querySelector(".dialog").classList.remove("transparent");
  document.getElementById("add-edit-title").innerHTML = "Add Recipe";
  resetForm();
};

window.onload = () => {
  showRecipes();
  document.getElementById("add-edit-recipe-form").onsubmit = addEditRecipe;
  document.getElementById("add-link").onclick = showHideAdd;

  document.querySelector(".close").onclick = () => {
    document.querySelector(".dialog").classList.add("transparent");
  };
};
