const uploadGrades = async (req,res)=>{
    try{
        const { studentId , courseId, marks, maxMarks} = req.body ;

        // validt
        if(!studentId || !courseId || marks === undefined || !maxMarks){
            return res.status(400).json({
                success: false ,
                message: 'all are need'
            })
        }
            // mark renge
            if(marks <0 || marks > maxMarks){
                return res.status(400).json({
                    success:false ,
                    message:`mark 0 to ${maxMarks} dentween present`
                });
            }

            // clacutaion
            const percentage = (marks/ maxMarks) *100;
            let grade ;
            if (percentage >= 90) grade = 'A+';
            else if (percentage >= 80) grade = 'A';
            else if (percentage >= 70) grade = 'B+';
            else if (percentage >= 60) grade = 'B';
            else if (percentage >= 50) grade = 'C';
            else grade = 'F';

            const gradeRecord = {
                id: Date.now(),
                studentId : studentId ,
                courseId : courseId,
                marks: marks ,
                maxMarks : maxMarks ,
                percentage : percentage.toFixed(2),
                grade: grade ,
                uploadedBy : req.user.id ,
                uploadedDate : new Date()
            }

            console.log('Grade uploaded', gradeRecord);

            res.status(201).json({
                success:true ,
                message: 'Grade successfully upploadd', 
                data : gradeRecord
            })
        }catch (error) {
            res.status(500).json({
              success: false,
              message: 'Grade upload mein error: ' + error.message
            });
    }};

    const viewGrades = async (req,res)=>{
        try{
            const userId = req.user.id ;
            const {semester} = req.query;

            // grade student
            const grade={
                semester: semester || 4,
                subjects: [
                  { courseId: 1, name: 'Mathematics', marks: 85, maxMarks: 100, percentage: 85, grade: 'A' },
                  { courseId: 2, name: 'Physics', marks: 78, maxMarks: 100, percentage: 78, grade: 'B+' },
                  { courseId: 3, name: 'Chemistry', marks: 82, maxMarks: 100, percentage: 82, grade: 'A-' },
                  { courseId: 4, name: 'English', marks: 88, maxMarks: 100, percentage: 88, grade: 'A' },
                  { courseId: 5, name: 'Computer Science', marks: 90, maxMarks: 100, percentage: 90, grade: 'A+' }
                ],
                totalMarks: 423,
                outOfMarks: 500,
                totalPercentage: 84.6,
                cgpa: 3.85
            } ;

            res.status(200).json({
                success: true ,
                message: 'Student grades' ,
                data: grade
            }) ;
        } catch (error){
            res.status(500).json({
                success:false ,
                message: 'Grade fetch error' + error.message
            });
        }
    }

    const downloadReportCard= async (req,res)=>{
        try{
            const userId = req.user.id 
            const {semester}= req.query

            const reportCard = {
                studentId: userId,
      studentName: 'Raj Kumar',
      semester: semester || 4,
      academicYear: '2023-2024',
      subjects: [
        { name: 'Mathematics', marks: 85, grade: 'A', credits: 4 },
        { name: 'Physics', marks: 78, grade: 'B+', credits: 4 },
        { name: 'Chemistry', marks: 82, grade: 'A-', credits: 3 },
        { name: 'English', marks: 88, grade: 'A', credits: 2 },
        { name: 'Computer Science', marks: 90, grade: 'A+', credits: 4 }
      ],
      totalCredits: 17,
      gpa: 3.85,
      remarks: 'Excellent Performance',
      generatedDate: new Date()
            };

            console.log('Report card ', reportCard);

            res.status(200).json({
                success:true , 
                message: 'report card genrated' ,
                data: reportCard,
                fileName : `reportCard_${userId}_${semester}.pdf`
            })
            } catch(error){
                res.status(500).json({
                    success:false,
                    message:'Report card genration error'+ error.message
                })
            }
    }

    module.exports= {
        uploadGrades ,
        viewGrades, downloadReportCard
    }
 