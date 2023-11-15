const mongoose = require("mongoose");

const startMongo = async () => {
  mongoose
    .connect("mongodb://localhost/user-auth")
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((error) => console.log("Couldn't connect to mongodb", error));
};

module.exports = startMongo;
