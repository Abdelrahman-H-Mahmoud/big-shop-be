import express from "express";
import productRouter from "./products/index.js";
import { errorMiddleWare } from "./middlewares/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

app.use(errorMiddleWare);
export default app;
