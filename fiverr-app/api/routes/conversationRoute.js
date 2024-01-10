const { deleteUser } = require("../controllers/conversationController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;