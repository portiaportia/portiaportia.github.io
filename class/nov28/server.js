const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect(
    "mongodb+srv://portiaportia:EyHXaKhndBmhv5Sa@data.ng58qmq.mongodb.net/"
  )
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect ot mongodb...", err));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
  img: String,
  /*  _id: mongoose.SchemaTypes.ObjectId*/
});

const Recipe = mongoose.model("Recipe", recipeSchema);

app.get("/api/recipes", (req, res) => {
  getRecipes(res);
});

const getRecipes = async (res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
};

app.post("/api/recipes", upload.single("img"), (req, res) => {
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

  const result = await Recipe.updateOne({ _id: req.params.id }, fieldsToUpdate);
  const recipe = await Recipe.findById(req.params.id);
  res.send(recipe);
};

app.delete("/api/recipes/:id", upload.single("img"), (req, res) => {
  removeRecipe(res, req.params.id);
});

const removeRecipe = async (res, id) => {
  const recipe = await Recipe.findByIdAndDelete(id);
  res.send(recipe);
};

const validateRecipe = (recipe) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    ingredients: Joi.allow(""),
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
  });

  return schema.validate(recipe);
};

app.listen(3010, () => {
  console.log("I'm listening");
});
