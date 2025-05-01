const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchema"); // Update path as needed

// Create the UserModel
const UserModel = model("User", UserSchema); // Use singular, capitalized "User" for model naming

module.exports = { UserModel };
