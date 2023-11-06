const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
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

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/recipes", (req, res) => {
    getRecipes(res);
});

const getRecipes = async(res) => {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.send(recipes);
}

app.get("/api/recipes/:id", (req, res) => {
    const recipe = recipes.find((r) => r.recipeId === parseInt(req.params.id));

    if (!recipe)
        res.status(404).send("The recipe with the given id was not found");

    res.send(recipe);
});

app.post("/api/recipes", (req, res) => {
    const result = validateRecipe(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const recipe = {
        recipeId: recipes.length + 1,
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients.split(","),
    };

    recipes.push(recipe);
    res.send(recipe);
});

app.put("/api/recipes/:id", (req, res) => {
    const recipe = recipes.find((r) => r.recipeId === parseInt(req.params.id));

    if (!recipe) res.status(404).send("Recipe with given id was not found");

    const result = validateRecipe(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    recipe.name = req.body.name;
    recipe.description = req.body.description;
    recipe.ingredients = req.body.ingredients.split(",");

    res.send(recipe);
});

app.delete("/api/recipes/:id", (req, res) => {
    const recipe = recipes.find((r) => r.recipeId === parseInt(req.params.id));

    if (!recipe) {
        req.status(404).send("This recipe with the given id was not found");
    }

    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);

    res.send(recipe);
});

function validateRecipe(recipe) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        ingredients: Joi.allow(""),
        recipeId: Joi.allow(""),
    });

    return schema.validate(recipe);
}

app.listen(3000, () => {
    console.log("I'm listening");
});