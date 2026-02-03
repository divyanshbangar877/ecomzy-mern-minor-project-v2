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

// router.post("/", async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     const savedOrder = await newOrder.save();
//     res.status(201).json(savedOrder);
//   } catch (err) {
//     res.status(500).json({ error: "Order save failed" });
//   }
// });
// router.post("/", async (req, res) => {
//   try {
//     console.log("Incoming order:", req.body); // 👈 DEBUG

//     const order = new Order({
//       items: req.body.items,
//       totalAmount: req.body.totalAmount,
//     });

//     const savedOrder = await order.save();
//     res.status(201).json(savedOrder);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Order save failed" });
//   }
// });

module.exports = router;
