const bcryptjs = require('bcryptjs')
const  jwt = require('jsonwebtoken')

const { genrateToken } = require('../utlis/generateToken');

require('dotenv').config()
 

// module.exports = 

// REGISTREATION
const register =  async (req , res)=>{
    try{
        const {email,name,password,role} = req.body ;

        if(!email || !password || !name || !role) {
            return res.status(400).json({
                success:false ,
                message:' All are required '
            }) ;
        } ;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success:false ,
                message:'Valide email Enter'
            })
        }

        if(password.length < 6) {
            return res.status(400).json({
                successa:false ,
                message: 'password Length Increse'
            }) ;
        };

        const hashedPassword = await bcryptjs.hash(password, 10)

        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: hashedPassword,
            role:role,
            isVerified: false,
            createdAt: new Date()
        };

        console.log('user Regeister' ,  newUser.message);

        res.status(201).json ({
            success:true,
            message:'Regisration SuccesFully ',
            user:{
                id:newUser.id,
                name: newUser.name,
                email:newUser.email ,
                role : newUser.role
            }
        });
    }  
      catch(erro){
        res.status(500).json({
            success:false,
            message:"mein error" + error.message
        })
      }
}

// OTP 
const sendOTP = async (req,res)=>{
    try{
        const {email} = req.body

        if(!email) {
            return res.status(400).json({
                success:false ,
                message:'Email in inportant'
            })
        } ;

        const otp = Math.floor(10000 + Math.random()* 900000).toString()
        const otpExpiry =  new Date(Date.now()+ 5*60*1000)

        console.log('OTP genrated' , email ,'OTP:' , otp);

        res.status(200).json({
            success:true ,
            message:'OTP sneded',
            otpForDevelopment : otp
        }) 
    } 
    catch (erro) {
        res.status(500).json({
            success: false ,
            message:'OTP sending error'+ erro.message
        }) ;
    }
}

const verifyOTP = async (req ,res)=>{
    try{
        const {email , otp} = req.body ;

        if(!email|| !otp){
            return res.status(400).json({
                success:false ,
                message:'BOTH are importent'
            })
        }

        console.log('OTP verifired' , email);
        
        res.status(200).json({
            success: true,
            message:"Email verifyed , Otp verify Pending"
        })
    } catch (erro){
        res.status(500).json({
            successa:'OTP veriyed'+ erro.message
        })
    }
}

//  Login FXT.
const login = async (req, res) => {
    try {
      const { email, password } = req.body; // Data atken by BODY
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email aur password zaroori hain'
        });
      }
  
      const user = {
        id: 1,
        name: 'Test User',
        email: email,
        password: await bcryptjs.hash('password123', 10),
        role: 'student',
        isVerified: true
      };

      console.log(user);
      
  
                    // Email Verifacation
      if (!user.isVerified) {
        return res.status(401).json({
          success: false,
          message: 'Pehle email verify karo OTP se'
        });
      }
  
      const isPasswordValid = await bcryptjs.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Galat password'
        });
      }
  
      // const token = jwt.sign(
      //   { id: user.id, email: user.email, role: user.role },
      //   process.env.JWT_SECRET || 'secret_key',
      //   { expiresIn: '7d' }
      // );
  

          // Generate JWT
          const token = genrateToken(
            user.id,
            user.email,
            user.role
        );
      console.log('✅ User logged in:', email);
  
              // Success full Res..
      res.status(200).json({
        success: true,
        message: 'Login successful!',
        token: token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
  
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Login mein error: ' + error.message
      });
    }
  };
  
  // ============================================
  // EXPORT ALL FUNCTIONS
  // ============================================
  
  module.exports = {
    register,
    sendOTP,
    verifyOTP,
    login
  };