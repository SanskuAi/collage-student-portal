// course anagement 
const getCourseList = async (req,res)=>{
    try{
        // all COurses
        const courses = [
            {
                id:1,
                name:'Math',
                code:'Math-01',
                instructor:'Gr.shrma',
                credits: 4,
                semester:4,
                description:'Advance Math',
                capacity: 60,
                enrolled: 46
            },
            {
                id: 2,
                name: 'Physics',
                code: 'PHY-102',
                instructor: 'Prof. Verma',
                credits: 4,
                semester: 4,
                description: 'Quantum Physics',
                capacity: 50,
                enrolled: 40
              },
              {
                id: 3,
                name: 'Chemistry',
                code: 'CHEM-103',
                instructor: 'Dr. Patel',
                credits: 3,
                semester: 4,
                description: 'Organic Chemistry',
                capacity: 55,
                enrolled: 48
              },
              {
                id: 4,
                name: 'English',
                code: 'ENG-104',
                instructor: 'Ms. Singh',
                credits: 2,
                semester: 4,
                description: 'English Literature',
                capacity: 40,
                enrolled: 38
              },
              {
                id: 5,
                name: 'Computer Science',
                code: 'CS-105',
                instructor: 'Dr. Khan',
                credits: 4,
                semester: 4,
                description: 'Data Structures',
                capacity: 70,
                enrolled: 62
              },
              {
                id: 6,
                name: 'History',
                code: 'HIST-106',
                instructor: 'Prof. Gupta',
                credits: 3,
                semester: 4,
                description: 'Modern History',
                capacity: 45,
                enrolled: 42
              }
        ]

        res.status(200).json({
            success:true ,
            message:'Avaliable Courses',
            data: courses,
            total: courses.length
        }) ;
    } catch(error){
        res.status(500).json({
            success:false ,
            message: 'Error fetching' + error.message
        });
    }
};

const enrollCourse = async (req,res)=>{
    try{
        const userId = req.user.id;
        const {courseId} = req.body ;

        // Validation
        if(!courseId){
            return res.status(400).json({
                success:false,
                message:'Course ID required'
            });
        }

        const avaliableSeats = 20 ;
        if(avaliableSeats <=0){
            return res.status(400).json({
                success:false,
                message:'Seats are not Avaliable'
            }) ;
        }

        // Enrollement record
        const enrollment = {
            userId : userId ,
            courseId : courseId,
            enrollmentDate : new Date(),
            status: 'enrolled'
        } ;

        console.log('student enroled in Course', enrollment);

        res.status(201).json({
            success:true,
            message:'Course successfully enrolled',
            data: enrollment
        })   
    } catch(error){
        res.status(500).json({
            success:false ,
            message:'Enrollent error' + error.message
        })
    } 
}


const getMyCourses = async(req,res)=>{
    try{
        const userId = req.user.id ;

        // Student enrolled courses
        const myCourses = [{
            id: 1,
            name: 'Mathematics',
            code: 'MATH-101',
            instructor: 'Dr. Sharma',
            enrollmentDate: '2024-01-15',
            status: 'active',
            credits: 4,
            attendancePercentage: 90,
            currentGrade: 'A'
          },
          {
            id: 3,
            name: 'Chemistry',
            code: 'CHEM-103',
            instructor: 'Dr. Patel',
            enrollmentDate: '2024-01-15',
            status: 'active',
            credits: 3,
            attendancePercentage: 88,
            currentGrade: 'A-'
          },
          {
            id: 5,
            name: 'Computer Science',
            code: 'CS-105',
            instructor: 'Dr. Khan',
            enrollmentDate: '2024-01-15',
            status: 'active',
            credits: 4,
            attendancePercentage: 95,
            currentGrade: 'A+'
          }
        ];

        // succes error
        res.status(200).json({
            success:true ,
            message:'Your enrolled Corse',
            data:myCourses,
            total: myCourses.length
        }) ;
    } catch(error){  //internal server erro
        res.status(500).json({
            success:false ,
            message: 'Error fetching courses'+ error.message
        })
    }
}

const createCourse = async(req,res)=>{
    try{
        const {name,code,credits,semester,instructor,description,capacity}= req.body;

        // Validatione hai/nahi
        if(!name||!code||!credits|| !semester){
            return res.status(400).json({
                success:false ,
                message:'all are Required'
            })
        }

        // fromat of storing
        const newCourse = {
            id: Date.now(),
            name:name ,
            code:code ,
            credits : credits,
            semester: semester,
            instructor: instructor || 'TND',
            description: description,
            capacity: capacity || 50,
            enrolled: 0,
            createdDate : new Date()
        };
        console.log( 'course created' , newCourse);

        // created error
        res.status(201).json({
            success:true ,
            message:'Course Created  '+ error.message ,
            data: newCourse
        });        
    } catch(error){
        res.status(500).json({
            success:false ,
            message:'Course creation error'+ error.message
        });
    }
}


const deleteCourse = async(req,res)=>{
    try{
        const {courseId} = req.params ;

        if(!courseId){
            return res.status(400).json({
                success:false,
                message:'Course ID required'
            });
        }

        console.log('Cores deleted', courseId); //+ AANI . MAHDHE DIIFRENSE KY AAH

        res.status(200).json({
            success:true ,
            message:'Courses deleted successFUlly',
            courseId: courseId
        })
    }catch(erro){  //SERVER ERROR SHOWS
        res.status(500).json({
success:false ,
message:'Course deletion error SHOWS' +erro.message
        });
    }
}


module.exports={
    getCourseList ,
    enrollCourse,
    getMyCourses,
    createCourse,
    deleteCourse   
}