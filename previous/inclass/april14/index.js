const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/recipes', {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=> console.log("Connected to Mongbo Db"))
    .catch(err => console.log("Couldn't connect to MongoDB.", err));

const recipeSchema = new mongoose.Schema({
    name:String,
    description:String
});

const Recipe = mongoose.model('Recipe',recipeSchema);

async function createRecipe(){
    const recipe = new Recipe({
        name:"Vanilla Cake",
        description:"So good"
    });

    const result = await recipe.save();
    console.log(result);
}

async function getRecipes(){
    const recipes = await Recipe.find()
    .limit(2)
    .sort({name:1})
    .select({name:1});
    console.log(recipes);
}

//createRecipe();
getRecipes();