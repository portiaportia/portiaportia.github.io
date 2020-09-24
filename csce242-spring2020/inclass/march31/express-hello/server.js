const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send("Hello World");
});

app.get('/api/cakes', (req,res)=>{
    cakes = ["red velvet", "black forest", "cheese cake"];
    res.send(cakes);
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});