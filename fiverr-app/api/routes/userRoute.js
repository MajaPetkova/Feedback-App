const { deleteUser } = require("../controllers/userController");
const router = require("express").Router();


router.delete("/:id", deleteUser)



module.exports= router;