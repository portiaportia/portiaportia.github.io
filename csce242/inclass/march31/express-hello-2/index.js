const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/cakes', (req,res)=>{
    cakes = ["red velvet", "cheese cake", "ice cream cake"];
    res.send(cakes);
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});