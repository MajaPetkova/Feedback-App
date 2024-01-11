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
    const user= await User.findOne({username:req.body.username});
    if(!user){
       return res.status(404).send("User not found")
    }
    const isCorrect = bcrypt.compare(req.body.password, user.password )
    if(!isCorrect){
      return res.status(400).send("Username or password are not correct")
    }
    const {password, ...info} = user._doc;
    res.status(200).send(info)
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
