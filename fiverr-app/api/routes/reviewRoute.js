const { createReview, getReviews,deleteReview} = require("../controllers/reviewController");
const verifyToken = require("../middleware/jwt");

const router = require("express").Router();

router.post("/",verifyToken, createReview  );
router.get("/:gigId", getReviews )
router.delete("/:id",verifyToken, deleteReview  )


module.exports= router;