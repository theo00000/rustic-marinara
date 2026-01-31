import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });

    isConnected = true;

    console.log("✅ MongoDB connected:", conn.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err; // ❗ jangan exit
  }
};

export default connectDB;
