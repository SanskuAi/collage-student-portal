const express = require('express')
const router = express.Router()

const  authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const courseCotroller = require('../controllers/courseCotroller')
const { route } = require('./authRoutes')

// all corses see
router.get('/list' , courseCotroller.getCourseList)

// couse enroole volunter
router.post('/enroll' ,authMiddleware , roleMiddleware('student'), courseCotroller.enrollCourse)

// youre  see ENROLLE COURSE (only student)
router.get('/my-courses' , authMiddleware, roleMiddleware('student'), courseCotroller.getMyCourses)

// Neew corse make only [ADMIN]
router.post('create' , authMiddleware , roleMiddleware('admin') , courseCotroller.createCourse)

// Delete course
router.delete('/:cpotseId' , authMiddleware , roleMiddleware('admin') , courseCotroller.deleteCourse)

module.exports = router