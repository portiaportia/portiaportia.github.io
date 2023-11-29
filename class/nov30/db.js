const mongoose = require("mongoose");

const startMongo = async () => {
  mongoose
    .connect(
      "mongodb+srv://portiaportia:EyHXaKhndBmhv5Sa@data.ng58qmq.mongodb.net/"
    )
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((error) => console.log("Couldn't connect to mongodb", error));
};

module.exports = startMongo;
