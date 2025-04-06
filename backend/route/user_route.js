import express from "express";
import { signup, login } from "../controller/user_controller.js"; // ✅ Correct path and filename

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
