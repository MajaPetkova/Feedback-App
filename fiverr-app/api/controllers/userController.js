const User = require("../models/User");

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  // res.send(payload)
  if (req.userId !== user._id.toString()) {
    return res.status(403).send("You can delete only your account");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Your account has been deleted");
};

module.exports = {
  deleteUser,
};
