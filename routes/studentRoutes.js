const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const upload = require('../middleware/upload')
const studentController = require('../controllers/studentController')
const { request } = require('../app')
// const studentController = require('../controllers/studentController');

// router.post('/upload-photo', upload.single('photo'), studentController.uploadPhoto);


// router.get('/profile', authMiddleware, studentController.getProfile)

// router.get('/admin/dashboard', authMiddleware, roleMiddleware('admin'), adminController.getDashboard)

// router.post('/upload-photo', authMiddleware, upload.single('photo'), studentController.uploadPhoto)

console.log('authMiddleware:', typeof authMiddleware);
console.log('upload:', typeof upload);
console.log('upload.single:', typeof upload.single);
console.log('uploadPhoto:', typeof studentController.uploadPhoto);


// Sab routes ko authentication chahiye
// aur sirf 'student' role wale users access kar sakte hain

// GET /api/student/profile - Profile dekho
router.get('/profile', authMiddleware, roleMiddleware('student'), studentController.getProfile);

// PUT /api/student/profile - Profile update karo
router.put('/profile', authMiddleware, roleMiddleware('student'), studentController.updateProfile);

// GET /api/student/dashboard - Dashboard overview
router.get('/dashboard', authMiddleware, roleMiddleware('student'), studentController.getDashboard);

// GET /api/student/attendance - Attendance % dekho
router.get('/attendance', authMiddleware, roleMiddleware('student'), studentController.getAttendance);

// GET /api/student/grades - Marks dekho

// GET /api/student/fee-status - Fee status dekho
router.get('/fee-status', authMiddleware, roleMiddleware('student'), studentController.getFeeStatus);

router.get('/grades', authMiddleware, roleMiddleware('student'), studentController.getGrades);


module.exports = router;