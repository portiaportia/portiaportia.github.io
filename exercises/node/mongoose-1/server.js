const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27018/recipes')
    .then(() => { console.log("connected to mongodb") })
    .catch(error => console.log("couldn't connect to mongodb.", err));

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const createRecipe = async() => {
    const recipe = new Recipe({
        name: "Banana Bread",
        description: "Bananay goodness",
        ingredients: ["bananas", "flour", "sugar"]
    });

    const result = await recipe.save();
    console.log(result);
}

createRecipe();