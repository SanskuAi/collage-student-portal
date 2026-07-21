const express = require('express')
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const feeController = require('../controllers/feeController')

// fees status (ONLY STUDENT)
router.get('/status', authMiddleware, roleMiddleware('student'), feeController.getFeeStatus)

// paymnet history (ONLY STUDENT)
router.get('/history', authMiddleware,roleMiddleware('student'), feeController.getPaymentHistory)

// payment initiate karo (only student)
router.post('/pay', authMiddleware, roleMiddleware('student'), feeController.intiatePayment)

module.exports = router