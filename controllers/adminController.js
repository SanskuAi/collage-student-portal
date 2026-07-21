const getAllUsers = async (req, res)=>{
    try{
        const{role , page= 1, limit= 10} = req.query ;


            const users = [
                { id: 1, name: 'Raj Kumar', email: 'raj@gmail.com', role: 'student', createdAt: '2024-01-10' },
                { id: 2, name: 'Priya Singh', email: 'priya@gmail.com', role: 'student', createdAt: '2024-01-11' },
                { id: 3, name: 'Dr. Sharma', email: 'sharma@gmail.com', role: 'teacher', createdAt: '2024-01-05' },
                { id: 4, name: 'Prof. Verma', email: 'verma@gmail.com', role: 'teacher', createdAt: '2024-01-06' },
            {id: 5 , name: 'Sansko', email : 'admin@gmial.com', role:'admin', createdAt:'2023-12-5'}
            
        ]
// by ROLE FILTER 
            const filtered = role? users.filter(u=>u.role === role): users;

            res.status(200).json({
                success: true ,
                message: 'All users',
                data : filtered,
                total : filtered.length,
                page: page ,
                limit : limit
            });
    }catch (error){
        res.status(500).json({
            success:false ,
            message: 'Users fetch error '+ error.message
        }) ;
    }
}

const createUser = async (req,res)=>{
    try{
        const {email, name, password,role} = req.body ;

        // Validation
        if(!name || !email || !password ||!role){
            return res.status(400).json({
                success:false ,
                message: 'All are required'
            });
        }
        const newUser = {
            id: Date.now(),
            name: name ,
            email : email ,
            role : role,
            createdAt : new Date(),
            status : 'active'
        };

        console.log('user  created', newUser);

        res.status(201).json({
            success:true ,
            message:'Usre SuccessFully created' ,
            data: newUser
        });
    } catch (error){
        res.status(500).json({
            success: false ,
            message : 'Usre creation error ' + error.message
        })
    };
}

const deleteUser  =  async(req,res)=>{
    try{
        const {userId} = req.params ;

        if(!userId) {  
            // /                Bad request/ 
            return res.status(400).json ({
                success: false ,
                message: 'user Id required'
            });
        }

        console.log('Deleted user-', userId);

        res.status(200).json({
            success: true ,
            message: 'user succcessFully deleted',
            userId : userId
        });   
    } catch (error){
        res.status(500).json({
            success : false ,
            message: 'User deletion error' + error.message
        });
    }
}


const getReport = async (req,res)=>{
    try{
        const {type = 'overview'} = req.query

        // admin report
        const report = {
            type: type,
            totalStudents: 245,
            totalTeachers: 32,
            totalCourses: 18,
            totalFeeCollected: 2450000,
            averageAttendance: 87.5,
            averageGPA: 3.45,
            topPerformers: [
              { name: 'Raj Kumar', gpa: 3.95 },
              { name: 'Priya Singh', gpa: 3.88 }
            ],
            lowAttendance: [
              { name: 'Amit Patel', attendance: 65 },
              { name: 'Neha Verma', attendance: 72 }
            ],
            generatedAt: new Date()
        };

        // sucessfull error
        res.status(200).json({
                success: true ,
                message:'Admin report',
                data: report
        })
    } catch (error){   //Bad request error
        res.status(500).json({
            success:false,
            message:'Report genreation error'+ error.message
        });
    }
};

const postNotice = async(req,res)=>{
    try{
        const {title, content, audience} = req.body;

        if(!title || !content) {
            return res.status(400).json({ //BAD REQUEST
                success: false,
                message:'Both are imporatnt'
            });
        }

        const notice ={
            id: Date.now() ,
            title : title,
            content: content,
            audience: audience || 'all', // all, students, teachers
            postedBy: req.user.id,
            postedAt: new Date(),
            status: 'published'
        };

        console.log('notice posted', notice);
        
        res.status(201).json({ //CREATTED ERROR
            success:true ,
            message:'Notice posted successFully' ,
            data : notice
        })
    } catch(error){
        res.status(500).json({
            success:false,
            message :'Noticed posting error ' + error.message
        })
    }
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getReport, 
    postNotice
  };
