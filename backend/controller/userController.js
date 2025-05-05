require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/UserModel");

module.exports.register = async (req, res) => {
  try {
    console.log("Register Request Body:", req.body);

    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      console.log("Register Error: Email already exists:", req.body.email);
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
    console.log("New User Saved:", savedUser);

    const token = jwt.sign({ email: newUser.email }, process.env.secret, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("Login Attempt:", req.body);

    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      console.error(`Login Error: No user found for email ${req.body.email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    console.log("Stored Password Hash:", user.password);

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      console.error(`Login Error: Incorrect password for email ${req.body.email}`);
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email: user.email }, process.env.secret, { expiresIn: "1h" });
    console.log("Login Successful:", user.email);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// const bcrypt = require("bcryptjs");

// // Stored hash from your database
// const storedHash = "$2a$10$Rn14rWk3PZgdvbCkSfora.seDjcOLAAJY.I/8zVYDh9WPjDfFqKYG";

// // Plain-text password entered during login
// const plainTextPassword = "Tester@123"; // Replace with the actual password you used

// (async () => {
//   try {
//     // Verify if the entered password matches the stored hash
//     const isMatch = await bcrypt.compare(plainTextPassword, storedHash);
//     console.log("Password Match:", isMatch ? "Yes" : "No");
//   } catch (error) {
//     console.error("Error during password comparison:", error);
//   }
// })();
