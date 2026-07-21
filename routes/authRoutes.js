const authController = require('../controllers/authController')
const express = require("express");
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const upload = require('../middleware/upload');

// const {registerUser , loginUser} = require("../controllers/authController")

const router = express.Router()

router.post("/register" ,authController.register);
router.post("/login", authController.login);
router.post('/send-otp' , authController.sendOTP)
router.post('/verify-otp',authController.verifyOTP)

router.post('/register', authController.register)

module.exports = router;