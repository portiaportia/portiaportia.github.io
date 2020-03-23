const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/recipes", {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(err => console.error("couldn't connect to mongdb", err));

const recipeSchema = new mongoose.Schema({
    name:String,
    description:String
});

const Recipe = mongoose.model('Recipe',recipeSchema);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/recipes', (req,res)=>{
    getRecipes(res);
});

async function getRecipes(res){
    const recipes = await Recipe.find();
    console.log(recipes);
    res.send(recipes);
}

app.get('/api/recipes/:id',(req,res)=>{
    getRecipe(req.params.id, res);
});

async function getRecipe(id, res){
    const recipe = await Recipe.findOne({_id:id});
    console.log(recipe);
    res.send(recipe);
}

app.post('/api/recipes', (req,res)=>{
    const result = validateRecipe(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const recipe = new Recipe({
        name:req.body.name,
        description:req.body.description
    });

    createRecipe(recipe,res);
});

async function createRecipe(recipe, res){
    const result = await recipe.save();
    console.log(result);
    res.send(recipe);
}

app.put('/api/recipes/:id',(req,res)=>{
    const result = validateRecipe(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateRecipe(res, req.params.id, req.body.name, req.body.description);
});

async function updateRecipe(res, id, name, description){
    const result = await Recipe.updateOne({_id:id},{
        $set:{
            name:name,
            description:description
        }
    })

    res.send(result);
}

app.delete('/api/recipes/:id',(req,res)=>{
    removeRecipe(res,req.params.id);
});

async function removeRecipe(res,id){
    const recipe = await Recipe.findByIdAndRemove(id);
    res.send(recipe);
}

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