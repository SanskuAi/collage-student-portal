const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const adminController = require('../controllers/adminController')
const { route } = require('./gradeRoutes')

// all users see only admin
router.get('/users', authMiddleware, roleMiddleware('admin'), adminController.getAllUsers)

// new user create only admin
router.post('/user', authMiddleware, roleMiddleware('admin'), adminController.createUser)

// delete user only admin
router.delete('/user/:userId', authMiddleware , roleMiddleware('admin'), adminController.deleteUser)

// report see only admin
router.get('/reports', authMiddleware, roleMiddleware('admin') , adminController.getReport)

// notice post only admin 
router.post('/notice', authMiddleware, roleMiddleware('admin'), adminController.postNotice)

module.exports = router