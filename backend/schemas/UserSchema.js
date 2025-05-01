const { Schema } = require("mongoose");

// Define the UserSchema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true, // Ensures the username field is mandatory
      trim: true, // Removes leading/trailing whitespace
    },
    email: {
      type: String,
      required: true, // Ensures the email field is mandatory
      unique: true, // Ensures no duplicate emails
      trim: true, // Removes leading/trailing whitespace
      lowercase: true, // Converts email to lowercase for consistency
    },
    password: {
      type: String,
      required: true, // Ensures the password field is mandatory
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order", // Reference to the "Order" model
      },
    ],
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

module.exports = { UserSchema };
