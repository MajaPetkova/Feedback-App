const { createOrder, getOrders } = require("../controllers/orderController");
const verifyToken = require("../middleware/jwt");

const router = require("express").Router();

router.post("/:gigId",verifyToken, createOrder);
router.get("/", verifyToken, getOrders)



module.exports= router;