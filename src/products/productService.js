import { find, findById, save, update } from "./productRepo.js";
const SKIP = 0;
const LIMIT = 10;
export const getAllProducts = ({ skip = SKIP, limit = LIMIT }) => {
  skip = isNaN(skip) ? SKIP : skip;
  limit = isNaN(limit) ? LIMIT : limit;

  return find({ skip, limit });
};

export const getProductById = (id) => {
  return findById(id);
};

export const addProduct = (product) => {
  return save(product);
};

export const updateProduct = async (product, id) => {
  const updated = await update(product, id);
  if (updated.nModified && updated.ok) {
    return getProductById(id);
  } else return null;
};
