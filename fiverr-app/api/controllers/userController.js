
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user)
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(401).send("You are not authenticated");
  }

  jwt.verify(token, process.env.JWT_KEY, async(err, payload) => {
    // res.send(payload)
    if (payload.id !== user._id.toString()) {
     return res.status(403).send("You can delete only your account")
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted")
  });
};

module.exports = {
  deleteUser,
};
