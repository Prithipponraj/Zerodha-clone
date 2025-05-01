require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UserModel");

module.exports.register = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the incoming data for debugging

    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      console.log("User exists:", existingUser);
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log("Hashed Password:", hashedPassword);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log("User Saved:", savedUser);

    const token = jwt.sign({ email: newUser.email }, process.env.secret);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Register Error:", error); // Log the entire error object
    res.status(500).json({ error: "Internal server error" });
  }
};




module.exports.login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.secret);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
