const { deleteUser } = require("../controllers/userController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;