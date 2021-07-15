import productModel from "./src/products/productModel.js";
import db from "./data/db.json";
export default async function seed() {
  const size = productModel.estimatedDocumentCount();
  if(size === 0){
    await productModel.insertMany(db.products);
    console.log("Data Inserted");
  }
}