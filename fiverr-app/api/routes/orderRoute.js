const { getOrders, intent } = require("../controllers/orderController");
const verifyToken = require("../middleware/jwt");

const router = require("express").Router();

// router.post("/:gigId",verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent )



module.exports= router;