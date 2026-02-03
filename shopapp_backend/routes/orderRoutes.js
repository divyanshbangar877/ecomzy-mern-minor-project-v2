const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


router.post("/", async (req, res) => {
  try {
    console.log("Incoming order:", req.body); // 👈 DEBUG

    const order = new Order({
      items: req.body.items,
      totalAmount: req.body.totalAmount,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Order save failed" });
  }
});

module.exports = router;