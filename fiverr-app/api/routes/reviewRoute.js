const { deleteUser } = require("../controllers/reviewController");

const router = require("express").Router();

router.get("/test", deleteUser)



module.exports= router;