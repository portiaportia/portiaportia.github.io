async function displayDesserts(){
    let response = await fetch('api/recipes/');
    let recipesJSON = await response.json();
    let recipesDiv = document.getElementById("dessert-list");
    recipesDiv.innerHTML = "";

    for(i in recipesJSON){
        let recipe = recipesJSON[i];
        recipesDiv.append(getRecipeItem(recipe));
    }
}

function getRecipeItem(recipe){
    let recipeSection = document.createElement("section");
    recipeSection.classList.add("recipe");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", recipe.id);
    aTitle.href = "#";
    aTitle.onclick = showRecipeDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = recipe.name;
    aTitle.append(h3Elem);
    recipeSection.append(aTitle);

    return recipeSection;
}

async function showRecipeDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/recipes/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving recipe");
        return;
    }

    let recipe = await response.json();
    document.getElementById("recipe-id").textContent = recipe.id;
    document.getElementById("txt-name").value = recipe.name;
    document.getElementById("txt-description").value = recipe.description;
}

async function addRecipe(){
    let recipeName = document.getElementById("txt-add-name").value;
    let recipeDescription = document.getElementById("txt-add-description").value;

    let recipe = {"name":recipeName, "description": recipeDescription};
    
    let response = await fetch('/api/recipes',{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(recipe),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayDesserts();
}

async function editRecipe(){
    let recipeId = document.getElementById("recipe-id").textContent;
    let recipeName = document.getElementById("txt-name").value;
    let recipeDescription = document.getElementById("txt-description").value;
    let recipe = {"name":recipeName, "description": recipeDescription};

    let response = await fetch(`/api/recipes/${recipeId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify(recipe)
    });

    if(response.status != 200){
        console.log("Error updating recipe");
        return;
    }

    let result = await response.json();
    displayDesserts();
}

async function deleteRecipe(){
    let recipeId = document.getElementById("recipe-id").textContent;
    
    let response = await fetch(`/api/recipes/${recipeId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayDesserts();
}

window.onload = function(){
    this.displayDesserts();

    let addBtn = document.getElementById("btn-add-recipe");
    addBtn.onclick = addRecipe;

    let editBtn = document.getElementById("btn-edit-recipe");
    editBtn.onclick = editRecipe;

    let deleteBtn = document.getElementById("btn-delete-recipe");
    deleteBtn.onclick = deleteRecipe;
}