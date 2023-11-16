const express = require("express");
const bodyParser = require("body-parser");
const startMongo = require("./db");
const Joi = require("joi");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("./user");
let currentUser;

startMongo();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/signup", async (req, res) => {
  const result = validateUser(req.body);
  console.log(result);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  if (!(await validateUnique(res, req.body.username))) {
    return;
  }

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  res.send("success");
});

app.post("/api/login", async (req, res) => {
  const result = validateLoginUser(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const user = await User.findOne({ username: req.body.username });

  if (!user) {
    return res.status(400).send("Username not found");
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.status(400).send("Incorrect Password!");

  currentUser = user;
  res.send("Success");
});

const validateUnique = async (res, username) => {
  const user = await User.findOne({ username: username });

  if (user) {
    res.status(400).send("Error duplicate user");
    return false;
  }
  return true;
};

const validateUser = (user) => {
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

app.listen(3002, () => {
  console.log("I'm listening");
});
