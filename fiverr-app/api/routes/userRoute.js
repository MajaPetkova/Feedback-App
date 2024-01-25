const { deleteUser, getUser } = require("../controllers/userController");
const verifyToken = require("../middleware/jwt");
const router = require("express").Router();


router.delete("/:id",verifyToken, deleteUser)
router.get("/:id",verifyToken, getUser)




module.exports= router;