import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./src/routes/productRoutes.js";
import path from "path";

dotenv.config();

const app = express();

// middleware dasar
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// serve static uploads
app.use("/uploads", express.static(path.join("public/uploads")));

// routes
app.use("/api/products", productRoutes);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI not found in .env");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));
