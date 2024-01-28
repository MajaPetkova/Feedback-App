const Gig = require("../models/Gig");
const Review = require("../models/Review");
const createError = require("../utils/createError");

const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(403, "Sellers can't create a review"));
  }
  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (review) {
      return next(
        createError(403, "You already created a review for this gig")
      );
    }
    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

const getReviews = async (req, res, next) => {
  const reviews = await Review.find({ gigId: req.params.gigId });
  res.status(200).send(reviews);
  try {
  } catch (err) {
    next(err);
  }
};
const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createReview,
  getReviews,
  deleteReview,
};
