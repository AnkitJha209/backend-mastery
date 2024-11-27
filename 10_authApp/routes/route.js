import express from "express";
import { logIn, signUp } from "../controllers/auth.js";
import { auth, isAdmin, isStudent } from "../middlewares/authentication.js";

export const router = express.Router();

router.post('/sign-up',signUp)
router.post('/log-in',logIn)


router.get('/student', auth, isStudent, (req, res) => {
    res.status(200).json({
        success: true,
        msg: "You are in Student Dashboard"
    })
})

router.get('/admin', auth, isAdmin, (req, res) => {
    res.status(200).json({
        success: true,
        msg: "You are in Admin Dashboard"
    })
})

