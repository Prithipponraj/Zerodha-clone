require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Missing in the provided code

const { UserModel } = require("../model/UserModel");

module.exports.register = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    const token = jwt.sign({ email: newUser.email }, process.env.secret, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email: user.email }, process.env.secret, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
