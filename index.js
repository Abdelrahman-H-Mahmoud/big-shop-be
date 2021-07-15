const http = require("http");
const app = require("./src/app.js");
const mongoose = require("mongoose");
const seed = require("./seed.js");
const server = http.createServer(app).listen(3000, async () => {
  console.log("App is running");
  mongoose
    .connect("mongodb://localhost:27017/big-shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Db Connected");
      seed();
    });
});

module.exports = server;
