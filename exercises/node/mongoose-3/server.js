const express = require("express");
const app = express();
const multer = require("multer");
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect("mongodb://localhost/recipes")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => console.log("couldn't connect to mongodb.", err));

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
  img: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/recipes", (req, res) => {
  getRecipes(res);
});

const getRecipes = async (res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
};

app.get("/api/recipes/:id", (req, res) => {
  getRecipe(req.params.id, res);
});

async function getRecipe(id, res) {
  const recipe = await Recipe.findOne({ _id: id });
  res.send(recipe);
}

app.get("/api/recipes/:id", (req, res) => {
  const recipe = recipes.find((r) => r._id === parseInt(req.params.id));

  if (!recipe)
    res.status(404).send("The recipe with the given id was not found");

  res.send(recipe);
});

app.post("/api/recipes", upload.single("img"), (req, res) => {
  console.log(req.body);
  const result = validateRecipe(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients.split(","),
  });

  if (req.file) {
    recipe.img = "images/" + req.file.filename;
  }

  createRecipe(recipe, res);
});

const createRecipe = async (recipe, res) => {
  const result = await recipe.save();
  res.send(recipe);
};

app.put("/api/recipes/:id", upload.single("img"), (req, res) => {
  const result = validateRecipe(req.body);
  console.log(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  updateRecipe(req, res);
});

const updateRecipe = async (req, res) => {
  let fieldsToUpdate = {
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients.split(","),
  };

  if (req.file) {
    fieldsToUpdate.img = "images/" + req.file.filename;
  }

  const result = await Recipe.updateOne(
    { _id: req.params.id },
    {
      $set: { ...fieldsToUpdate },
    }
  );

  res.send(result);
};

app.delete("/api/recipes/:id", (req, res) => {
  removeRecipe(res, req.params.id);
});

const removeRecipe = async (res, id) => {
  const recipe = await Recipe.findByIdAndDelete(id);
  res.send(recipe);
};

function validateRecipe(recipe) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    ingredients: Joi.allow(""),
    _id: Joi.allow(""),
  });
  return schema.validate(recipe);
}

app.listen(3000, () => {
  console.log("I'm listening");
});
