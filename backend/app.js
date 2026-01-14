import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./src/routes/productRoutes.js";
import path from "path";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// static uploads
app.use("/uploads", express.static(path.join("public/uploads")));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(() =>
      console.log("⚠️ MongoDB not connected, API running without DB")
    );
} else {
  console.log("⚠️ MONGO_URI not set, skipping MongoDB connection");
}
