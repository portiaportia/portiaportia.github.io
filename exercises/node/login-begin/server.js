const express = require("express");
const bodyParser = require("body-parser");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const startMongo = require("./db");
const User = require("./user");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

startMongo();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//signup
app.post("/api/signup", async (req, res) => {
  let result = validateNewUser(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  let user = await User.findOne({ username: req.body.username });

  //duplicate
  if (user) {
    res.status(400).send("Error duplicate user");
    return;
  }

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  res.send("success");
});

const validateNewUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(user);
};

const validateLoginUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(user);
};

app.post("/api/login", async (req, res) => {
  let result = validateLoginUser(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  let user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(400).send("Username not found");
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) {
    res.status(400).send("Incorrect Password");
    return;
  }

  res.send("Success");
});

app.listen(3002, () => {
  console.log("I'm listening");
});
