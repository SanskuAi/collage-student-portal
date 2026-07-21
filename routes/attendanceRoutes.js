const express = require('express')
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware')
const attendanceController = require('../controllers/attendanceController');
const roleMiddleware = require('../middleware/roleMiddleware');
const { route } = require('./authRoutes');

// ONLY TEACHE ATTENDANCE ,MARK
router.post('/mark', authMiddleware, roleMiddleware('teacher'), attendanceController.markAttendance)

// USER/STUDENT ATTENDANCE SEE
router.get('/view', authMiddleware, roleMiddleware('student'), attendanceController.viewAttendance)

// ATTENDACE REPORT (admin/teacher)
router.get('/report', authMiddleware, roleMiddleware('admin', 'teacher') , attendanceController.getAttendance)

module.exports = router