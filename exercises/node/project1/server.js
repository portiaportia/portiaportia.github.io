const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/cakes", (req, res) => {
  const cakes = [
    "birthday cake",
    "red velvet cake",
    "chocolate cake",
    "chesse cake",
  ];
  res.send(cakes);
});

app.listen(3000, () => {
  console.log("I'm listening");
});
