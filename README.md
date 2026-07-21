# collage-student-portal

student-portal/
├── config/
│   ├── db.js
│   └── env.js
│
├── controllers/
│   ├── authController.js       # Register, Login, Send OTP, Verify OTP
│   ├── studentController.js
│   ├── courseController.js
│   ├── attendanceController.js
│   ├── gradeController.js
│   ├── feeController.js
│   └── adminController.js
│
├── models/
│   ├── User.js                  # isVerified field add hoga yahan
│   ├── Otp.js                   # NEW → OTP code + expiry time store karega
│   ├── Student.js
│   ├── Course.js
│   ├── Attendance.js
│   ├── Grade.js
│   ├── Fee.js
│   └── Notice.js
│
├── routes/
│   ├── authRoutes.js            # /register, /send-otp, /verify-otp, /login
│   ├── studentRoutes.js
│   ├── courseRoutes.js
│   ├── attendanceRoutes.js
│   ├── gradeRoutes.js
│   ├── feeRoutes.js
│   └── adminRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── errorHandler.js
│   └── upload.js
│
├── utils/
│   ├── generateToken.js
│   ├── generateOTP.js           # NEW → random 6-digit OTP banayega
│   ├── sendEmail.js             # NEW → Nodemailer se email bhejega
│   └── validators.js
│
├── uploads/
├── public/
│   ├── css/
│   └── js/
│
├── .env                          # EMAIL_USER, EMAIL_PASS, JWT_SECRET yahan
├── .gitignore
├── app.js
├── server.js
└── package.json

# use of Folders
config/       → Database connection settings (db.js)
controllers/  → Actual logic (register, login, OTP send/verify)
models/       → Database schema (User.js, Otp.js waghera)
routes/       → Sare URLs define honge yahan
middlewares/  → Beech mein check karne wale functions (login check waghera)
utils/        → Chote helper functions (OTP generate, email bhejna, token banana)
uploads/      → User ki uploaded files (profile photo, documents)
public/       → CSS aur JS jaisi static files
.env          → Secret info — EMAIL_USER, EMAIL_PASS, JWT_SECRET, DB_URL
.gitignore    → Git ko batata hai kaunse files ignore karni hain
app.js        → Express app setup (middleware, routes jode jayenge)
server.js     → Server start karne wali main file


┌─────────────────────────────────────┐
│         AUTHENTICATION              │
├─────────────────────────────────────┤
POST   /api/auth/register             Register new user
POST   /api/auth/send-otp             Send OTP to email
POST   /api/auth/verify-otp           Verify OTP
POST   /api/auth/login                User login (get JWT token)
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           STUDENT FEATURES          │
├─────────────────────────────────────┤
GET    /api/student/profile           Get student profile
PUT    /api/student/profile           Update profile
GET    /api/student/dashboard         Dashboard overview
GET    /api/student/attendance        View attendance %
GET    /api/student/grades            View marks/grades
GET    /api/student/fee-status        View fee status
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│          COURSE MANAGEMENT          │
├─────────────────────────────────────┤
GET    /api/course/list               List all courses
POST   /api/course/enroll             Enroll in course
GET    /api/course/my-courses         My enrolled courses
POST   /api/course/create             Create course (admin)
DELETE /api/course/:id                Delete course (admin)
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         ATTENDANCE TRACKING         │
├─────────────────────────────────────┤
POST   /api/attendance/mark           Mark attendance (teacher)
GET    /api/attendance/view           View attendance (student)
GET    /api/attendance/report         Attendance report
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│          GRADES/RESULTS             │
├─────────────────────────────────────┤
POST   /api/grade/upload              Upload marks (teacher)
GET    /api/grade/view                View grades (student)
GET    /api/grade/report              Download report card
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│          FEE MANAGEMENT             │
├─────────────────────────────────────┤
GET    /api/fee/status                Fee status (student)
GET    /api/fee/history               Payment history
POST   /api/fee/pay                   Initiate payment
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│