const ProductModel = require("./productModel");

const find = ({ skip = 0, limit = 10 }) => {
  return ProductModel.find().skip(skip).limit(limit).exec();
};

const findById = (id) => {
  return ProductModel.findById(id);
};

const save = (product) => {
  const newProduct = new ProductModel(product);
  return newProduct.save();
};

const update = (product, id) => {
  return ProductModel.updateOne({ _id: id }, product);
};

module.exports = {
  find,
  findById,
  save,
  update
}