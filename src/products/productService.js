import { find, findById, save, update } from "./productRepo.js";

export const getAllProducts = ({ skip = 0, limit = 10 }) => {
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
