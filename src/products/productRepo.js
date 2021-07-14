import ProductModel from "./productModel.js";

export const find = ({ skip = 0, limit = 10 }) => {
  return ProductModel.find().skip(skip).limit(limit).exec();
};

export const findById = (id) => {
  return ProductModel.findById(id);
};

export const save = (product) => {
  const newProduct = new ProductModel(product);
  return newProduct.save();
};

export const update = (product, id) => {
  return ProductModel.updateOne({ _id: id }, product);
};
