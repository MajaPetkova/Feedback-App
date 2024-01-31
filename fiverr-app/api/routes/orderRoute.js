const { createOrder } = require("../controllers/orderController");
const verifyToken = require("../middleware/jwt");

const router = require("express").Router();

router.post("/:gigId",verifyToken, createOrder)



module.exports= router;