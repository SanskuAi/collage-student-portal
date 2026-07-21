const { getAttendance } = require("./studentController");

// ATTENDANCE MANAGEMENT FXT.
                //TEACHE ATTENDACE MARK LIKE PREST. , ABSE..
const markAttendance = async (req,res)=>{
    try{
        const {studentId,courseId,date,status}= req.body ;

        // Validation
        if(!studentId || !courseId ||!date ||!status){
            return res.status(400).json({
                success:false ,
                message:'All are required'
            });
        }

        // 
        if(!['present', 'absent','late'].includes(status)){
            return res.status(400).json({
                success:false,
                message:' Staus only present, absent,or late '
            })
        };

        const attendanceRecord = {
            id :Date.now(), //DIIFRANCE KY DOGHTA 
            studentId: studentId,
            courseId:courseId,
            date:date,
            status:status,
            markedBy: req.user.id,
            markedAt: new Date() //YAAT PN
        }

        console.log('attendance marked', attendanceRecord);

        res.status(201).json({
            success:true ,
            message:'Attendace succedssfully marked' ,
            data: attendanceRecord
        });
    }catch(error){
        res.status(500).json({
            success:false ,
            message:'Attendace markin error'+ error.message
        });
    }
}


            //STUDENT ATTENDANCE CHECK
const viewAttendance = async (req,res)=>{
    try{
        const userId = req.user.id;
        const {courseId} = req.query;

        // Course-wise attendance
        const attendanceData = {
            courseId : courseId || 1,
            courseName : 'Math',
            totalClasses : 20,
            classesAttended: 27,
      classesAbsent: 3,
      attendancePercentage: 90,
      attendanceRecords: [  { date: '2024-01-15', status: 'present' },
        { date: '2024-01-16', status: 'present' },
        { date: '2024-01-17', status: 'absent' },
        { date: '2024-01-18', status: 'present' },
        { date: '2024-01-19', status: 'late' },
        { date: '2024-01-22', status: 'present' }
      ]
        }

        res.status(200).json({
            success:true ,
            message:'Attendance records',
            data:attendanceData
        });
    }catch(error){
        res.status(500).json({
            success:false ,
            message:'Attendance fetch main erro' + error.message
        })
    }
}

        //ATTENDANCE REPORT GENRATED
const getAttendanceReport = async(req,res)=>{
    try{
        const{courseId , semester}= req.query

        // Attendance report
        const report = {
            semester: semester || 4,
            courseId: courseId || 1,
            totalStudents: 45,
            averageAttendance: 88.5,
            studentSummary: [
              { studentId: 1, name: 'Raj Kumar', attendance: 90, status: 'good' },
              { studentId: 2, name: 'Priya Singh', attendance: 85, status: 'good' },
              { studentId: 3, name: 'Amit Patel', attendance: 72, status: 'warning' },
              { studentId: 4, name: 'Neha Verma', attendance: 65, status: 'poor' },
              { studentId: 5, name: 'Arjun Gupta', attendance: 92, status: 'excellent' }
            ],
            generatedDate: new Date()
          };

          res.status(200).json({
                    success:true ,
                    message:'Atttendance report',
                    data: report
          });
    } catch(error){
        res.status(500)({
            success:false ,
            message: 'Report generation error'+ error.message
        })
    };
}

module.exports = {
    markAttendance,
    viewAttendance ,
    getAttendance
}