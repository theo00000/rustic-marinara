import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { connectDB } from "../src/config/db.js";

import routes from "../src/routes/index.js";
// atau import authRoutes, userRoutes, dll

const app = express();

app.use(cors());
app.use(express.json());

await connectDB();

// routes
app.use("/api", routes);

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", platform: "vercel" });
});

export default serverless(app);
