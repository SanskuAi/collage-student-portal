const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const gradeController = require('../controllers/gradeController');

// POST /api/grade/upload - Marks upload karo (sirf teacher)
router.post('/upload', authMiddleware, roleMiddleware('teacher'), gradeController.uploadGrades);

// GET /api/grade/view - Apne marks dekho (sirf student)
router.get('/view', authMiddleware, roleMiddleware('student'), gradeController.viewGrades);

// GET /api/grade/report - Report card download karo (sirf student)
router.get('/report', authMiddleware, roleMiddleware('student'), gradeController.downloadReportCard);


module.exports = router;