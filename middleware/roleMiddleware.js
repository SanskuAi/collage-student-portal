// Check ROLE => specific role user allowet 

const roleMiddleware = (...allowedRoles)=>{
    return (req,res,next)=>{
            try{
                if(!req.user){
                    return res.status(401).json({
                        success:false,
                        message:'User  not Authenticated'
                    }) ;
                }

                // Check user role
                const userRole = req.user.role ;
                
                if(!allowedRoles.includes(userRole)){
                    return res.status(403).json({
                        success:false,
                        message:`Access denied. Allowed roles:${allowedRoles.join(' ')}. Your role: ${userRole} `
                    }) ;
                } ;

                // role right next middleware Call it
                next()
                
            } catch(error){
                res.status(500).json({
                    success:false,
                    message:'Role middlwae error' +error.message
                });
            }
    }
}

module.exports= roleMiddleware