import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectToDatabase() {
  try {
    mongoose.connect(process.env.MONOGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}
