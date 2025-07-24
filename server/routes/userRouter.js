import express from "express";
import {register,verifyOTP} from "../controllers/userControllers.js"

const router = express.Router();

router.post("/register",register);
router.post("/otp-verification",verifyOTP)

export default router;
