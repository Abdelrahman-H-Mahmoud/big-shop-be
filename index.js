import http from "http";
import app from "./src/app.js";
import mongoose from "mongoose";
import seed from "./seed.js";
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

export default server;
