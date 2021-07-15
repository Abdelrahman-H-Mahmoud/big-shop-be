const express = require("express")
const { productRouter } = require("./products")
const { errorMiddleWare } = require("./middlewares");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/products", productRouter);

app.use(errorMiddleWare);
module.exports = app;
