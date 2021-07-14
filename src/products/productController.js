import express from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
} from "./productService.js";
import { NotFoundError, BadRequestError } from "../error.utils.js";
import { checkIdMiddleWare } from "../middlewares/index.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { skip, limit } = req.query;
  const products = await getAllProducts({ skip, limit });
  res.json(products);
});

router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    let newProduct = await addProduct(body);
    return res.status(201).json(newProduct);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", checkIdMiddleWare, async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await getProductById(id);
    if (!product || Object.values(product).length <= 0) {
      return next(new NotFoundError("Not Found"));
    }
    return res.json(product);
  } catch (err) {
    return next(err);
  }
});

router.put("/:id", checkIdMiddleWare ,async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    let updatedProduct = await updateProduct(body, id);
    if (updatedProduct) return res.status(200).json(updatedProduct);
    else throw new BadRequestError("Unable to update the product");
  } catch (err) {
    return next(err);
  }
});

export default router;
