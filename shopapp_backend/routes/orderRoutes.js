const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// router.post("/", async (req, res) => {
//   try {
//     console.log("Incoming order:", req.body); // 👈 DEBUG

//     const order = new Order({
//       items: req.body.items,
//       totalAmount: req.body.totalAmount,
//     });

//     const savedOrder = await order.save();
//     // res.status(201).json(savedOrder);
//     res.json({
//   order: {
//     _id: order._id,
//     items: order.items,
//     totalAmount: order.totalAmount,
//     createdAt: order.createdAt,
//   },
// });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Order save failed" });
//   }
// });


router.post("/", async (req, res) => {
  try {
    console.log("Incoming order:", req.body);

    const order = new Order({
      items: req.body.items,
      totalAmount: req.body.totalAmount,
    });

    const savedOrder = await order.save();

    res.status(201).json({
      order: {
        _id: savedOrder._id,
        items: savedOrder.items,
        totalAmount: savedOrder.totalAmount,
        createdAt: savedOrder.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Order save failed" });
  }
});
module.exports = router;
