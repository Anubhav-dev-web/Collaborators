import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevent CSRF attack
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 day
  });
};

export default connectDB;
