// LOGIN SECURITY check
        // LOGED IN hai ya NHAI 
const jwt  = require('jsonwebtoken')
const {verifyToken}= require('../utlis/generateToken')

const authMiddleware = (req,res,next)=>{
    try{
        const token = req.headers.authorization ;

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Token not Fond  , Try Again'
            });
        }

        const actualToken = token.split(' ')[1];
        if(!actualToken){
            return res.status(401).json({
                success:false,
                message: 'Invalid token Formmat "BEARER <token> use it'
            })
        }

        // token verify
        const decoded = verifyToken(actualToken) ;

        // token invalid or expired
        if(!decoded){
            return res.status(401).json({
                success: false,
                message:'Token incalid or Expired. Try again'
            });
        }

        req.user = decoded ;
        next();
    } catch(error){
        res.status(500).json({
            success:false,
            message:'Auth middleware mein error'+ error.message
        });
    }
} 

module.exports = authMiddleware