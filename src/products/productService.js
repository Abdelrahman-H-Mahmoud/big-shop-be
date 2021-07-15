const { find, findById, save, update } = require("./productRepo");
const SKIP = 0;
const LIMIT = 10;
const getAllProducts = ({ skip = SKIP, limit = LIMIT }) => {
  skip = isNaN(skip) ? SKIP : skip;
  limit = isNaN(limit) ? LIMIT : limit;

  return find({ skip, limit });
};

const getProductById = (id) => {
  return findById(id);
};

const addProduct = (product) => {
  return save(product);
};

const updateProduct = async (product, id) => {
  const updated = await update(product, id);
  if (updated.nModified && updated.ok) {
    return getProductById(id);
  } else return null;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct
}