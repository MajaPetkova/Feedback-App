const { deleteUser } = require("../controllers/gigController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;