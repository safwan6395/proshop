import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Resource not found");
  }
  return res.json(product);
});

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});

  res.json(products);
});
