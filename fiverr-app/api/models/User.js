const {Schema, model, Types: { ObjectId }} = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  img: { type: String, required: false },
  country: { type: String, required: true },
  phone: { type: String, required: false },
  desc: { type: String, required: false },
  isSeller: { type: Boolean, default: false },
});

const User = model("User", UserSchema);
module.exports = User;
