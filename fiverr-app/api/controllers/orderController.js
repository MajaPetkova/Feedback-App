const Gig = require("../models/Gig");
const Order = require("../models/Order");
const createError = require("../utils/createError");

const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent:"temporary"
    });
    await newOrder.save()
    res.status(200).send("successful")
  } catch (err) {
    next(err)
  }
};

module.exports = {
  createOrder,
};
