const { deleteUser } = require("../controllers/messageController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;