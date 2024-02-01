const Conversation = require("../models/Conversation");

const getConversations = async (req, res) => {};


const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};


const getSingleConversation = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};


const updateConversation = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getConversations,
  createConversation,
  getSingleConversation,
  updateConversation,
};
