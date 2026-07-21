const express = require("express");

const app = express();

const PORT = 3000;

const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

// Middleware
app.use(express.json());
      //html form data understand
        app.use(express.urlencoded({extended:true})) 
// Static files
app.use(express.static("public"));

// Routes
app.use(authRoutes);




// ROUTES
app.use('/api/auth' ,require('./routes/authRoutes'))
app.use('/api/student', require('./routes/studentRoutes'))
// Home page
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/pages/index.html");
// });
                // ROOOT URLs
            app.get("/", (req,res)=>{
                res.send("Student Portsl API runing")
            })



// Login page
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
});

// Register page
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/pages/register.html");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// MIDDLWARE Import
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')
// const errorHandler = require('./middleware/errorHandler')
const upload = require('./middleware/upload') 




app.use(errorHandler)
app.use('/api/course' , require('./routes/courseRoutes'))
app.use('/api/attendance', require('./routes/attendanceRoutes'))
app.use('/api/grade' , require('./routes/gradeRoutes'))
app.use('/api/fee', require('./routes/feeRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))
module.exports = app