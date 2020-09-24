const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let recipes = [
    {id:1, name:"Banana Bread", description:"Extra soft and bannanny"},
    {id:2, name:"Chocolate Chip Cookies", description: "Very chocolately cookies"},
    {id:3, name:"Vanilla Cake", description: "Real vanilla bean in a cake"}
];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/recipes', (req,res)=>{
    res.send(recipes);
});

app.get('/api/recipes/:id',(req,res)=>{
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));

    if(!recipe) res.status(404).send("The recipe with the given id was not found");

    res.send(recipe);
});

app.post('/api/recipes', (req,res)=>{
    const result = validateRecipe(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const recipe = {
        id:recipes.length+1,
        name:req.body.name,
        description:req.body.description
    };
    recipes.push(recipe);
    res.send(recipe);
});

app.put('/api/recipes/:id',(req,res)=>{
    const recipe =recipes.find(r=>r.id === parseInt(req.params.id));
    
    if(!recipe) res.status(404).send("Recipe with given id was not found");

    const result = validateRecipe(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    recipe.name = req.body.name;
    recipe.description = req.body.description;
    res.send(recipe);
});

app.delete('/api/recipes/:id',(req,res)=>{
    const recipe = recipes.find(r=>r.id===parseInt(req.params.id));

    if(!recipe){
        req.status(404).send("This recipe with the given id was not found");
    }

    const index = recipes.indexOf(recipe);
    recipes.splice(index,1);

    res.send(recipe);
});

function validateRecipe(recipe){
    const schema = {
        name:Joi.string().min(3).required(),
        description:Joi.string().min(3).required()
    };

    return Joi.validate(recipe,schema);
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})