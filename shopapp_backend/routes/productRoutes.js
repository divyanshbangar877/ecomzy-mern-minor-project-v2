const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Order = require("../models/Order");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST product (for testing)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  const savedProduct = await product.save();
  res.json(savedProduct);
});



module.exports = router;
