const { createMessage, getMessages } = require("../controllers/messageController");
const verifyToken = require("../middleware/jwt");
const router = require("express").Router();


router.post("/", verifyToken, createMessage)
router.get("/:id", verifyToken, getMessages)



module.exports= router;