const { deleteUser } = require("../controllers/orderController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;