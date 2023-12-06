const getRecipes = async () => {
  try {
    return (
      await fetch("https://mongoose-recipes.onrender.com/api/recipes")
    ).json();
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

    if (recipe.img) {
      const img = document.createElement("img");
      img.src = "https://mongoose-recipes.onrender.com/" + recipe.img;
      section.append(img);
    }

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
    deleteRecipe(recipe._id);
  };

  populateEditForm(recipe);
};

async function deleteRecipe(_id) {
  let response = await fetch(
    `https://mongoose-recipes.onrender.com/api/recipes/${_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );

  if (response.status != 200) {
    console.log("Error deleting");
    return;
  }

  let result = await response.json();
  showRecipes();
  document.getElementById("recipe-details").innerHTML = "";
  resetForm();
  showRecipes();
}

const populateEditForm = (recipe) => {
  const form = document.getElementById("add-edit-recipe-form");
  form._id.value = recipe._id;
  form.name.value = recipe.name;
  form.description.value = recipe.description;

  const ingredientsP = document.getElementById("ingredient-boxes");
  ingredientsP.innerHTML = "";
  console.log(recipe.ingredients);

  for (let i in recipe.ingredients) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = recipe.ingredients[i];
    ingredientsP.append(input);
  }
};

const addIngredient = (e) => {
  e.preventDefault();
  const p = document.getElementById("ingredient-boxes");
  const input = document.createElement("input");
  input.type = "text";
  p.append(input);
};

const addEditRecipe = async (e) => {
  e.preventDefault();

  const form = document.getElementById("add-edit-recipe-form");
  const formData = new FormData(form);
  formData.append("ingredients", getIngredients());

  let response;
  console.log(form._id.value > 0 && form._id.value.length);
  if (form._id.value == -1) {
    formData.delete("_id");
    console.log(...formData);
    response = await fetch(
      "https://mongoose-recipes.onrender.com/api/recipes",
      {
        method: "POST",
        body: formData,
      }
    );
  } else {
    console.log("editting");
    response = await fetch(
      `https://mongoose-recipes.onrender.com/api/recipes/${form._id.value}`,
      {
        method: "PUT",
        body: formData,
      }
    );
  }

  if (response.status != 200) {
    console.log("ERROR posting data");
    return;
  }

  let result = await response.json();

  if (form._id.value != -1) {
    const recipe = await getRecipe(form._id.value);
    displayDetails(recipe);
  }

  document.querySelector(".dialog").classList.add("transparent");
  resetForm();
  showRecipes();
};

const getRecipe = async (_id) => {
  let response = await fetch(
    `https://mongoose-recipes.onrender.com/api/recipes/${_id}`
  );
  if (response.status != 200) {
    console.log("Error reciving recipe");
    return;
  }

  return await response.json();
};

const getIngredients = () => {
  const inputs = document.querySelectorAll("#ingredient-boxes input");
  const ingredients = [];

  inputs.forEach((input) => {
    ingredients.push(input.value);
  });

  return ingredients;
};

const resetForm = () => {
  const form = document.getElementById("add-edit-recipe-form");
  form.reset();
  form._id = "-1";
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
  document.getElementById("add-ingredient").onclick = addIngredient;
  document.getElementById("add-edit-recipe-form").onsubmit = addEditRecipe;
  document.getElementById("add-link").onclick = showHideAdd;

  document.querySelector(".close").onclick = () => {
    document.querySelector(".dialog").classList.add("transparent");
  };
};
