const productModel = require("./src/products/productModel.js");
const db = require("./data/db.json");
async function seed() {
  const size = await productModel.estimatedDocumentCount();
  if (size === 0) {
    await productModel.insertMany(db.products);
    console.log("Data Inserted");
  }
}

module.exports = seed;