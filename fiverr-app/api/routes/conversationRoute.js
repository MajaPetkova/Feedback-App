const { getConversations, createConversation, getSingleConversation, updateConversation } = require("../controllers/conversationController");
const verifyToken = require("../middleware/jwt");
const router = require("express").Router();

router.get("/", verifyToken, getConversations);
router.get("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.get("/:id", verifyToken, updateConversation);


module.exports = router;
