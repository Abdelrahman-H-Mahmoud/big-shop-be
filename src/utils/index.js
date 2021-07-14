import mongoose from "mongoose";
export const isValidId = (id) => {
  const ObjectId = mongoose.Types.ObjectId;
  return ObjectId.isValid(id);
};
