import { Router } from "express";
const router = Router();

// Sample route to get all users
router.get("/", (req, res) => res.json({ id: 1, email: "user@example.com" }));
export default router;