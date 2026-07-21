// Uploaded photot present
// const uploadPhoto = async (req, res, next) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Please upload a photo'
//             });
//         }

//         console.log('Uploaded file:', req.file);

//         res.status(200).json({
//             success: true,
//             message: 'Photo uploaded successfully',
//             fileName: req.file.filename
//         });

//     } catch (error) {
//         next(error);
//     }
// };

// module.exports = {
//     getStudent,
//     updateStudent,
//     uploadPhoto
// };

const getProfile = async (req,res)=>{
    try{
        // req.user-present user data
        const userId = req.user.id;

        // Dummay data
        const student ={
            id : userId,
            name:'Raj',
            email: req.user.email,
            roll:'cs-2022',
            semester:4,
            phone:'325689741',
            address:'Mahaarashtra',
            profilePicture: 'https://via.placeholder.com/150'
        };

        res.status(200).json({
            success: true,
            message:'Student profile',
            data:student
        });

    } catch(error){
        res.status(500).json({
            success:false,
            message:'Error fetching' + error.message
        }) ;
    }
}

const updateProfile = async(req,res)=>{
    try{
        const userId=req.user.id;
        const {name,phone,address}= req.body ;

        // Validation
        if(!name && !phone && !address){
            return res.status(400).json({
                  success:false ,
            message:'Update ke liye kam se kam ek field dena zaroori hai'
            })
           }

           const updateStudent ={
            id: userId,
            name: name|| 'rag',
            phone: phone || '96385274',
            address : address || 'Mumbai'
           }

           console.log('✅ Student profile updated:', updateStudent);

           res.status(200).json({
            success:true ,
            message:'Profile updated',
            data: updateStudent
           })
    } catch(error){
        res.status(500).json({
            success:false ,
            message: 'profile update error found :-' + error.message
        })
    }
}; 

 const getDashboard = async(req,res)=>{
    try {
        const userId = req.user.id ;

        const dashboard = {
            attendance: {
              present: 45,
              absent: 5,
              percentage: 90
            },
            grades: {
              totalSubjects: 6,
              averageScore: 78.5,
              lastExam: 'Midterm',
              lastExamScore: 85
            },
            fees: {
              totalFee: 100000,
              paid: 100000,
              pending: 0,
              status: 'paid'
            },
            courses: {
              enrolled: 6,
              active: 6,
              completed: 2
            }
          };

            res.status(200).json({
                success:true ,
                message: 'Student dashboard',
                data : dashboard
            });
    } catch(error){
        res.status(500).json({
            success:false ,
            message:'Dashboard error'+ error.message
        });
    }
 }

 const getAttendance = async(req,res)=>{
    try{
        const userId = req.user.id

        // Attendance data
        const Attendance ={
            totalClasses: 50,
            classesAttended: 45,
            attendancePercentage: 90,
            subjects: [
              { name: 'Mathematics', attended: 15, total: 16, percentage: 94 },
              { name: 'Physics', attended: 14, total: 16, percentage: 87 },
              { name: 'Chemistry', attended: 16, total: 18, percentage: 89 },
              { name: 'English', attended: 15, total: 15, percentage: 100 },
              { name: 'History', attended: 13, total: 14, percentage: 93 },
              { name: 'Computer Science', attended: 15, total: 16, percentage: 94 }
            ]
          };

          res.status(200).json({
            success:true ,
            message:'Student attendance',
            data:Attendance
          });
    } catch(error){
        res.status(500).json({
            success:false ,
            message:' Attendance error' + error.message
        });
    }
 };

  const getGrades = async (req,res)=>{
    try{
        const userId = req.user.id;

        // Grade result
        const grades = {
            semester: 4,
            subjects: [
              { name: 'Mathematics', marks: 85, maxMarks: 100, grade: 'A' },
              { name: 'Physics', marks: 78, maxMarks: 100, grade: 'B+' },
              { name: 'Chemistry', marks: 82, maxMarks: 100, grade: 'A-' },
              { name: 'English', marks: 88, maxMarks: 100, grade: 'A' },
              { name: 'History', marks: 75, maxMarks: 100, grade: 'B' },
              { name: 'Computer Science', marks: 90, maxMarks: 100, grade: 'A+' }
            ],
            totalMarks: 498,
            outOfMarks: 600,
            percentage: 83,
            cgpa: 3.8
        }

        res.status(200).json({
            success:true,
            message:'student grades' ,
            data: grades
        });
    } catch(error){
        res.status(500).json({  
            success:false ,
            message:'Grade errors'+ error.message
        })
    }
  };

  const getFeeStatus = async(req,res)=>{
    try{
        const userId = req.user.id ;

        // Fees data
        const feeStatus = {
            semester: 4,
            totalFee: 100000,
            paidAmount: 100000,
            pendingAmount: 0,
            status: 'paid',
            paymentHistory: [
              { date: '2024-01-15', amount: 50000, status: 'paid', receipt: 'RCP-001' },
              { date: '2024-02-15', amount: 50000, status: 'paid', receipt: 'RCP-002' }
            ],
            dueDate: '2024-05-31'
        }

        res.status(200).json({
            success:true ,
            message: 'fees staructure'+ error.message
        }) ;
    } catch (error){
            res.status(500).json({
                
            })
    }
  }

  module.exports = {
    getProfile,
    getAttendance,
    getDashboard,
    getFeeStatus,
    updateProfile,
    getFeeStatus,
    getGrades
  }