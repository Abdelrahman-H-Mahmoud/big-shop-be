const mongoose = require("mongoose");
const isValidId = (id) => {
  const ObjectId = mongoose.Types.ObjectId;
  return ObjectId.isValid(id);
};

module.exports = {
  isValidId
}