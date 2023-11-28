const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images" });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let recipes = [{
        _id: 1,
        name: "Banana Bread",
        description: "Extra soft and bannanny",
        img: "images/banana-bread.jpg",
        rating: 4,
        ingredients: [
            "3 very ripe bananas, (medium/large)",
            "½ cup unsalted butter, (8 Tbsp) at room temperature",
            "3/4 cup granulated sugar",
            "2 large eggs, lightly beaten",
            "1 ½ cups all-purpose flour",
            "1 tsp baking soda",
            "½ tsp salt",
            "½ tsp vanilla extract",
            "1 cup walnuts",
            "½ cup raisins",
        ],
    },
    {
        _id: 2,
        name: "Chocolate Chip Cookies",
        img: 'images/chocolate-chip.jpg',
        description: "Very chocolately cookies",
        ingredients: [
            "1 cup salted butter softened",
            "1 cup granulated sugar",
            "1 cup light brown sugar packed",
            "2 teaspoons pure vanilla extract",
            "2 large eggs",
            "3 cups all-purpose flour",
            "1 teaspoon baking soda",
            "½ teaspoon baking powder",
            "1 teaspoon sea salt",
            "2 cups chocolate chips (14 oz)",
        ],
    },
    {
        _id: 3,
        name: "Vanilla Cake",
        description: "Real vanilla bean in a cake",
        img: 'images/vanilla-cake.jpg',
        ingredients: [
            "3 and 2/3 cups (433g) cake flour (spoon & leveled)",
            "1 teaspoon salt",
            "2 teaspoons baking powder",
            "3/4 teaspoon baking soda",
            "1 and 1/2 cups (345g) unsalted butter, softened to room temperature",
            "2 cups (400g) granulated sugar",
            "3 large eggs + 2 additional egg whites, at room temperature*",
            "1 Tablespoon pure vanilla extract (yes, Tbsp!)",
            "1 and 1/2 cups (360ml) buttermilk, at room temperature*",
        ],
    },
];

app.get("/api/recipes", (req, res) => {
    res.send(recipes);
});

app.post("/api/recipes", upload.single("img"), (req, res) => {
    const result = validateRecipe(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const recipe = {
        _id: recipes.length + 1,
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients.split(",")
    }

    if (req.file) {
        recipe.img = "images/" + req.file.filename;
    }

    recipes.push(recipe);
    res.send(recipes);
});

app.put("/api/recipes/:id", upload.single("img"), (req, res) => {
    const id = parseInt(req.params.id);

    const recipe = recipes.find((r) => r._id === id);;

    const result = validateRecipe(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    recipe.name = req.body.name;
    recipe.description = req.body.description;
    recipe.ingredients = req.body.ingredients.split(",");

    if (req.file) {
        recipe.img = "images/" + req.file.filename;
    }

    res.send(recipe);
});

app.delete("/api/recipes/:id", upload.single("img"), (req, res) => {
    const id = parseInt(req.params.id);

    const recipe = recipes.find((r) => r._id === id);

    if (!recipe) {
        res.status(404).send("The recipe was not found");
        return;
    }

    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);
    res.send(recipe);

});

const validateRecipe = (recipe) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        ingredients: Joi.allow(""),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    });

    return schema.validate(recipe);
};

app.listen(3000, () => {
    console.log("I'm listening");
});