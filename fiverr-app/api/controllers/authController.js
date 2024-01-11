const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({
      // username: req.body.username,
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
};
const login = async (req, res) => {
  try {
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
};
const logout = (req, res) => {
  try {
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
};

module.exports = {
  register,
  login,
  logout,
};
