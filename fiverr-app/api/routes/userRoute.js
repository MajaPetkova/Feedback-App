const { deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/jwt");
const router = require("express").Router();


router.delete("/:id",verifyToken, deleteUser)



module.exports= router;