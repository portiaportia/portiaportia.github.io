const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/recipes")
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log("Couldn't connect to mongodb", error));

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

const createRecipe = async () => {
  const recipe = new Recipe({
    name: "Banana Bread",
    description: "So Yummmy",
    ingredients: ["bananas", "flour", "sugar"],
  });

  const result = await recipe.save();
  console.log(result);
};

createRecipe();
